import React from "react";

const SPKSubHeader = ({ value,name, className = "", ...rest }) => {
    return (
      <label name={name}  className={`p-2  w-full sm:w-auto text-lg font-semibold ${className}`} {...rest}>
        {value}
      </label>
    );
  };
  export default SPKSubHeader;