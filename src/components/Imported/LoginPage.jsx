import React, { useState } from "react";
import "./LoginPage.css"

import { IoPerson } from "react-icons/io5";
import { Profile, Key, EyeSlash, Eye } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import logoIcon from "../../assets/images/icon/credentials-icon.webp"
import authService from "../../services/auth.Service";
import useHandleUserHook from "../../Hooks/userHook";
import { setClientUser } from "../../store/reducer/authLogin/authSlice";
import { image1, loginPageImage } from "../../constant/images";



const LoginPage = () => {
    const dispatch = useDispatch();
    const [isViewed, setIsViewed] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isPasswordVissible, setIsPasswordVissile] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [isDark] = useDarkmode()
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userName: ''
    })
    const { loginUser } = useHandleUserHook()

    const [errors, setErrors] = useState({});
    const mandatory = ['email', 'password']

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value, 'name,value')
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }






    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)
        try {
            const validationArray = mandatory?.filter((field) => !formData[field]?.length)
            if (validationArray?.length) {
                toast.error('requiered fields are empty ')
                setLoading(false)
                return


            }
            else {

                const result = await loginUser({ email: formData.email, password: formData.password })

                if (result?.status === true) {
                    const userName = result?.data?.userName?.userId
                    const userId = result?.data?._id
                    dispatch(setClientUser({ userName, userId }))
                    toast.success(result?.message)
                    navigate('/dashboard')
                }
                else {
                    toast.error(result?.message)
                }
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");


        }finally{
            setLoading(false)
        }

    };

    const navigateTOForgotPassword = () => {

        try {
            navigate('/forgotpassword')

        } catch (error) {

        }

    }



    return (
        <div className="loginbgImage relative  w-[100%] h-[100vh] flex  items-center justify-center lg:justify-end">

            <div className="flex justify-end   items-center  group  w-full h-[100%] bg-gradient-to-br">

                <div className="absolute">
                    <img src={`${loginPageImage}`} alt="" className="w-[110vw] h-[130vh]" />
                </div>

                {/* Glassy Card */}


                <div className="bg-white/20 ml-11 me-10  w-full lg:w-3/12 md:w-6/12   z-[999999] backdrop-blur-lg shadow-lg border border-[#FFFFFF]/70 rounded-3xl p-8   h-auto">

                    <img src={image1} alt="" className="w-6/12   p-2   " />

                    <form onSubmit={handleSubmit} >
                        {/* Input Fields */}
                        <div className="mt-6 relative ">
                            <input
                                name="email"
                                type="text"
                                value={formData?.email}
                                onChange={handleChange}
                                className="w-full mt-1 px-10 py-2 placeholder-black/50 bg-[white]/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-black"
                                placeholder="Email or phone"
                                readOnly={isViewed}
                            />
                            <div className="absolute top-4 px-2">
                                <Profile color="#697689" className="text-lg" />
                            </div>
                            {/* {
          
        } */}
                        </div>


                        <div className="mt-4 relative">
                            <input
                                type={isPasswordVissible ? "text" : "password"}
                                name="password"
                                value={formData?.password}
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
                            {/* {
            <p className="text-sm mt-1 text-red-500">{formDataErr.password}</p>
        } */}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-end mt-4  text-base">
                            {/* <label className="flex items-center ">
            <input type="radio" className="mr-1 w-5 h-5 cursor-pointer" />
            Remember me
        </label> */}
                            <Link
                                to="/forgotpassword"
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

                    </form>



                </div>



            </div>
        </div>
    );
};

export default LoginPage;
