// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import useDarkmode from "../../Hooks/useDarkMode";
// import authService from "../../services/auth.Service";
// import toast from "react-hot-toast";
// import Modal from "react-modal";
// import useHandleUserHook from "../../Hooks/userHook";
// import { div } from "framer-motion/client";
// import SPKInputPassword from "../../common/Input/SPKInputPassword";


// const ForgotPasswordForm = ({ formData, sendOtp, loading, setFormData }) => {

//     return (


//         <div className="w-full flex ">
//             <div className="w-1/2 " >
//                 <img
//                     src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg"
//                     alt="Product screenshot"
//                     className="h-screen w-full object-cover    ring-1 shadow-xl ring-gray-400/10"
//                 />


//             </div>

//             <div className=" h-full w-1/2  flex justify-center flex-col m-auto items-center  " >

//                 <label >
//                     <p className="mb-1">Email <span className="text-red-500">*</span></p>
//                     <input name="email"
//                         type="email"
//                         placeholder="Enter Email"
//                         // className="form-control w-96 rounded-md px-4 py-2"
//                         className="border outline-none  border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"

//                         value={formData?.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     />
//                 </label>

//                 <button
//                     className="w-70 p-2 mt-2 bg-blue-500 text-white rounded-lg"
//                     onClick={(e) => {
//                         e.preventDefault()
//                         sendOtp()
//                     }
//                     }

//                 >
//                     {loading ? "Sending..." : "Forgot Password"}

//                 </button>
//             </div>
//         </div>


//     );
// };

// export default ForgotPasswordForm;


import React from "react";

const ForgotPasswordForm = ({ formData, sendOtp, loading, setFormData }) => {
  return (
    <div className="flex w-full h-screen">
      {/* Image Section */}
      {/* <div className="hidden sm:block sm:w-1/2">
        <img
          src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg"
          alt="Product screenshot"
          className="w-full h-full object-cover"
        />
      </div> */}

<div className="w-1/2 ">
  <img
    src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg"
    alt="Product screenshot"
    className="h-screen w-full object-cover    ring-1 shadow-xl ring-gray-400/10"
  />
</div>

      
      {/* Form Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-12">
        <label className="w-full max-w-md">
          <p className="mb-1 text-gray-700">Email <span className="text-red-500">*</span></p>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            className="border border-gray-300 outline-none focus:border-green-500 block w-full rounded-md px-3 py-2 text-base text-gray-900"
            value={formData?.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        
        <button
          className="w-full max-w-md p-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={(e) => {
            e.preventDefault();
            sendOtp();
          }}
        >
          {loading ? "Sending..." : "Forgot Password"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

