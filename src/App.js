import React, { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import SalaryIncome from "./components/SalaryIncome";
import HouseProperty from "./components/HouseProperty";
import Deductions from "./components/Deductions";
import TaxResult from "./components/TaxResult";
import SubmitButton from "./components/SubmitButton";
import AiSuggestions from "./components/AiSuggestions"; // New component for AI suggestions
import styles from "./App.module.css";

const App = () => {
  // Initialize state variables
  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    dob: "",
    residentialStatus: "resident",
    salary: 0,
    hra: 0,
    transportAllowance: 0,
    rentalIncome: 0,
    homeLoanInterest: 0,
    licPremium: 0,
    pfContribution: 0,
    tuitionFees: 0,
    healthPremiumSelf: 0,
    healthPremiumParents: 0,
  });

  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxLiability, setTaxLiability] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]); // State for AI suggestions

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to call DeepSeek API for tax-saving suggestions
  const fetchAiSuggestions = async (financialData) => {
    try {
      console.log("Sending financial data:", financialData);
      const response = await fetch("http://localhost:5000/api/tax-suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ financialData }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch AI suggestions");
      }
  
      const data = await response.json();
      setAiSuggestions(data.suggestions);
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
    }
  };

  // Calculate tax and fetch AI suggestions
  const calculateTax = () => {
    // Extract values from formData
    const {
      salary,
      hra,
      transportAllowance,
      rentalIncome,
      homeLoanInterest,
      licPremium,
      pfContribution,
      tuitionFees,
      healthPremiumSelf,
      healthPremiumParents,
    } = formData;

    // Calculate deductions
    const standardDeduction = 50000; // Standard deduction for salaried individuals
    const section80C = Math.min(
      parseFloat(licPremium) + parseFloat(pfContribution) + parseFloat(tuitionFees),
      150000
    ); // Max limit for Section 80C
    const section80D = Math.min(
      parseFloat(healthPremiumSelf) + parseFloat(healthPremiumParents),
      75000
    ); // Max limit for Section 80D
    const section24 = Math.min(parseFloat(homeLoanInterest), 200000); // Max limit for home loan interest

    // Calculate taxable income
    const totalIncome =
      parseFloat(salary) + parseFloat(rentalIncome) + parseFloat(hra) + parseFloat(transportAllowance);
    const totalDeductions = standardDeduction + section80C + section80D + section24;
    const taxableIncome = totalIncome - totalDeductions;

    // Calculate tax liability based on tax slabs
    let tax = 0;
    if (taxableIncome > 1000000) {
      tax = 112500 + (taxableIncome - 1000000) * 0.3; // 30% for income above ₹10,00,000
    } else if (taxableIncome > 500000) {
      tax = 12500 + (taxableIncome - 500000) * 0.2; // 20% for income between ₹5,00,000 and ₹10,00,000
    } else if (taxableIncome > 250000) {
      tax = (taxableIncome - 250000) * 0.05; // 5% for income between ₹2,50,000 and ₹5,00,000
    }

    // Add cess (4% of tax)
    const cess = tax * 0.04;
    const totalTax = tax + cess;

    // Update state
    setTaxableIncome(taxableIncome);
    setTaxLiability(totalTax);
    setShowResult(true);

    // Call DeepSeek API for AI suggestions
    const financialData = {
      income: totalIncome,
      deductions: totalDeductions,
      taxableIncome,
      taxLiability: totalTax,
    };
    fetchAiSuggestions(financialData);
  };

  return (
    <div className={styles.container}>
      <h1>Interactive ITR-1 Form</h1>
      <BasicInfo formData={formData} handleChange={handleChange} />
      <SalaryIncome formData={formData} handleChange={handleChange} />
      <HouseProperty formData={formData} handleChange={handleChange} />
      <Deductions formData={formData} handleChange={handleChange} />
      {showResult && <TaxResult taxableIncome={taxableIncome} taxLiability={taxLiability} />}
      {aiSuggestions.length > 0 && <AiSuggestions suggestions={aiSuggestions} />}
      <SubmitButton onClick={calculateTax} />
    </div>
  );
};

export default App;