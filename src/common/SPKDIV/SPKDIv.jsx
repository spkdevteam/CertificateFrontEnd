import React from "react";

// const SPKBaseDiv = ({ value,  name,   className = "", ...rest }) => {
//   return (
//   <div  value={value} name={name} className={className} {...rest}>

//     <label htmlFor="">Email:

//     </label>

//   </div>
   
//   );
// };

// export default SPKBaseDiv;
const SPKRowDiv = ({ children, className = "", ...rest }) => {
  return (
    <div
      className={`${className}   flex flex-col lg:flex-row  w-full max-w-full  p-4 md:p-6 lg:p-8 gap-4 responsive`}
      {...rest}
    >
      {children}
      
    </div>
  );
};

export default SPKRowDiv;
