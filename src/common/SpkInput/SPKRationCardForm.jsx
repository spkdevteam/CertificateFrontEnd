import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKRationCardNumber = ({ 
  className, 
  value = "", 
  onChange, 
  onBlur, 
  placeholder,
  required = false 
}) => {
  const [rationCard, setRationCard] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required && !rationCard) {
      setError("Required");
    } else {
      setError("");
    }
  }, [required, rationCard]);

  // Ration Card validation function
  const validateRationCard = (value) => {
    if (!value) return required ? "Required" : "";

    const regex = /^[A-Z0-9]{10,12}$/; // Example: ABCD123456 or ABCD12345678
    return regex.test(value) ? "" : "Invalid Ration Card format. Must be 10-12 alphanumeric characters.";
  };

  // Handle input change
  const handleChange = (e) => {
    let newValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

    if (newValue.length > 12) {
      newValue = newValue.slice(0, 12);
    }

    setRationCard(newValue);
    if (onChange) onChange(e);

    setError(validateRationCard(newValue));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateRationCard(rationCard));
    if (onBlur) onBlur(e);
  };

  return (
    <SPKBaseInputBox
      type="text"
      name="rationCardNumber"
      value={rationCard}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={`border ${error } ${className}`} 
    />
  );
};

export default SPKRationCardNumber;
