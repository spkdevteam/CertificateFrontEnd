import React from "react";

const SPKColumnDiv = ({ children, className = "", ...rest }) => {
  return (
    <div
      className={`${className}   flex flex-col  w-full max-w-full  p-4 md:p-6 lg:p-8 gap-4 responsive`}
      {...rest}
    >
      {children}
      
    </div>
  );
};

export default SPKColumnDiv;
