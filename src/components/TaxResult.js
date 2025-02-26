import React from "react";
import styles from "./TaxResult.module.css";

const TaxResult = ({ taxableIncome, taxLiability, deductions }) => {
  return (
    <div className={styles.section}>
      <h2>Tax Calculation Result</h2>
      <p>Your taxable income: ₹{taxableIncome.toFixed(2)}</p>
      <p>Your tax liability: ₹{taxLiability.toFixed(2)}</p>
      
      <h3>Suggested Tax-Saving Strategies Based On Yor Data</h3>
      <ul>
        <li>Maximize Section 80C benefits by investing in PPF, ELSS, or Tax-saving FDs.</li>
        <li>Contribute ₹50,000 to NPS under Section 80CCD(1B) for additional deductions.</li>
        <li>Ensure health insurance coverage for parents (₹50,000 deduction if they are senior citizens).</li>
        <li>Claim rent benefits under 80GG if not receiving HRA.</li>
        <li>Consider home loan tax benefits (₹2,00,000 deduction on interest under Section 24(b)).</li>
      </ul>
    </div>
  );
};

export default TaxResult;