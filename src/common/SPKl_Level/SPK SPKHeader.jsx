import React from "react";
const SPKHeader = ({ name,value, className = "", ...rest }) => {
    return (
      <label name={name} className={`p-2  w-full sm:w-auto text-md font-medium ${className}`} {...rest}>
        {value}
      </label>
    );
  };
  
  export default SPKHeader;
  