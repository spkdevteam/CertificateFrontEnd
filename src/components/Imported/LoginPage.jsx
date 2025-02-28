import React, { useState } from "react";
import "./LoginPage.css"
import bgImg from "../../assets/images/all-img/bgImg.png";
import logo from "../../assets/images/logo/Logo.png";
import wavingHand from "../../assets/images/logo/waving-hand.png";
import { IoPerson } from "react-icons/io5";
import { Profile, Key, EyeSlash, Eye } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import logoIcon from "../../assets/images/icon/credentials-icon.webp"
import authService from "../../services/auth.Service";
import overlay from "../../assets/images/all-img/overlay.png"



const LoginPage = () => {
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
                navigate("/signinbyotpPage", { state: { identifier } });
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
        <div className="loginbgImage relative  w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-center items-center  group  w-[55%] h-[100%] bg-gradient-to-br">

                {/* <div
                    class="circle absolute  h-[157vh] w-[105vw] lg:w-[115vw]  lg:h-[140vh] lg:top-[-27.5em] lg:right-[-48.5em] top-[-12.5em] right-[-42.5em]  bg-[#4CB8C4]/50  duration-500 z-[99] op"
                ></div> */}
                <div className="absolute">
                    <img src={overlay} alt="" className="w-[120vw] h-[130vh]" />
                </div>

                {/* Glassy Card */}
                <div className="bg-white/20 ml-11 z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8 max-w-lg h-auto">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <img src={logo} alt="Company Logo" className="" />
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-start mt-4">Welcome To Kosmo! <span className="w-6 h-6 ml-2"><img src={wavingHand} alt="" /></span></h2>
                        <p className=" text-sm text-start">Please sign-in to your account and get started</p>
                    </div>


                    <form onSubmit={onSubmit} >
                        {/* Input Fields */}
                        <div className="mt-6 relative ">
                            <input
                                name="identifier"
                                type="email"
                                value={identifier}
                                onChange={handleChange}
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-[white]/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Email or phone"
                                readOnly={isViewed}
                            />
                            <div className="absolute top-4 px-2">
                                <Profile color="#697689" className="text-lg" />
                            </div>
                            {
                                <p className="text-sm mt-1 text-red-500">
                                    {formDataErr.identifier}
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
                                placeholder="Password"
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
                                <p className="text-sm mt-1 text-red-500">{formDataErr.password}</p>
                            }
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-end mt-4  text-base">
                            {/* <label className="flex items-center ">
                                <input type="radio" className="mr-1 w-5 h-5 cursor-pointer" />
                                Remember me
                            </label> */}
                            <Link
                                to="/forgotpasswordPage"
                                className="hover:underline">Forgot password?</Link>
                        </div>

                        {/* Sign In Button */}
                        <div className="flex py-5 justify-center mb-5">
                            {/* <button 
                            className="w-52 mt-6 shadow-xl bg-white  py-2 rounded-full font-semibold  transition">
                                Sign In
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
                                    {loading ? "" : "Sign In"}
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
                        <div className="flex justify-end mb-6">
                            {showAddButton ? (
                                <button
                                    disabled={loading}
                                    onClick={() => navigate("/staff/loginPage")}
                                    style={
                                        loading
                                            ? { opacity: "0.5", cursor: "not-allowed" }
                                            : { opacity: "1" }
                                    }
                                    className={` shadow-xl bg-white  py-2 rounded-full font-semibold  transition  w-32 inline-flex justify-center text-center`}
                                >
                                    {"Staff Login"}

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

export default LoginPage;
