import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useDarkmode from "../../Hooks/useDarkMode";
import authService from "../../services/auth.Service";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {

    const dispatch = useDispatch();
    const [isViewed, setIsViewed] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [isDark] = useDarkmode()
    const [formData, setFormData] = useState({
        identifier: ""
    })
    const { identifier } = formData
    const [formDataErr, setFormDataErr] = useState({
        identifier: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name == "identifier") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    identifier: "Email or Phone No. Is Required",
                }));
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    identifier: "",
                }));
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // ----- Applying Validation ----------
    function validationFunction() {
        if (!identifier) {
            setFormDataErr((prev) => ({
                ...prev,
                identifier: "Email or Phone No. Is Required",
            }));
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                identifier: "",
            }));
        }

    }


    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsViewed(false);
        setLoading(true)
        validationFunction();
        if (!identifier) {
            toast.error("Enter Your Email");
            setLoading(false)

            return;
        }
        try {
            const data = formData
            const response = await authService.forgotPassword(data);
            console.log("response",response)
            toast.success(response.data.message);

            if (response.status == 200) {
                // let email = data.email.split(".");
                navigate("/resetpassword",{state:{identifier}})
                setLoading(false)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
            setLoading(false)

        }
    };


    return (
        <form className="space-y-4 w-96  " onSubmit={onSubmit}>

            <label
                className={`  `}
            >
                <p className="mb-1">
                    Email or Phone Number <span className="text-red-500">*</span>
                </p>
                <input
                    name="identifier"
                    type="text"
                    placeholder="Enter Email or Phone Number"
                    value={identifier}
                    onChange={handleChange}
                    className="form-control outline-none w-96 rounded-md px-4 py-2 bg-light dark:bg-darkIconAndSearchBg dark:placeholder-darkPlaceholder"
                    readOnly={isViewed}
                />
                {
                    <p className="text-sm text-red-500">
                        {formDataErr.identifier}
                    </p>
                }
            </label>

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
                            {loading ? "" : "Forgot Password"}
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
                            className="text-slate-900 dark:text-white font-medium hover:underline"
                        >
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/signIn"
                            className="text-slate-900 dark:text-white font-medium hover:underline"
                        >
                            Back To Login
                        </Link>
                    </div>
                </div>
                <div></div>

                {/* to The Sign In */}
            </div>
        </form>
    );
};

export default ForgotPasswordForm;
