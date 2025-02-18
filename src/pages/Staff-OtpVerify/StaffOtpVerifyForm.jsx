import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Checkbox from "../../components/ui/Checkbox";
import useDarkmode from "../../Hooks/useDarkMode";
import authStaffService from "../../services/authStaff.service";
import toast from "react-hot-toast";
import { setClientUser } from "../../store/reducer/authLogin/authSlice";
import { setCapability } from "../../store/reducer/capability/capability";

const StaffOtpVerifyForm = () => {

    const dispatch = useDispatch();
    const [isViewed, setIsViewed] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [otp, setOtp] = useState("")
    const [otpErr, setOtpErr] = useState("")
    const [checked, setChecked] = useState(false);
    const [isDark] = useDarkmode()
    const navigate = useNavigate();

    const location = useLocation();
    // ----taking email from login form
    const identifier = location?.state?.identifier;

    const handleChange = (e) => {
        setOtp(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!otp) {
            setLoading(false)
            toast.error("Plese Enter Otp")
            return
        } else {
            try {
                // const emailArr = param.email.split("A");
                const dataObject = { identifier: identifier, otp: otp, rememberMe: checked };

                const response = await authStaffService.OtpSignIn(dataObject);
                console.log("response staff login", response);

                localStorage.setItem("KOSMO_client_token", response.data.token);
                localStorage.setItem("KOSMO_client_clientId", response.data.clientId);
                localStorage.setItem("KOSMO_client_businessUnitId", response.data.businessUnitId);
                localStorage.setItem(
                  "KOSMO_client_adminInfo",
                  JSON.stringify(response.data.adminInfo)
                );
                localStorage.setItem("KOSMO_client_expiryTime", response.data.expiryTime);
                dispatch(setClientUser(response.data?.adminInfo));
                dispatch(setCapability(response.data?.adminInfo?.role?.capability));
                toast.success(response.data.message);
                navigate("/dashboard");
                setLoading(false)
            } catch (error) {
                // Handle known axios error 
                console.log("error.response ", error);

                setLoading(false)
                if (error) {

                    toast.error(error);

                } else if (error.response) {
                    const errorMessage = error.response?.data?.message || "Something went wrong!";
                    toast.error(`Error: ${errorMessage}`);

                }
                else if (error.request) {
                    // Network error or no response received
                    toast.error("No response from server. Please check your network connection.");
                } else {
                    // Generic error handling for unexpected cases
                    toast.error("An unexpected error occurred. Please try again later.");
                }

                // console.error("Error assigning group to admin:", error);

            }

        }

    };





    return (
        <form className="space-y-4 w-96  " onSubmit={onSubmit}>

            <label
                className={`  `}
            >
                <p className="mb-1">
                    OTP <span className="text-red-500">*</span>
                </p>
                <input
                    name="otp"
                    type="text"
                    placeholder="Enter Your OTP"
                    value={otp}
                    onChange={handleChange}
                    className="form-control outline-none w-96 rounded-md px-4 py-2 bg-light  dark:placeholder-darkPlaceholder dark:bg-darkIconAndSearchBg"
                    readOnly={isViewed}
                />
                {
                    <p className="text-sm text-red-500">
                        {otpErr}
                    </p>
                }
            </label>


            <div className="flex justify-between">
                <Checkbox
                    value={checked}
                    onChange={() => setChecked(!checked)}
                    label="Keep me signed in"
                />
                <Link
                    to="/staff/forgotpassword"
                    className="text-sm text-[#06ADB1] dark:text-white text-slate-800 dark:text-slate-400 leading-6 font-medium"
                >
                    Forgot Password?{" "}
                </Link>
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
                            className={`${isDark ? "bg-darkBtn hover:bg-darkBtnHover" : "bg-loginBtnBgColor hover:bg-black "} w-96 p-1 text-white inline-flex justify-center text-center rounded-lg`}
                        >
                            {loading ? "" : "Submit OTP"}
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
                            to="/staff/login"
                            className="text-[#06ADB1] dark:text-white font-medium hover:underline"
                        >
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/staff/login"
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

export default StaffOtpVerifyForm;
