import React from "react";
import styles from "./SalaryIncome.module.css";

const SalaryIncome = ({ formData, handleChange }) => {
  return (
    <div className={styles.section}>
      <h2>Salary Income</h2>
      <div className={styles.formGroup}>
        <label htmlFor="salary">Annual Salary (₹):</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="hra">House Rent Allowance (HRA) (₹):</label>
        <input
          type="number"
          id="hra"
          name="hra"
          value={formData.hra}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="transportAllowance">Transport Allowance (₹):</label>
        <input
          type="number"
          id="transportAllowance"
          name="transportAllowance"
          value={formData.transportAllowance}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SalaryIncome;