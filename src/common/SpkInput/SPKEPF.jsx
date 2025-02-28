import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKEPFUAN = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,
  required = false 
}) => {
  const [uan, setUan] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required) setError("Required");
  }, [required]);

  // EPF UAN validation function
  const validateUAN = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[0-9]{12}$/; // Must be exactly 12 digits
    
    if (!regex.test(value)) {
      return "Invalid UAN format. Must be exactly 12 digits.";
    }

    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 12) {
      newValue = newValue.slice(0, 12);
    }

    setUan(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validateUAN(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateUAN(uan)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="epf_uan"
      value={uan}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error} 
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKEPFUAN;
