import React, { memo, useEffect, useState, useRef } from 'react';
import img from "../../assets/images/icon/image-office.jpg"
import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import ForgotPasswordForm from './ForgotPasswordForm';
import useHandleUserHook from '../../Hooks/userHook';
import toast from 'react-hot-toast';
import Otp from '../Otp/Otp';
import ResetPassword from './../ResetPassword/ResetPassword';
import ForgotPasswordPage from '../../components/Imported/ForgotPasswordPage';
import OtpVerifyPage from '../../components/Imported/OtpVerifyPage';
import ResetPasswordPage from '../../components/Imported/ResetPasswordPage';

const ForgotPassword = () => {
    const [passwordUpdateStages, setPasswordUpdateStages] = useState(1)
    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();
    const { forgotUser, otpUser } = useHandleUserHook()
    const [loading, setLoading] = useState(false)
    const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]) // OTP array
    const otpInputs = Array(6).fill(0).map(() => useRef(null)) //Refs for otp input

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp: '',
        _id: '',
        confirmPassword: ""
    });

    const [formDataError, setFormDataError] = useState({});
    useEffect(() => {

        console.log(formData.otp, '-ppppppppppppppppp')
    }, [formData.otp])

    const handleOtpChange = (e, index) => {
        let value = e.target.value;
        if (isNaN(value) || value.length > 1) return;

        const newOtpArray = [...otpArray];
        newOtpArray[index] = value;
        setOtpArray(newOtpArray);
        setFormData((prev) => ({ ...prev, otp: newOtpArray.join("") + "" }));
        // console.log(formData)
        console.log("OTP updated:", newOtpArray.join("")); // Debugging line




        if (value && index < 5) {
            otpInputs[index + 1].current.focus();
        }
    };

    // Handle Backspace Navigation in OTP Fields
    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otpArray[index] && index > 0) {
            otpInputs[index - 1].current.focus();
        }
    };


    const sendOtp = async () => {
        if (!formData?.email) {
            toast.error("Email is required")
            return;
        }
        setLoading(true)

        try {
            const result = await forgotUser({ email: formData?.email })
            console.log(result, "Hello")
            if (result?.data?.status) {
                toast.success(result?.data?.message)
                console.log(result?.data?._id)
                setFormData((prev) => ({ ...prev, _id: result?.data?._id }))
                setPasswordUpdateStages(2)
            }
            else {
                toast.error("Required fields are empty")
            }

        } catch (error) {
            console.log(error)

        }


    }

    const verifyOtp = async () => {
        console.log("verifiying otp", formData?.otp)
        if (!formData?.otp.trim() || formData?.otp.length !== 6) {
            toast.error("Enter a valid 6-digit OTP");
            return;
        }
        setLoading(true)



        try {
            const result = await otpUser({ id: formData?._id, otp: formData?.otp.trim() })
            console.log(result, "World")
            if (result?.data?.status) {
                toast.success(result?.data?.message)
                setTimeout(() => {
                    setPasswordUpdateStages(3)


                }, 1000);
            }
            else {
                toast.error("Otp field is empty")
            }
        } catch (error) {
            console.log(error)

        }
        setLoading(false)
    }

    return (
        <div className='border min-h-screen m-auto items-center w-full flex justify-center '>
            {
                passwordUpdateStages === 1 && (

                    <ForgotPasswordPage
                        formdata={formData}
                        setFormData={setFormData}
                        sendOtp={sendOtp}
                        loading={loading}

                    />
                )
            }
            {
                passwordUpdateStages === 2 && (
                    <OtpVerifyPage
                        formData={formData}
                        setFormData={setFormData}
                        verifyOtp={verifyOtp}
                        loading={loading}
                        otpArray={otpArray}
                        otpInputs={otpInputs}
                        handleOtpChange={handleOtpChange}
                        handleOtpKeyDown={handleOtpKeyDown}


                    />
                )
            }
            {
                passwordUpdateStages === 3 && (

                    <ResetPasswordPage
                        formData={formData}
                        setFormData={setFormData}
                    />
                )
            }

        </div>

    );
};

export default ForgotPassword;
