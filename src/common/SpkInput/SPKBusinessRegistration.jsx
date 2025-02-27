import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKBusinessRegistration = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,
  required = false 
}) => {
  const [cni, setCni] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required) setError("Required");
  }, [required]);

  // CNI validation function
  const validateCNI = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[A-Z0-9]{12}$/; // Must be exactly 12 alphanumeric characters
    
    if (!regex.test(value)) {
      return "Invalid CNI format. Must be exactly 12 alphanumeric characters.";
    }

    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 12) {
      newValue = newValue.slice(0, 12);
    }

    setCni(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validateCNI(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateCNI(cni)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="business_registration"
      value={cni}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error} 
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKBusinessRegistration;
