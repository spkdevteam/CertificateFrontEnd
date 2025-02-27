import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKGSTNumber = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,
  required = false 
}) => {
  const [gstNumber, setGstNumber] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required) setError("Required");
  }, [required]);

  // GST validation function
  const validateGST = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/; // Example: 22AAAAA0000A1Z5
    
    if (!regex.test(value)) {
      return "Invalid GST format. Example: 22AAAAA0000A1Z5";
    }

    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 15) {
      newValue = newValue.slice(0, 15);
    }

    setGstNumber(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validateGST(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateGST(gstNumber)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="gstNumber"
      value={gstNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKGSTNumber;
