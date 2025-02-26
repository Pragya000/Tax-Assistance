import React from "react";
import styles from "../App.module.css";

const AiSuggestions = ({ suggestions }) => {
  return (
    <div className={styles.aiSuggestions}>
      <h2>AI-Powered Tax-Saving Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AiSuggestions;