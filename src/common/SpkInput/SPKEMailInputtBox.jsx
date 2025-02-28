import React, { useState, useEffect } from "react";
import SPKBaseInputBox from "./InputBox";

const SPKEmailInputBox = ({ 
  className, 
  value = "", 
  onChange, 
  onBlur, 
  placeholder, 
  required = false 
}) => {
  const [email, setEmail] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (required && !email) {
      setError("Email address is required");
    } else {
      setError("");
    }
  }, [required, email]);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return required ? "Email address is required." : "";
    if (!emailRegex.test(email)) return "Invalid email address format.";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (onChange) onChange(e);
    setError(validateEmail(newEmail));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validateEmail(email));
    if (onBlur) onBlur(e);
  };

  return (
    <SPKBaseInputBox
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      placeholder={placeholder}
      className={` ${className}`}
    />
  );
};

export default SPKEmailInputBox;
