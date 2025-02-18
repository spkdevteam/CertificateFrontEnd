import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa"; 

// Child components
// import Button from '../Components/Button';
import SPKInputText from "../../common/Input/SPKInputText";
import SPKInputEmail from './../../common/Input/SPKInputEmail';
import SPKInputPassword from './../../common/Input/SPKInputPassword';
import SPKBTNInsert from "../../common/Button/SPKBTNInsert";
import { Link } from "react-router-dom";

const StaffLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});
    // const [formSubmitted, setFormSubmitted] = useState(false); // Track submission status

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    

    

    const handleChange = (setter, field) => (e) => {
        const value = e.target.value;
        setter(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: value.trim() === '' ? `${field} cannot be empty` : '',
        }));

        if (field === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: value.trim() === ''
                    ? "Email cannot be empty"
                    : !validateEmail(value)
                        ? "Invalid email format"
                        : "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!username.trim()) newErrors.username = "Username cannot be empty";
        if (!email.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password.trim()) newErrors.password = "Password cannot be empty";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully!");
            setFormSubmitted(true); // Set success state
            setEmail("");
            setPassword("");
            setUsername("");
            setErrors({}); // Clear errors
        }


    };

    return (
        // <div className="overflow-hidden bg-white sm:py-0">
        //     <div className="mx-auto max-w-full px-0 lg:px-0">
        //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        //             <div className="h-full bg-white">
        //                 <div className="h-full">
        //                     <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        //                         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //                             <h2 className="mt-10 text-start text-2xl font-bold text-gray-900">Welcome back</h2>
        //                             <p className="mt-1 text-start text-sm text-gray-500">Enter your credentials to access your account</p>
        //                         </div>

        //                         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        //                             {/* {formSubmitted && (
        //                                 <div className="mb-4 p-2 text-green-700 bg-green-100 border border-green-400 rounded-md text-center">
        //                                     ✅ Form submitted successfully!
        //                                 </div>
        //                             )} */}


        //                             <div className="space-y-4">
        //                                 <div>
        //                                     <h1>Username</h1>
        //                                     <SPKInputText
        //                                         value={username}
        //                                         className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
        //                                         onChange={handleChange(setUsername, "username")}
        //                                     />
        //                                     {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        //                                 </div>

        //                                 <div>
        //                                     <h1>Email</h1>
        //                                     <SPKInputEmail
        //                                         value={email}
        //                                         className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
        //                                         onChange={handleChange(setEmail, "email")}
        //                                     />
        //                                     {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        //                                 </div>

        //                                 <div>
        //                                     <h1>Password</h1>
        //                                     <SPKInputPassword
        //                                         value={password}
        //                                         className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
        //                                         onChange={handleChange(setPassword, "password")}
        //                                     />
        //                                     {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        //                                 </div>

        //                                 <div>
        //                                 <SPKBTNInsert
        //                                         onClick={handleSubmit}
        //                                         type="submit"
        //                                         className="text-sm text-right flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500"
        //                                     />
        //                                 </div>

        //                                 <div>
        //                                     <SPKInputText className="font-semibold text-blue-600 hover:text-blue-500" />
        //                                 </div>

        //                                 <div className="relative flex items-center justify-center text-gray-500">
        //                                     <span className="px-4 text-sm font-medium">Or</span>
        //                                     <div className="absolute w-full border-t border-gray-300"></div>
        //                                 </div>

                                       

        //                                 <p className="mt-3 text-center text-sm text-gray-500">
        //                                     Don't have an account? <a href="#" className="font-semibold text-blue-600 hover:text-blue-500"> Sign up</a>
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <img
        //                 src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
        //                 alt="Product screenshot"
        //                 className="hidden lg:block h-screen w-full object-cover rounded-tl-[35px] rounded-bl-[35px] ring-1 shadow-xl ring-gray-400/10"
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Form Section */}
                <div className="h-full bg-white flex flex-col justify-center px-6 py-6">
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
                                value={username}
                                onChange={handleChange(setUsername, "username")}
                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <h1>Email</h1>
                            <SPKInputEmail
                                value={email}
                                onChange={handleChange(setEmail, "email")}
                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <h1>Password</h1>
                            <SPKInputPassword
                                value={password}
                                onChange={handleChange(setPassword, "password")}
                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
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

                        {/* <p className="text-center text-sm text-gray-500">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="font-semibold text-blue-600 hover:text-blue-500"
                            >
                                Sign up
                            </a>
                        </p>
                        <Link to="/forgotpassword"> 
                          <p className="font-semibold text-blue-600 hover:text-blue-500 " >Forget Password</p>
                          </Link> */}

<div className="flex justify-between text-sm text-gray-500">
    <p>
        Don't have an account?{" "}
        <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign up
        </a>
    </p>
    <Link to="/forgotpassword">
        <p className="font-semibold text-blue-600 hover:text-blue-500">
            Forget Password
        </p>
    </Link>
</div>

                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:block">
                    <img
                        src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="h-screen w-full object-cover rounded-tl-[35px] rounded-bl-[35px] ring-1 shadow-xl ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    </div>





    );
};

export default StaffLoginForm;
 
