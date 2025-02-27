// import React, { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import SPKBaseInputBox from "./InputBox";

// const SPKInputPassword = ({ 
//   className = "", 
//   value = "", 
//   onChange, 
//   onBlur, 
//   placeholder, 
//   required = false 
// }) => {
//   const [password, setPassword] = useState(value);
//   const [error, setError] = useState("");
//   const [touched, setTouched] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (required && !password) {
//       setError("Password is required");
//     } else {
//       setError("");
//     }
//   }, [required, password]);

//   const validatePassword = (password) => {
//     if (!password) return required ? "Password is required" : "";
//     if (password.length < 8) return "Password must be at least 8 characters";
//     if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
//     if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
//     if (!/[0-9]/.test(password)) return "Password must contain at least one number";
//     if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) return "Password must contain at least one special character";
//     return "";
//   };

//   const handleChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     if (onChange) onChange(e);
//     setError(validatePassword(newPassword));
//   };

//   const handleBlur = (e) => {
//     setTouched(true);
//     setError(validatePassword(password));
//     if (onBlur) onBlur(e);
//   };

//   return (
//     <div className="relative flex items-center  border rounded-md p-2 gap-2 ">
//       <SPKBaseInputBox
//         type={showPassword ? "text" : "password"}
//         name="password"
//         value={password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         error={error}
//         placeholder={placeholder}
//         className={`w-full absolute px-3 py-1 text-sm border-none outline-none ${className}`}
//       />
//       <span 
//         onClick={() => setShowPassword(!showPassword)} 
//         className="cursor-pointer text-gray-600 hover:text-gray-800 p-2"
//       >
//         {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//       </span>
//     </div>
//   );
// };

// export default SPKInputPassword;
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SPKBaseInputBox from "./InputBox";

const SPKInputPassword = ({ 
  className = "", 
  value = "", 
  onChange, 
  onBlur, 
  placeholder, 
  required = false 
}) => {
  const [password, setPassword] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (required && !password) {
      setError("Password is required");
    } else {
      setError("");
    }
  }, [required, password]);

  const validatePassword = (password) => {
    if (!password) return required ? "Password is required" : "";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) return "Password must contain at least one special character";
    return "";
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (onChange) onChange(e);
    setError(validatePassword(newPassword));
  };

  const handleBlur = (e) => {
    setTouched(true);
    setError(validatePassword(password));
    if (onBlur) onBlur(e);
  };

  return (
    <div className="relative flex items-center border rounded-md px-3 py-2 w-full">
      <SPKBaseInputBox
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        placeholder={placeholder}
        className={`w-full pr-10 text-sm border-none outline-none ${className}`}
      />
      <span 
        onClick={() => setShowPassword(!showPassword)} 
        className="absolute right-3 cursor-pointer text-gray-600 hover:text-gray-800"
      >
        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
      </span>
    </div>
  );
};

export default SPKInputPassword;