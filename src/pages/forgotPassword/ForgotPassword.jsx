import React, { memo, useEffect, useState } from 'react';
// import img from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import img from "../../assets/images/icon/image-office.jpg"

import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import ForgotPasswordForm from './ForgotPasswordForm';



const ForgotPassword = () => {
    const [passwordUpdateStages, setPasswordUpdateStages] = useState(1)
    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp:'',
        password:'',
        _id:''
    });

    const [formDataError, setFormDataError] = useState({});
useEffect(()=>{

    console.log(formData,'-ppppppppppppppppp')
},[formData])
    






    return (
        // <div className=' min-h-screen w-full flex justify-center '>

        //     {
        //         passwordUpdateStages == 1 ?
        //             <div onClick={() => {setPasswordUpdateStages(2) ; setFormData(prev=>({...prev,email:'sandeep'}))}} className='h-10 bg-green-300 '>
        //                 Email submission
        //             </div>
        //             : passwordUpdateStages == 2 ?
        //                 <div onClick={() => {setPasswordUpdateStages(3); setFormData(prev=>({...prev,otp:'1245'}))}} className='h-10 bg-pink-300 '>
        //                     OtpSubMission
        //                 </div>
        //                 : <div onClick={() => {setPasswordUpdateStages(1); setFormData(prev=>({...prev,password:'password'}))}} className='h-10 bg-gray-300 '>
        //                     New PassWord Submission
        //                 </div>

        //     }



        // </div>

             <div className=' min-h-screen w-full flex justify-center '>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {/* image div */}
                <div className=' flex items-center justify-center '>
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
                    <h1 className='text-3xl font-bold mb-5'>Forgot Your Password</h1>
                    <div className='mt-5'>
                        <ForgotPasswordForm />
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

export default ForgotPassword;
