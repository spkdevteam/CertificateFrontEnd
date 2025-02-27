import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKElectionId = ({ className, value, onChange, onBlur, placeholder, required=false }) => {
  const [electionId, setElectionId] = useState(value || ""); // State for Election ID
  const [error, setError] = useState(""); // Error message state
  const [touched, setTouched] = useState(false); // Track if input is touched
  useEffect(()=>{
      if(required) setError('required')
  
    }),[required]
  // Election ID validation function
  const validateElectionId = (value) => {
    const regex = /^[A-Z0-9]{10}$/; // Election ID: 10 alphanumeric characters
    if (!value) return ""; // No error when input is empty
    if (!regex.test(value)) return "Election ID must be exactly 10 alphanumeric characters.";
    return ""; // No errors
  };

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase(); // Convert input to uppercase
    setElectionId(newValue);

    if (onChange) {
      onChange(newValue);
    }

    // Only validate if input is not empty
    if (newValue) {
      setError(validateElectionId(newValue));
    } else {
      setError(""); // Clear error when input is empty
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateElectionId(electionId)); // Validate on blur
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="electionId"
      value={electionId}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched ? error : ""} // Show error only if touched
      placeholder={placeholder}
      className={` ${error } ${className}`}
    />
  );
};

export default SPKElectionId;
