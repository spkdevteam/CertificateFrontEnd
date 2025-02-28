import React, { useState } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKAyushmanHealthCard = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder
}) => {
  const [healthCard, setHealthCard] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  // Ayushman Bharat Health Card validation function
  const validateHealthCard = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[0-9]{14}$/; // Must be exactly 14 digits
    
    if (!regex.test(value)) {
      return "Invalid Health Card format. Must be exactly 14 digits.";
    }

    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 14) {
      newValue = newValue.slice(0, 14);
    }

    setHealthCard(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    if (!newValue) {
      setError("");
    } else {
      setError(validateHealthCard(newValue));
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateHealthCard(healthCard)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="healthCard"
      value={healthCard}  // Fixed incorrect 'uan' reference
      onChange={handleChange}
      onBlur={handleBlur}
      error={error} 
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKAyushmanHealthCard;
