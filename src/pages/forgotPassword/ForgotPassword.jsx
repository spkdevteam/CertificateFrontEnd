import React, { memo, useEffect, useState } from 'react';
// import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import img from "../../assets/images/icon/image-office.jpg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import ForgotPasswordForm from './ForgotPasswordForm';
import useHandleUserHook from '../../Hooks/userHook';
import toast from 'react-hot-toast';
import Otp from '../Otp/Otp';
import ResetPassword from './../ResetPassword/ResetPassword';

const ForgotPassword = () => {
    const [passwordUpdateStages, setPasswordUpdateStages] = useState(1)
    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();
    const { forgotUser, otpUser } = useHandleUserHook()
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp: '',
        _id: '',
    });

    const [formDataError, setFormDataError] = useState({});
    useEffect(() => {

        console.log(formData, '-ppppppppppppppppp')
    }, [formData])


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
        if (!formData?.otp) {
            toast.error("otp is required")
        }
        setLoading(true)

        try {
            const result = await otpUser({ id: formData?._id, otp: formData?.otp })
            console.log(result, "World")
            if (result?.data?.status) {
                toast.success(result?.data?.message)

                setPasswordUpdateStages(3)
            }
            else {
                toast.error("Otp field is empty")
            }
        } catch (error) {
            console.log(error)

        }
    }

 return (
        <div className=' min-h-screen w-full flex justify-center '>
            {
                passwordUpdateStages === 1 && (
                    <ForgotPasswordForm
                        formData={formData}
                        setFormData={setFormData}
                        sendOtp={sendOtp}
                        loading={loading}

                    />
                )
            }
            {
                passwordUpdateStages === 2 && (
                    <Otp
                        formData={formData}
                        setFormData={setFormData}
                        verifyOtp={verifyOtp}

                    />
                )
            }
            {
                passwordUpdateStages === 3 && (
                    <ResetPassword
                        formData={formData}
                        setFormData={setFormData}
                    />
                )
            }

 </div>

    );
};

export default ForgotPassword;
