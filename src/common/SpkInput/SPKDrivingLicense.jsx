import React, { useEffect, useState } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKDrivingLicense = ({ className, value, onChange, onBlur, placeholder,required=false }) => {
  const [license, setLicense] = useState(value || ""); // State for Driving License number
  const [error, setError] = useState(""); // Error message state
  const [touched, setTouched] = useState(false); // Track if input is touched


  useEffect(()=>{
    if(required) setError('required')

  }),[required]
  // Driving License validation function
  const validateLicense = (value) => {
    if (!value) return ""; // No error when the field is empty

    const regex = /^[A-Za-z0-9]{6,12}$/; // License number: 6-12 alphanumeric characters
    if (!regex.test(value)) {
      return "Driving license number must be 6-12 alphanumeric characters.";
    }
    return ""; // No errors
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^A-Za-z0-9]/g, ""); // Remove non-alphanumeric characters

    // Limit the input to 12 characters
    if (newValue.length > 12) {
      newValue = newValue.slice(0, 12);
    }

    setLicense(newValue);

    if (onChange) {
      onChange(e);
    }

    if (touched) {
      setError(validateLicense(newValue));
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateLicense(license)); // Show error only if input is invalid (not empty)
    
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="license"
      value={license}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched && error ? error : ""} // Only show error if touched
      placeholder={placeholder}
      className={` ${error} ${className}`}
    />
  );
};

export default SPKDrivingLicense;
