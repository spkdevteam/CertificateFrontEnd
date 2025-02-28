import React, { useState } from "react";
import "./ForgotPasswordPage.css"
// import bgImg from "../../assets/images/all-img/bgImg.png";
// import logo from "../../assets/images/logo/Logo.png";
// import wavingHand from "../../assets/images/logo/waving-hand.png";
import { IoPerson } from "react-icons/io5";
import { Profile, SmsSearch, ArrowCircleLeft } from 'iconsax-react';
// import overlay from "../../assets/images/all-img/overlay.png"
import { Link, useNavigate } from "react-router-dom";
import useWidth from "../../Hooks/useWidth";
import useDarkmode from "../../Hooks/useDarkMode";
import { useDispatch } from "react-redux";
import authService from "../../services/auth.Service";
import toast from "react-hot-toast";


const ForgotPasswordPage = ({formData,setFormData,loading,sendOtp}) => {


    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();
    const dispatch = useDispatch();
    const [isViewed, setIsViewed] = useState(false);
    // const [loading, setLoading] = useState(false)
    const [showAddButton, setShowAddButton] = useState(true)


    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const navigate = useNavigate()
    // const [formData, setFormData] = useState({
    //     identifier: ""
    // })
    // const { identifier } = formData
    // const [formDataErr, setFormDataErr] = useState({
    //     identifier: ""
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     if (name == "identifier") {
    //         if (value == "") {
    //             setFormDataErr((prev) => ({
    //                 ...prev,
    //                 identifier: "Email or Phone No. Is Required",
    //             }));
    //         } else {
    //             setFormDataErr((prev) => ({
    //                 ...prev,
    //                 identifier: "",
    //             }));
    //         }
    //     }

    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    // ----- Applying Validation ----------
    // function validationFunction() {
    //     if (!identifier) {
    //         setFormDataErr((prev) => ({
    //             ...prev,
    //             identifier: "Email or Phone No. Is Required",
    //         }));
    //     } else {
    //         setFormDataErr((prev) => ({
    //             ...prev,
    //             identifier: "",
    //         }));
    //     }

    // }

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsViewed(false);
    //     setLoading(true)
    //     validationFunction();
    //     if (!identifier) {
    //         toast.error("Enter Your Email");
    //         setLoading(false)

    //         return;
    //     }
    //     try {
    //         const data = formData
    //         const response = await authService.forgotPassword(data);
    //         console.log("response", response)
    //         toast.success(response.data.message);

    //         if (response.status == 200) {
    //             // let email = data.email.split(".");
    //             navigate("/resetpasswordPage", { state: { identifier } })
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         toast.error(error?.response?.data?.message);
    //         setLoading(false)

    //     }
    // };


    return (
        <div className="forgotPassImage relative bg-red-800  w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-center items-center  group  w-full h-[100%] bg-gradient-to-br">

                {/* <div
                    class="circle absolute  h-[157vh] w-[105vw] top-[-12.5em] right-[-42.5em]  bg-[#4CB8C4]/50  duration-500 z-[99] op"
                ></div> */}
                <div className="absolute">
                    <img src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg" alt="" className="w-[110vw] h-[130vh]" />
                </div>

                {/* Glassy Card */}
                <div className="bg-white/20 ml-11 z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8 max-w-lg h-auto">
                    {/* Logo */}
                    <div className="flex justify-center">
                        {/* <img src={logo} alt="Company Logo" className="" /> */}
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-start mt-4">Forgot your password? </h2>
                        <p className=" text-sm text-start">Please enter your registered email or phone</p>
                    </div>


                        {/* Input Fields */}
                        <div className="mt-6 relative ">
                            <input
                                name="identifier"
                                type="email"
                                // value={identifier}
                                // onChange={handleChange}
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-[white]/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Email or phone"
                                readOnly={isViewed}
                                value={formData?.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    
                            />
                            <div className="absolute top-4 px-2">
                                <SmsSearch color="#697689" className="text-lg" />
                            </div>

                            {/* {
                                <p className="text-sm mt-1 text-red-500">
                                    {formDataErr.identifier}
                                </p>
                            } */}
                        </div>

                        {/* Back to login */}
                        <div
                            onClick={() => navigate("/signInPage")}
                            className="flex items-center justify-end mt-4  text-base cursor-pointer">

                            <span><ArrowCircleLeft size="22" color="#697689" className="mr-1" /></span> <Link to="/signInPage" className="hover:underline">Back to login</Link>
                        </div>

                        {/* Sign In Button */}
                        <div className="flex py-5 justify-center mb-10">
                            {/* <button className="w-52 mt-6 mb-6 shadow-xl bg-white  py-2 rounded-full font-semibold  transition">
                                Send otp
                            </button> */}


                            {showAddButton ? (
                                <button
                                    disabled={loading}
                                    style={
                                        loading
                                            ? { opacity: "0.5", cursor: "not-allowed" }
                                            : { opacity: "1" }
                                    }
                                    className={`mt-6 shadow-xl bg-white  py-2 rounded-full font-semibold  transition  w-52 inline-flex justify-center text-center`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendOtp();
                                      }}
                            
                                >
                                    {loading ? "" : "Send otp"}
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
                                            Loading ...
                                        </>
                                    )}
                                </button>
                            ) : (
                                ""
                            )}

                        </div>




                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
