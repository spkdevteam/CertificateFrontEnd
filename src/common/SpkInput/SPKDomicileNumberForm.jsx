import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox"; // Ensure this file exists & exports correctly

const SPKDomicileNumber = ({ className = "", value = "", onChange, onBlur, placeholder ,required=false}) => {
  const [domicileNumber, setDomicileNumber] = useState(value);
  const [error, setError] = useState("");
useEffect(()=>{
    if(required) setError('required')

  }),[required]
  useEffect(() => {
    setError(validateDomicileNumber(domicileNumber));
  }, [domicileNumber]); // Validate input whenever domicileNumber changes

  // Validation function
  const validateDomicileNumber = (value) => {
    const regex = /^[A-Z0-9]{8,12}$/; // Letters & Numbers Only (8-12 characters)
    if (!value) return "";
    if (!regex.test(value)) return "Invalid Domicile Number. Use 8-12 letters/numbers.";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase(); // Convert input to uppercase
    setDomicileNumber(newValue);
    setError(validateDomicileNumber(newValue));

    if (onChange) {
      onChange(newValue);
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    setError(validateDomicileNumber(domicileNumber));
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="domicileNumber"
      value={domicileNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKDomicileNumber;
