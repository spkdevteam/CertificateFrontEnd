import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import authService from "../../services/auth.Service";

const ResetPasswordForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isDark] = useDarkmode()

    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [isConfirmPasswordVissible, setConfirmIsPasswordVissile] = useState(false);
    const [formData, setFormData] = useState({
        otp: "", password: "", confirmPassword: ""
    })
    const location = useLocation()
    const identifier = location?.state?.identifier
    const [formDataErr, setFormDataErr] = useState({
        otp: "", password: "", confirmPassword: ""
    })

    const { otp, password, confirmPassword } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name == "otp") {
            if (value == "") {

                setFormDataErr((prev) => ({
                    ...prev,
                    otp: "OTP is Required",
                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    otp: "",
                }))
            }
        }
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
        if (!otp) {
            setFormDataErr((prev) => ({
                ...prev,
                otp: "OTP is Required",
            }))
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                otp: "",
            }))
        }
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
        if (!otp || !password || !confirmPassword) {
            toast.error("Please Fill All Data")

            return

        } if (password != confirmPassword) {
            toast.error("Password And Confirm Password Must Matches")
            return

        }
        try {

            const response = await authService.resetPassword({
                identifier: identifier,
                password: formData?.password,
                otp: formData?.otp
            })
            console.log("response", response);

            if (response) {
                toast.success(response?.data?.message)
                navigate("/signIn")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const isNumber = (e) => {
        const inputValue = e.target.value;
        // Filter out non-numeric characters using regular expression
        const numericValue = inputValue.replace(/\D/g, "");

    }


    return (
        <form className="space-y-4 w-96  " onSubmit={onSubmit}>

            <label
                className={`  `}
            >
                <p className="mb-1">
                    Email <span className="text-red-500">*</span>
                </p>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter Your Email."
                    value={identifier}
                    className="form-control w-96 rounded-md px-4 py-2 bg-[#eaeef1]   dark:bg-darkIconAndSearchBg dark:placeholder-darkPlaceholder"
                    readOnly
                />
                
            </label>
            <label
                className=""
            >
                <p className="mb-1 mt-2">
                    OTP <span className="text-red-500">*</span>
                </p>
                <input
                    name="otp"
                    type="text"
                    placeholder="Enter OTP."
                    value={otp}
                    onChange={handleChange}
                    onInput={isNumber}
                    className="form-control outline-none w-96 rounded-md px-4 py-2 bg-[#eaeef1]  dark:bg-darkIconAndSearchBg dark:placeholder-darkPlaceholder"
                />
                {
                    <p className="text-sm text-red-500">
                        {formDataErr.otp}
                    </p>
                }
            </label>
            <div>
                <label
                    className={` `}
                >
                    <p className="mb-1">
                        Password <span className="text-red-500">*</span>
                    </p>
                    <div className="relative w-96">
                        <input
                            type={isPasswordVissible ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            className="form-control outline-none w-96 rounded-md px-4 py-2 bg-[#eaeef1]  dark:bg-darkIconAndSearchBg dark:placeholder-darkPlaceholder"
                            // readOnly={isViewed}
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
                            onClick={(e) =>
                                setIsPasswordVissile((prev) => !prev)
                            }
                        >
                            {isPasswordVissible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {
                        <p className="text-sm text-red-500">{formDataErr.password}</p>
                    }
                </label>
            </div>
            <div>
                <label
                    className={` `}
                >
                    <p className="mb-1">
                        Confirm Password <span className="text-red-500">*</span>
                    </p>
                    <div className="relative w-96">
                        <input
                            type={isConfirmPasswordVissible ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder="Enter Your Confirm Password"
                            className="form-control outline-none w-96 rounded-md px-4 py-2 bg-[#eaeef1]  dark:bg-darkIconAndSearchBg dark:placeholder-darkPlaceholder"
                            // readOnly={isViewed}
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
                            onClick={(e) =>
                                setConfirmIsPasswordVissile((prev) => !prev)
                            }
                        >
                            {isPasswordVissible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {
                        <p className="text-sm text-red-500">{formDataErr.confirmPassword}</p>
                    }
                </label>
            </div>

            <div className="lg:col-span-2 col-span-1">
                <div className="ltr:text-right rtl:text-left">
                    {showAddButton ? (
                        <button
                            disabled={loading}
                            style={
                                loading
                                    ? { opacity: "0.5", cursor: "not-allowed" }
                                    : { opacity: "1" }
                            }
                            className={`${isDark ? "bg-darkBtn hover:bg-darkBtnHover" : "bg-loginBtnBgColor hover:bg-black "} w-96 p-2 text-white inline-flex justify-center text-center rounded-lg`}
                        >
                            {loading ? "" : "Reset Password"}
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
            <div className="md:max-w-[full] font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
                <div className="flex justify-between">
                    <div>
                        <Link
                            to="/signIn"
                            className="text-[#06ADB1] dark:text-white font-medium hover:underline"
                        >
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/signIn"
                            className="text-[#06ADB1] dark:text-white font-medium hover:underline"
                        >
                            Back To Login
                        </Link>
                    </div>
                </div>


                {/* to The Sign In */}
            </div>
        </form>
    );
};

export default ResetPasswordForm;
