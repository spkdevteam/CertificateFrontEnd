import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import logoIcon from "../../assets/images/icon/credentials-icon.webp"
import authService from "../../services/auth.Service";

const LoginForm = () => {

    const dispatch = useDispatch();
    const [isViewed, setIsViewed] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [isDark] = useDarkmode()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        identifier: "", password: ""
    })
    const [formDataErr, setFormDataErr] = useState({
        identifier: "", password: ""
    })
    const { identifier, password } = formData


    const handleChange = (e) => {
        const { name, value } = e.target
        if (name == "identifier") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    identifier: "Email Or Phone No. Is Required",
                }));
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    identifier: "",
                }));
            }
        }
        if (name == "password") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    password: "Password Is Required",
                }));
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    password: "",
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
                identifier: "Email is Required",
            }));
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                identifier: "",
            }));
        }
        if (!password) {
            setFormDataErr((prev) => ({
                ...prev,
                password: "Password is Required",
            }));
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                password: "",
            }));
        }
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        validationFunction();
        setIsViewed(false);
        setLoading(true)
        if (!identifier || !password) {
            toast.error("Enter your Crendentials", {
                duration: 2000, // Time in milliseconds (5000ms = 5 seconds)
            })
            setLoading(false)

            return;
        }
        try {
            const data = formData
            const response = await authService.Login(data);
            console.log("response", response);

            if (response.status == 200) {
                // let email = data.email.split(".");

                // const string = email[0] + "A" + email[1];
                navigate("/signinbyotp", { state: { identifier } });
                toast.success(response.data.message, {
                    duration: 2000,
                });
                setLoading(false)

            }

            // dispatch(setUser(data));
        } catch (error) {
            toast.error(error?.response?.data?.message);
            setLoading(false)

        }
    };


    return (
        <>
            <form className="space-y-4   w-[100%]" onSubmit={onSubmit}>

                <label
                    className={`  `}
                >
                    <p className="mb-1">
                        Email or Phone No <span className="text-red-500">*</span>
                    </p>
                    <input
                        name="identifier"
                        type="text"
                        placeholder="Enter Email or Phone No"
                        value={identifier}
                        onChange={handleChange}
                        className="form-control outline-none  w-[100%] rounded-md px-4 py-2 text-black dark:placeholder-darkPlaceholder bg-lightBgSearch dark:bg-darkIconAndSearchBg dark:text-white"
                        readOnly={isViewed}
                    />
                    {
                        <p className="text-sm text-red-500">
                            {formDataErr.identifier}
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
                        <div className="relative w-[100%] ">
                            <input
                                type={isPasswordVissible ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="form-control outline-none w-[100%] rounded-md dark:placeholder-darkPlaceholder  px-4 py-2 bg-lightBgSearch  dark:bg-darkIconAndSearchBg"
                                readOnly={isViewed}
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

                <div className="flex justify-end">

                    <Link
                        to="/forgotpassword"
                        className="text-sm text-slate-800 text-[#06ADB1] dark:text-white font-bold dark:text-slate-400 leading-6"
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
                                className={`${isDark ? "bg-darkBtn hover:bg-darkBtnHover" : "bg-loginBtnBgColor hover:bg-black "}  w-96 p-1 text-white inline-flex justify-center text-center rounded-lg`}
                            >
                                {loading ? "" : "Login"}
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

            </form>
            <div className="lg:col-span-2 col-span-1 mt-5 flex justify-end items-center ">
                <div className="ltr:text-right rtl:text-left">
                    {showAddButton ? (
                        <button
                            disabled={loading}
                            onClick={()=>navigate("/staff/login")}
                            style={
                                loading
                                    ? { opacity: "0.5", cursor: "not-allowed" }
                                    : { opacity: "1" }
                            }
                            className={`${isDark ? "bg-darkBtn hover:bg-darkBtnHover" : "bg-loginBtnBgColor hover:bg-black "}  w-28 p-1 text-white inline-flex justify-center text-center rounded-lg`}
                        >
                            {"Staff Login"}
                            
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>

        </>

    );
};

export default LoginForm;
