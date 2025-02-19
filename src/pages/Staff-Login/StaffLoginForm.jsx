import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SPKInputText from "../../common/Input/SPKInputText";
import SPKInputEmail from "../../common/Input/SPKINputEmail";
import SPKInputPassword from "../../common/Input/SPKInputPassword";
import SPKBTNInsert from "../../common/Button/SPKBTNInsert";
import { useNavigate } from "react-router-dom";
import useHandleUserHook from "../../Hooks/userHook";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const StaffLoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userName: ''
    })
    const { loginUser } = useHandleUserHook()

    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const mandatory = ['email', 'password']

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value, 'name,value')
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }






    const handleSubmit = (e) => {

        e.preventDefault();
        try {
            const validationArray = mandatory?.filter((field) => !formData[field]?.length)
            if (validationArray?.length) {
                toast.error('requiered fields are empty ')


            }
            else {

                const result = loginUser({ email: formData.email, password: formData.password, userName: formData.userName })
                if (result.status) {
                    toast.success(result.message)
                    navigate('/dashboard')
                }
            }
        } catch (error) {

        }

    };

    const navigateTOForgotPassword = () => {

        try {
            navigate('/forgotpassword')

        } catch (error) {

        }

    }

    return (

        <div className="w-full bg-white border     ">
            <ToastContainer />

            <div className="w-full  ">
                <div className="flex w-full">
                    {/* Form Section */}
                    <div className=" w-1/2 ">
                        <img
                            src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg"
                            alt="Product screenshot"
                            className="h-screen w-full object-cover    ring-1 shadow-xl ring-gray-400/10"
                        />
                    </div>
                    <div className="h-full w-1/2 bg-white flex flex-col justify-center m-auto">
                        <div className="h-full w-1/2 border   rounded-lg p-4 bg-white flex flex-col justify-center m-auto">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Welcome back
                            </h2>
                            <p className="text-sm text-gray-500">
                                Enter your credentials to access your account
                            </p>

                            <div className="mt-8 space-y-4">
                                <div>
                                    <h1>Username</h1>
                                    <SPKInputText
                                        name='userName'
                                        value={formData.userName}
                                        onChange={handleChange}
                                        className="border outline-none border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-sm">{errors.username}</p>
                                    )}
                                </div>

                                <div>
                                    <h1>Email</h1>
                                    <SPKInputEmail
                                        value={formData.email}
                                        name={'email'}
                                        onChange={handleChange}
                                        className="border outline-none  border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <h1>Password</h1>
                                    <SPKInputPassword
                                        value={formData.password}
                                        name='password'
                                        onChange={handleChange}
                                        className="border outline-none border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm">{errors.password}</p>
                                    )}
                                </div>

                                <SPKBTNInsert
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500"
                                />

                                <div className="relative flex items-center justify-center text-gray-500">
                                    <span className="px-4 text-sm font-medium">Or</span>
                                    <div className="absolute w-full border-t border-gray-300"></div>
                                </div>


                                <div className="flex justify-between text-sm text-gray-500">
                                    <p>
                                        Don't have an account?{" "}
                                        <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                            Sign up
                                        </a>
                                    </p>


                                    <p onClick={() => navigateTOForgotPassword()} className="font-semibold text-blue-600 hover:text-blue-500">
                                        Forget Password
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>





    );
};

export default StaffLoginForm;

