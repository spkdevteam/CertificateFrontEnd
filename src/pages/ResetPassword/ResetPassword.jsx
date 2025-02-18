import React, { memo, useState } from 'react';
import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import ResetPasswordForm from './ResetPasswordForm';



const ResetPassword = () => {

    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formDataError, setFormDataError] = useState({});





    return (
        <div className=' min-h-screen w-full flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {/* image div */}
                <div className=' flex items-center justify-center bg-[#1c212e] '>
                    <div className='mx-5'>
                        <img
                            src={img}
                            alt="loginImg2"
                            className='z-10 w-[80%]  sm:w-[60%] md:w-[80%] lg:w-[80%]'
                        />
                    </div>
                </div>

                {/* form div */}
                
                <div className='flex flex-col justify-center items-center '>
                    <h3 className='text-3xl font-bold mb-5'>Reset Your Passward</h3>
                    <div className='mt-5'>
                    <ResetPasswordForm />
                    </div>
                    <div className="text-xs mt-20 font-normal  text-gray-500 dark:text-slate-400 z-[999] pb-10 text-center flex">
                        Powered By
                        <a href="https://spktechnosoft.in" target="_blank">
                            <span className="text-blue-500 ml-1"> SPK Technosoft &reg;</span>{" "}
                        </a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ResetPassword;
