import React, { memo, useState } from 'react';
import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import { useLocation } from 'react-router-dom';
import StaffOtpVerifyForm from './StaffOtpVerifyForm';



const StaffOtpVerify = () => {

    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();

    const location = useLocation();
  // ----taking email from login form
  const identifier = location?.state?.identifier;



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
                    <h1 className='text-3xl font-bold mb-5'>Verify OTP</h1>
                    <div class="font-normal w-96 bg-light  dark:bg-darkIconAndSearchBg text-base text-slate-500 dark:text-slate-400 text-center px-2  dark:bg-slate-600 rounded py-3 mb-4 mt-4">
                        {identifier}
                    </div>

                    <div className='mt-5'>
                        <StaffOtpVerifyForm />
                    </div>

                    {/* <div className="text-xs font-normal  text-gray-500 dark:text-slate-400 z-[999] pb-10 text-center flex">
                        Powered By
                        <a href="https://spktechnosoft.in" target="_blank">
                            <span className="text-blue-500 ml-1"> SPK Technosoft &reg;</span>{" "}
                        </a>
                    </div> */}

                </div>

            </div>
        </div>
    );
};

export default StaffOtpVerify;
