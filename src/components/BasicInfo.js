import React from "react";
import styles from "./BasicInfo.module.css";

const BasicInfo = ({ formData, handleChange }) => {
  return (
    <div className={styles.section}>
      <h2>Basic Information</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pan">PAN Number:</label>
        <input
          type="text"
          id="pan"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="residentialStatus">Residential Status:</label>
        <select
          id="residentialStatus"
          name="residentialStatus"
          value={formData.residentialStatus}
          onChange={handleChange}
          required
        >
          <option value="resident">Resident</option>
          <option value="nonResident">Non-Resident</option>
          <option value="residentButNotOrdinarilyResident">
            Resident but Not Ordinarily Resident
          </option>
        </select>
      </div>
    </div>
  );
};

export default BasicInfo;