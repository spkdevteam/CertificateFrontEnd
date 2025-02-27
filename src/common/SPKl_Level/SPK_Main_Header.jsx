import React from "react";

const SPKMainHeader = ({ value,name, className = "", ...rest }) => {
  return (
    <label name={name} className={`p-2  w-full sm:w-auto text-xl font-bold ${className}`} {...rest}>
      {value}
      
    </label>
  );
};
export default SPKMainHeader;