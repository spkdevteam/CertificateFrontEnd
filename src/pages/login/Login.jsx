import React, { memo, useState } from 'react';
import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import LoginForm from './LoginForm';



const Login = () => {

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
                <div className=' flex items-center justify-center mr-0 md:mr-6 bg-[#1c212e] '>
                    <div className='mx-5'>
                        <img
                            src={img}
                            alt="loginImg2"
                            className='z-10 w-[80%]  sm:w-[60%] md:w-[80%] lg:w-[80%]'
                        />
                    </div>
                </div>

                {/* form div */}
                
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold mb-5'>Admin Sign In</h1>
                    <div className='mt-5'>
                    <LoginForm />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
