import React, { memo, useState } from 'react';
// import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import StaffLoginForm from './StaffLoginForm';
import useHandleUserHook from '../../Hooks/userHook';
import LoginPage from '../../components/Imported/LoginPage';




const StaffLogin = () => {
     

    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formDataError, setFormDataError] = useState({});





    return (
        <div className='border min-h-screen m-auto items-center w-full flex justify-center '>
                <LoginPage />

            </div>


);
};

export default StaffLogin;
