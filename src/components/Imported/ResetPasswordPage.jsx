import React, { useState } from "react";
import "./ResetPasswordPage.css"
import { IoPerson } from "react-icons/io5";
import { Profile, SmsSearch, ArrowCircleLeft, Key, EyeSlash, Eye } from 'iconsax-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import authService from "../../services/auth.Service";
import useHandleUserHook from "../../Hooks/userHook";


const ResetPasswordPage = ({formData,setFormData}) => {

    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [loading, setLoading] = useState(false)
    const [showAddButton, setShowAddButton] = useState(true)
    const [isDark] = useDarkmode()
    const navigate = useNavigate()

    const location = useLocation()
    const identifier = location?.state?.identifier
    const [formDataErr, setFormDataErr] = useState({
        otp: "", password: "", confirmPassword: ""
    })
    const{resetUser}=useHandleUserHook()

    const { otp, password, confirmPassword,_id } = formData


    const handleChange = (e) => {
        const { name, value } = e.target
        // if (name == "otp") {
        //     if (value == "") {

        //         setFormDataErr((prev) => ({
        //             ...prev,
        //             otp: "OTP is Required",
        //         }))
        //     } else {
        //         setFormDataErr((prev) => ({
        //             ...prev,
        //             otp: "",
        //         }))
        //     }
        // }
        if (name == "password") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    password: "Password is Required",
                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    password: "",
                }))
            }
        }
        if (name == "confirmPassword") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    confirmPassword: "Confirm Password is required",
                }))
            }
            if (value !== password) {
                setFormDataErr((prev) => ({
                    ...prev,
                    confirmPassword: "Password & Confirm Password Must Matches",
                }))
            }
            else {
                setFormDataErr((prev) => ({
                    ...prev,
                    confirmPassword: "",
                }))
            }
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    console.log("formData", formData);


    function validationFunction() {
        if (!password) {
            setFormDataErr((prev) => ({
                ...prev,
                password: "Password is Required",
            }))
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                password: "",
            }))
        }

        if (!confirmPassword) {
            console.log("lllll");
            setFormDataErr((prev) => ({
                ...prev,
                confirmPassword: "Confirm Password is Required",
            }))
        } else if (password != confirmPassword) {
            setFormDataErr((prev) => ({
                ...prev,
                confirmPassword: "Password & Confirm Password Must Matches",
            }))
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                confirmPassword: "",
            }))
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        validationFunction()
        setLoading(true)
        if (!otp || !password || !confirmPassword) {
            toast.error("Please Fill All Data")
            setLoading(false)
            return

        } if (password != confirmPassword) {
            toast.error("Password And Confirm Password Must Matches")
            return

        }
        try {

            const response = await resetUser({
                id:_id,
                password: formData?.password,
                otp: formData?.otp
            })
            console.log("response", response);
            setLoading(false)

            if (response?.data?.status) {
            
                toast.success(response?.data?.message)
                navigate("/staff/login")
            }
            else{
                toast.error(response?.data?.message)
            }
        } catch (error) {
            setLoading(false)
            toast.error(response?.data?.message);
        }
    };



















    return (
        <div className="resetPassImage  relative w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-center items-center  group  w-full h-[100%] bg-gradient-to-br">

                {/* <div
                    class="circle absolute  h-[157vh] w-[105vw] top-[-12.5em] right-[-42.5em]  bg-[#4CB8C4]/50  duration-500 z-[99] op"
                ></div> */}
                <div className="absolute">
                    <img src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg" alt="" className="w-[110vw] h-[130vh]" />
                </div>
                {/* Glassy Card */}
                <div className="bg-white/20 lg:ml-28 z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8 max-w-lg h-auto">
                    {/* Logo */}
                    <div className="flex justify-center">
                        {/* <img src={logo} alt="Company Logo" className="" /> */}
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-start mt-4">Reset your password? </h2>
                        <p className=" text-sm text-start">Enter new password to reset</p>
                    </div>


                    <form onSubmit={onSubmit}>


                        <div className="mt-4 relative ">
                            <input
                                name="otp"
                                type="text"
                                value={otp || ""}
                                
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-[white]/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Enter otp"
                            />

                            {
                                <p className="text-sm mt-1 text-red-500">
                                    {formDataErr.otp}
                                </p>
                            }
                        </div>
                        <div className="mt-4 relative">
                            <input
                                type={isPasswordVissible ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={handleChange}
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Enter new password"
                            />
                            <div className="absolute top-4 px-2">
                                <Key color="#697689" className="text-lg" />
                            </div>
                            <button
                                type="button"
                                className="absolute right-0 top-7 transform -translate-y-1/2 p-2"
                                onClick={(e) =>
                                    setIsPasswordVissile((prev) => !prev)
                                }
                            >
                                {isPasswordVissible ? <Eye size="22" color="#697689" /> : <EyeSlash size="22" color="#697689" />}
                            </button>
                            {
                                <p className="text-sm text-red-500">{formDataErr.password}</p>
                            }
                        </div>

                        <div className="mt-4 relative">
                            <input
                                // type={isPasswordVissible ? "text" : "password"}
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Enter confirm password"
                            />
                            <div className="absolute top-4 px-2">
                                <Key color="#697689" className="text-lg" />
                            </div>
                            {/* <button
                            type="button"
                            className="absolute right-0 top-7 transform -translate-y-1/2 p-2"
                            onClick={(e) =>
                                setIsPasswordVissile((prev) => !prev)
                            }
                        >
                            {isPasswordVissible ? <Eye size="22" color="#697689" /> : <EyeSlash size="22" color="#697689" />}
                        </button> */}

                            {
                                <p className="text-sm text-red-500">{formDataErr.confirmPassword}</p>
                            }
                        </div>

                        {/* Back To Login */}
                        <div
                            onClick={() => navigate("/signInPage")}
                            className="flex items-center justify-end mt-4  text-base cursor-pointer">

                            <span><ArrowCircleLeft size="22" color="#697689" className="mr-1" /></span> <Link to="/signInPage" className="hover:underline">Back to login</Link>
                        </div>

                        {/* Sign In Button */}
                        <div className="flex py-5 justify-center mb-10">
                            {/* <button className="w-52 mt-6 shadow-xl bg-white  py-2 rounded-full font-semibold  transition">
                                Reset password
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
                                >
                                    {loading ? "" : "Reset password"}
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



                    </form>



                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
