import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, OAuthProvider } from "firebase/auth";

// Child components
import PasswordInputBox from '../Components/PasswordInputBox';
import EmailInputBox from '../Components/EmailInputBox';
import UsernameInputBox from '../Components/UsernameInputBox';
import Button from '../Components/Button';
import ForgotPassword from '../Components/ForgotPassword';

const StaffLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});
    // const [formSubmitted, setFormSubmitted] = useState(false); // Track submission status

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert(`Welcome ${result.user.displayName}`);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    const handleAppleSignIn = async () => {
        try {
            const appleProvider = new OAuthProvider("apple.com");
            const result = await signInWithPopup(auth, appleProvider);
            alert(`Welcome ${result.user.displayName || "User"}`);
        } catch (error) {
            console.error("Apple Sign-In Error:", error.message);
        }
    };

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
        <div className="overflow-hidden bg-white sm:py-0">
            <div className="mx-auto max-w-full px-0 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="h-full bg-white">
                        <div className="h-full">
                            <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 className="mt-10 text-start text-2xl font-bold text-gray-900">Welcome back</h2>
                                    <p className="mt-1 text-start text-sm text-gray-500">Enter your credentials to access your account</p>
                                </div>

                                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                                    {/* {formSubmitted && (
                                        <div className="mb-4 p-2 text-green-700 bg-green-100 border border-green-400 rounded-md text-center">
                                            ✅ Form submitted successfully!
                                        </div>
                                    )} */}


                                    <div className="space-y-4">
                                        <div>
                                            <h1>Username</h1>
                                            <UsernameInputBox
                                                value={username}
                                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                                onChange={handleChange(setUsername, "username")}
                                            />
                                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                                        </div>

                                        <div>
                                            <h1>Email</h1>
                                            <EmailInputBox
                                                value={email}
                                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                                onChange={handleChange(setEmail, "email")}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <h1>Password</h1>
                                            <PasswordInputBox
                                                value={password}
                                                className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                                onChange={handleChange(setPassword, "password")}
                                            />
                                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                        </div>

                                        <div>
                                            <Button
                                                onClick={handleSubmit}
                                                type="submit"
                                                className="text-sm text-right flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500"
                                            />
                                        </div>

                                        <div>
                                            <ForgotPassword className="font-semibold text-blue-600 hover:text-blue-500" />
                                        </div>

                                        <div className="relative flex items-center justify-center text-gray-500">
                                            <span className="px-4 text-sm font-medium">Or</span>
                                            <div className="absolute w-full border-t border-gray-300"></div>
                                        </div>

                                        <div className="flex mt-8 justify-center">
                                            <button type="button" onClick={handleGoogleSignIn} className="border border-gray-300 flex w-50 justify-center rounded-md px-4 py-1.5 text-sm font-semibold text-black shadow-xs hover:bg-green-500 hover:text-white mr-2">
                                                <span className="text-lg mt-1 mr-1"><FcGoogle /></span>Sign in with Google
                                            </button>
                                            <button type="button" onClick={handleAppleSignIn} className="border border-gray-300 flex w-50 justify-center rounded-md px-4 py-1.5 text-sm font-semibold text-black shadow-xs hover:bg-green-500 hover:text-white">
                                                <span className="text-xl mr-1"><FaApple /></span>Sign in with Apple
                                            </button>
                                        </div>

                                        <p className="mt-3 text-center text-sm text-gray-500">
                                            Don't have an account? <a href="#" className="font-semibold text-blue-600 hover:text-blue-500"> Sign up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="hidden lg:block h-screen w-full object-cover rounded-tl-[35px] rounded-bl-[35px] ring-1 shadow-xl ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default StaffLoginForm;
 
