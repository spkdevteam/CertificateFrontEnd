import React, { useState,useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKPassport = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,
  required=false
}) => {
  const [passport, setPassport] = useState(value || ""); 
  const [error, setError] = useState(""); 
  const [touched, setTouched] = useState(false); 
  useEffect(()=>{
      if(required) setError('required')
  
    }),[required]
  // Passport validation function
  const validatePassport = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[A-Z][0-9]{7}$/; // Example: A1234567 (1 letter, 7 digits)
    
    if (!regex.test(value)) {
      return "Invalid passport format. Example: A1234567";
    }

    return ""; 
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 8) {
      newValue = newValue.slice(0, 8);
    }

    setPassport(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validatePassport(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validatePassport(passport)); 
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="passport"
      value={passport}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched ? error : ""} 
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKPassport;
