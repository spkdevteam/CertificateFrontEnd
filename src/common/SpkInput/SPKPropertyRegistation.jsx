import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKPropertyRegistration = ({ 
  className, 
  value, 
  onChange, 
  onBlur, 
  placeholder,

  required=false
}) => {
  const [registrationNumber, setRegistrationNumber] = useState(value || ""); 
  const [error, setError] = useState(""); 
  const [touched, setTouched] = useState(false); 


  useEffect(()=>{
      if(required) setError('required')
  
    }),[required]

  // Property registration validation function
  const validateRegistrationNumber = (value) => {
    if (!value) {
      return ""; // No error on empty input
    }

    const regex = /^[A-Z0-9]{10}$/; // Must be exactly 10 alphanumeric characters
    
    if (!regex.test(value)) {
      return "Invalid registration number. Must be 10 alphanumeric characters.";
    }

    return ""; 
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }

    setRegistrationNumber(newValue);
    
    if (onChange) {
      onChange(e);
    }

    // Remove error dynamically when the user backspaces or clears input
    setError(validateRegistrationNumber(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateRegistrationNumber(registrationNumber)); // Only show error on blur if invalid
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="property_registration"
      value={registrationNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKPropertyRegistration;
