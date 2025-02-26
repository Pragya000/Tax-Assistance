import React, { useState } from "react";
import styles from "./Deductions.module.css";

const Deductions = ({ formData, handleChange }) => {
  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div className={styles.section}>
      <h2>Deductions</h2>
      <div className={styles.formGroup}>
        <label htmlFor="licPremium">LIC Premium (₹):</label>
        <input
          type="number"
          id="licPremium"
          name="licPremium"
          value={formData.licPremium}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pfContribution">Provident Fund (PF) Contribution (₹):</label>
        <input
          type="number"
          id="pfContribution"
          name="pfContribution"
          value={formData.pfContribution}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tuitionFees">Tuition Fees (₹):</label>
        <input
          type="number"
          id="tuitionFees"
          name="tuitionFees"
          value={formData.tuitionFees}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="healthPremiumSelf">
          Health Insurance Premium for Self, Spouse, and Children (₹):
        </label>
        <input
          type="number"
          id="healthPremiumSelf"
          name="healthPremiumSelf"
          value={formData.healthPremiumSelf}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            id="hasHealthInsuranceParents"
            checked={showSection}
            onChange={toggleSection}
          />
          Do you pay health insurance for your parents?
        </label>
      </div>
      {showSection && (
        <div className={styles.section}>
          <div className={styles.formGroup}>
            <label htmlFor="healthPremiumParents">
              Health Insurance Premium for Parents (₹):
            </label>
            <input
              type="number"
              id="healthPremiumParents"
              name="healthPremiumParents"
              value={formData.healthPremiumParents}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Deductions;