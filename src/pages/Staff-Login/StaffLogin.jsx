import React, { memo, useState } from 'react';
// import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import StaffLoginForm from './StaffLoginForm';



const StaffLogin = () => {

    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formDataError, setFormDataError] = useState({});





    return (


        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-5">Staff Sign In</h1>
            <div className="w-full">
                <StaffLoginForm />
            </div>
        </div>
    </div>

    );
};

export default StaffLogin;
