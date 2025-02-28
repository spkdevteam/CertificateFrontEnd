 import React, { useEffect, useRef, useState } from "react";
  import "./OtpVerifyPage.css";
// // import bgImg from "../../assets/images/all-img/bgImg.png";
// // import logo from "../../assets/images/logo/Logo.png";
// // import wavingHand from "../../assets/images/logo/waving-hand.png";
 import { IoPerson } from "react-icons/io5";
 import { Profile, Key, EyeSlash, Eye } from 'iconsax-react';
// import { Link, useLocation, useNavigate } from "react-router-dom";
 import useWidth from "../../Hooks/useWidth";
  import Checkbox from "../../components/ui/Checkbox";
// import authService from "../../services/auth.Service";
// import toast from "react-hot-toast";
// import { setClientUser } from "../../store/reducer/authLogin/authSlice";
// import { setCapability } from "../../store/reducer/capability/capability";
// import { useDispatch } from "react-redux";
 import useDarkmode from "../../Hooks/useDarkMode";
// // import overlay from "../../assets/images/all-img/overlay.png"


const OtpVerifyPage = ({otpArray, otpInputs, handleOtpChange, handleOtpKeyDown, verifyOtp, loading,formData,setFormData}) => {

   const { width, breakpoints } = useWidth()
       const [checked, setChecked] = useState(false);
//     const dispatch = useDispatch();
   const [isViewed, setIsViewed] = useState(false);
//     // const [loading, setLoading] = useState(false)
//     const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
//     const [otpErr, setOtpErr] = useState("")
     const [isDark] = useDarkmode()
//     const navigate = useNavigate();


//     // const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
//     // const [otp, setOtp] = useState("")
//     // const inputRefs = [
//     //     useRef(),
//     //     useRef(),
//     //     useRef(),
//     //     useRef(),
//     //     useRef(),
//     //     useRef(),
//     // ];
//     // console.log("otp", otp);

//     // const location = useLocation();
//     // console.log("location", location);

//     // // ----taking email from login form
//     // const [identifier, setIdentifier] = useState(() => {
//     //     return localStorage.getItem("identifier") || location?.state?.identifier || "";
//     // });
//     // // const identifier = location?.state?.identifier;
//     // console.log("identifier", identifier);


//     // useEffect(() => {
//     //     if (location?.state?.identifier) {
//     //         setIdentifier(location?.state?.identifier)
//     //         localStorage.setItem("identifier", location?.state?.identifier);
//     //     }

//     // }, [location])
//     // const handleChangeOtp = (e, index) => {
//     //     const value = e.target.value;
//     //     if (isNaN(value) || value.length > 1) {
//     //         return; // Allow only single numeric input
//     //     }

//     //     // Update the OTP array
//     //     const newOtp = [...otpValue];
//     //     newOtp[index] = value;

//     //     setOtpValue(newOtp);

//     //     // Auto-switch to the next box if a digit is entered
//     //     if (value && index < otpValue.length - 1) {
//     //         inputRefs[index + 1].current.focus();
//     //     }

//     //     const newOtpValue = parseInt(newOtp.join(""), 10);
//     //     setOtp(newOtpValue);
//     // };
//     // //------ moving forward and backward in otp field------
//     // const handleKeyDown = (e, index) => {
//     //     if (e.key === "Backspace" && index > 0 && !otpValue[index]) {
//     //         // Auto-switch to the previous box on backspace if the current box is empty
//     //         inputRefs[index - 1].current.focus();
//     //     }
//     // };

//     // const onSubmit = async (e) => {
//     //     e.preventDefault()
//     //     setLoading(true)
//     //     if (!otp) {
//     //         setLoading(false)
//     //         toast.error("Plese Enter Otp")
//     //         return
//     //     } else {
//     //         try {
//     //             // const emailArr = param.email.split("A");
//     //             const dataObject = { identifier: identifier, otp: otp.toString(), rememberMe: checked };
//     //             console.log("dataObject", dataObject);


//     //             const response = await authService.OtpSignIn(dataObject);
//     //             console.log("response", response);

//     //             localStorage.setItem("KOSMO_client_token", response.data.token);
//     //             localStorage.setItem("KOSMO_client_clientId", response.data.clientId);
//     //             localStorage.setItem("KOSMO_client_businessUnitId", response.data.businessUnitId);
//     //             localStorage.setItem(
//     //                 "KOSMO_client_adminInfo",
//     //                 JSON.stringify(response.data.adminInfo)
//     //             );
//     //             localStorage.setItem("KOSMO_client_expiryTime", response.data.expiryTime);
//     //             dispatch(setClientUser(response.data?.adminInfo));
//     //             dispatch(setCapability(response.data?.adminInfo?.role?.capability));
//     //             toast.success(response.data.message);
//     //             navigate("/dashboard");
//     //             setLoading(false)
//     //         } catch (error) {
//     //             // Handle known axios error 
//     //             console.log("error.response ", error);

//     //             setLoading(false)
//     //             if (error) {

//     //                 toast.error(error);

//     //             } else if (error.response) {
//     //                 const errorMessage = error.response?.data?.message || "Something went wrong!";
//     //                 toast.error(`Error: ${errorMessage}`);

//     //             }
//     //             else if (error.request) {
//     //                 // Network error or no response received
//     //                 toast.error("No response from server. Please check your network connection.");
//     //             } else {
//     //                 // Generic error handling for unexpected cases
//     //                 toast.error("An unexpected error occurred. Please try again later.");
//     //             }

//     //             // console.error("Error assigning group to admin:", error);

//     //         }

//     //     }

//     // };

//     // async function sendAgainOtp() {
//     //     try {
//     //         const dataObj = {
//     //             identifier: identifier
//     //         }
//     //         console.log("dataObj", dataObj);


//     //         const response = await authService.sendOtpAgain(dataObj);
//     //         // console.log("response", response);
//     //         toast.success(response?.data?.message)

//     //     } catch (error) {
//     //         console.log("error.response ", error);

//     //         setLoading(false)
//     //         if (error) {

//     //             toast.error(error);

//     //         } else if (error.response) {
//     //             const errorMessage = error.response?.data?.message || "Something went wrong!";
//     //             toast.error(`Error: ${errorMessage}`);

//     //         }
//     //         else if (error.request) {
//     //             // Network error or no response received
//     //             toast.error("No response from server. Please check your network connection.");
//     //         } else {
//     //             // Generic error handling for unexpected cases
//     //             toast.error("An unexpected error occurred. Please try again later.");
//     //         }

//     //     }

//     // }
    return (
        <div className="otpBgImg relative  w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-center items-center  group  w-full h-[100%] bg-gradient-to-br">

                {/* <div
                    class="circle absolute  h-[157vh] w-[105vw] top-[-12.5em] right-[-42.5em]  bg-[#4CB8C4]/50  duration-500 z-[99] op"
                ></div> */}
                <div className="absolute">
                    <img src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg" alt="" className="w-[120vw] h-[130vh]" />
                </div>
                {/* Glassy Card */}
                <div className="bg-white/20 ml-11 z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8 max-w-md h-auto">
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



// import React from "react";

// const OtpVerifyPage = ({ otpArray, otpInputs, handleOtpChange, handleOtpKeyDown, verifyOtp, loading,formData,setFormData }) => {
//     return (
//         <div className="otpBgImg flex items-center justify-center h-screen">
//             <div className="bg-white/20 backdrop-blur-lg shadow-lg border border-white/70 rounded-3xl p-8 max-w-md">
//                 <h2 className="text-2xl font-bold text-center">OTP Verification</h2>
//                 <p className="text-sm text-center">Enter the 6-digit code sent to your email</p>

//                 {/* OTP Input Fields */}
//                 <div className="flex justify-center gap-2 mt-5">
//                     {otpArray.map((value, index) => (
//                         <input
//                             key={index}
//                             ref={otpInputs[index]}
//                             type="text"
//                             value={value}
//                             maxLength={1}
//                             className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                             onChange={(e) => handleOtpChange(e, index)}
//                             onKeyDown={(e) => handleOtpKeyDown(e, index)}
//                         />
//                     ))}
//                 </div>

//                 <button
//                     // disabled={loading}
//                     className={`w-full mt-6 py-2 bg-blue-500 text-white font-semibold rounded-md ${
//                         loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
//                     }`}
//                     onClick={()=>{
//                         console.log("Otp button is clicked",formData.otp)
//                         verifyOtp()
//                     }}
//                 >
//                                  {loading ? "verify otp" :"sending..."}

//                 </button>
//             </div>
//         </div>
//     );
// };

// export default OtpVerifyPage;

