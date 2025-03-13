 import React, { useEffect, useRef, useState } from "react";
  import "./OtpVerifyPage.css";
 import { IoPerson } from "react-icons/io5";
 import { Profile, Key, EyeSlash, Eye } from 'iconsax-react';
 import useWidth from "../../Hooks/useWidth";
  import Checkbox from "../../components/ui/Checkbox";
 import useDarkmode from "../../Hooks/useDarkMode";
 import { loginPageImage } from "../../constant/images";


const OtpVerifyPage = ({otpArray, otpInputs, handleOtpChange, handleOtpKeyDown, verifyOtp, loading,formData,setFormData}) => {

   const { width, breakpoints } = useWidth()
       const [checked, setChecked] = useState(false);
   const [isViewed, setIsViewed] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
     const [isDark] = useDarkmode()


    return (
        <div className="otpBgImg relative  w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-end items-center  group  w-full h-[100%] bg-gradient-to-br">

                {/* <div
                    class="circle absolute  h-[157vh] w-[105vw] top-[-12.5em] right-[-42.5em]  bg-[#4CB8C4]/50  duration-500 z-[99] op"
                ></div> */}
                <div className="absolute">
                    <img src={`${loginPageImage}`} alt="" className="w-[120vw] h-[130vh]" />
                </div>
                {/* Glassy Card */}
                <div className="bg-white/20 ml-11 me-10 w-full lg:w-3/12 md::w-6/12 z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8 max-w-md h-auto">
                    {/* Logo */}
                    <div className="flex justify-center">
                        {/* <img src={logo} alt="Company Logo" className="" /> */}
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-start mt-4">Otp Verification</h2>
                        <p className=" text-sm text-start">Enter the verification code we just sent to your email or phone</p>
                    </div>

                        <div className="mt-10">
                            <div className={` flex justify-around mb-3 rounded-lg`}>
                                {otpArray.map((value,index)=>
                                <input
                            key={index}
                            ref={otpInputs[index]}
                            type="text"
                            value={value}
                            maxLength={1}
                           onChange={(e) => handleOtpChange(e, index)}
                         onKeyDown={(e) => handleOtpKeyDown(e, index)}


                           className=" text-center rounded-lg w-10 h-10  bg-[white]/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"

                                    />
 )}
                            
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-start ml-3 mt-4  text-base">
                            <Checkbox
                                value={checked}
                                onChange={() => setChecked(!checked)}
                                label="Keep me signed in"
                            />
                        </div> */}



                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-center mt-4  text-base">

                            {/* Didn't received the code?  <Link onClick={sendAgainOtp} className="hover:underline ml-2 font-bold">Send again</Link> */}
                        </div>

                        {/* Sign In Button */}
                        <div className="flex py-5 justify-center mb-10">
                            {/* <button className="w-52 mt-6 shadow-xl bg-white   py-2 rounded-full font-semibold  transition">
                                Verify otp
                            </button> */}


                            {showAddButton ? (
                                <button
                                    // disabled={loading}
                                    style={
                                        loading
                                            ? { opacity: "0.5", cursor: "not-allowed" }
                                            : { opacity: "1" }
                                    }
                                    className={`mt-6 shadow-xl bg-white  py-2 rounded-full font-semibold  transition  w-52 inline-flex justify-center text-center`}
                                    onClick={verifyOtp}

                                >
                                    {loading ? "" : "Verify otp"}
                                    {loading && (
                                        <>
                                            <svg
                                                className={`animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5 unset-classname`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Verify Otp
                                        </>
                                    )}
                                </button>
                            ) : (
                                <>Loading...</>
                            )}

                        </div>






                </div>
            </div>
        </div>
    );
};

export default OtpVerifyPage;




