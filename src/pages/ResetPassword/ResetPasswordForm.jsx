import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useDarkmode from "../../Hooks/useDarkMode";
import toast from "react-hot-toast";
import useHandleUserHook from "../../Hooks/userHook";

const ResetPasswordForm = ({ formData, setFormData }) => {
    console.log(formData)

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isDark] = useDarkmode()
    const { resetUser } = useHandleUserHook()

    const [isPasswordVissible, setIsPasswordVissile] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const resetPassword = async (e) => {
        e.preventDefault()
        if (!formData?.password) {
            toast.error("Password is required")
            return
        }
        setLoading(true)

        try {
            const result = await resetUser({
                id: formData?.id,
                password: formData?.password,
                otp: formData?.otp,

            });
            if (result?.status) {
                toast.success(result?.message)
                navigate("/staff/login")
            }
            else {
                toast.error(response?.data?.message || "Something went wrong");
            }
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <form className="space-y-4 w-96  " onSubmit={resetPassword}>

            <label
                className=""
            >
                <p className="mb-1 mt-2">
                    OTP <span className="text-red-500">*</span>
                </p>
                <input
                    name="otp"
                    type="text"
                    value={formData.otp || ""}
                    readOnly
                    className="form-control outline-none w-96 rounded-md px-4 py-2 bg-gray-200 text-gray-700"
                />


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
                            value={formData?.password}
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

                </label>
            </div>
            <button type="submit" disabled={loading} className="w-96 p-2 mt-2 bg-blue-500 text-white rounded-lg">
                {loading ? "reseting password..." : "reset password"}

            </button>
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


            </div>
        </form>
    );
};

export default ResetPasswordForm;
