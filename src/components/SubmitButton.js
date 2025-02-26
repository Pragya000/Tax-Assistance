import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ onClick }) => {
  return (
    <button className={styles.submitBtn} onClick={onClick}>
      Calculate Tax
    </button>
  );
};

export default SubmitButton;