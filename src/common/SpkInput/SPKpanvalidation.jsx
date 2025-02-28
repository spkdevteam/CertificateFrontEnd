import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKPan = ({ className, value = "", onChange, onBlur, placeholder  , required= false}) => {
  const [pan, setPan] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false); // Track if input is touched
useEffect(()=>{
      if(required) setError('required')
  
    }),[required]
  // PAN validation function
  const validatePan = (value) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format: 5 letters, 4 digits, 1 letter
    if (!value) return ""; // No error for empty input
    if (!regex.test(value)) return "Invalid PAN format. Example: ABCDE1234F.";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase(); // Convert input to uppercase
    setPan(newValue);

    if (onChange) {
      onChange(newValue);
    }

    // Don't show error while typing
    setError(newValue.length > 0 ? validatePan(newValue) : "");
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validatePan(pan)); // Validate on blur

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="pan"
      value={pan}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched ? error : ""} // Show error only if touched
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKPan;
