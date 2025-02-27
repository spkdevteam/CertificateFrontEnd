import React from "react";

const SPKBaseInputBox = ({  value, type = "text", name, onChange, onBlur,   error,  className = "",  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value} 
      onChange={onChange} 
      onBlur={onBlur}
      className={`p-2 rounded-md focus:outline-0 focus:ring-0 outline-none placeholder:p-1 border  sm:w-auto ${error? 'bg-red-200 bg-opacity-5 ':'' } ${className}`}
      {...rest}
    />
  );
};

export default SPKBaseInputBox;
// import React from "react";

// const SPKBaseInputBox = ({
//   value,
//   type = "text",
//   name,
//   onChange,
//   onBlur,
//   error,
//   className = "",
//   ...rest
// }) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       onBlur={onBlur}
//       className={`p-2 rounded-md focus:outline-0 focus:ring-0 outline-none placeholder:p-1 border  sm:w-auto ${error ? 'bg-red-200 bg-opacity-5 ' : ''} ${className}`}
//       {...rest}
//     />
//   );
// };

// export default SPKBaseInputBox;

