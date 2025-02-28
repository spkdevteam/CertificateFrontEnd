import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKAdhar = ({ className, value = "", onChange, onBlur, placeholder, required=false }) => {
  const [aadhaar, setAadhaar] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false); // Track if input is touched
useEffect(()=>{
    if(required) setError('required')

  }),[required]
  // Aadhaar validation function
  const validateAadhaar = (value) => {
    const regex = /^[0-9]{12}$/;
    if (!value) return ""; // No error for empty input
    if (!regex.test(value)) return "Aadhaar number must be exactly 12 digits.";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setAadhaar(newValue); // Update state

    if (onChange) {
      onChange(newValue);
    }

    // Do not show error while typing
    if (newValue.length > 0 && newValue.length < 12) {
      setError("Aadhaar number must be exactly 12 digits.");
    } else {
      setError("");
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateAadhaar(aadhaar)); // Validate on blur

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="aadhaar"
      value={aadhaar}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched ? error : ""} // Show error only if touched
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKAdhar;
