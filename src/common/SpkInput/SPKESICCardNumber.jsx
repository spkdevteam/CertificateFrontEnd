import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKESICCardNumber = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,
  required = false 
}) => {
  const [esic, setEsic] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required) setError("Required");
  }, [required]);

  // ESIC Card Number validation function
  const validateESIC = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[0-9]{10}$/; // Must be exactly 10 digits
    
    if (!regex.test(value)) {
      return "Invalid ESIC format. Must be exactly 10 digits.";
    }

    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }

    setEsic(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validateESIC(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateESIC(esic)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="esic_card_number"
      value={esic}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKESICCardNumber;
