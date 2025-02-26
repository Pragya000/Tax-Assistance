import React, { useState } from "react";
import styles from "./HouseProperty.module.css";

const HouseProperty = ({ formData, handleChange }) => {
  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div className={styles.section}>
      <h2>House Property Income</h2>
      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            id="hasHouseProperty"
            checked={showSection}
            onChange={toggleSection}
          />
          Do you own a house property?
        </label>
      </div>
      {showSection && (
        <div className={styles.section}>
          <div className={styles.formGroup}>
            <label htmlFor="rentalIncome">Rental Income (₹):</label>
            <input
              type="number"
              id="rentalIncome"
              name="rentalIncome"
              value={formData.rentalIncome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="homeLoanInterest">Interest on Home Loan (₹):</label>
            <input
              type="number"
              id="homeLoanInterest"
              name="homeLoanInterest"
              value={formData.homeLoanInterest}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseProperty;