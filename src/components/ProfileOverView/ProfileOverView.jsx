import React from 'react'
import { FaEdit } from "react-icons/fa";
import profile from "../../assets/images/avatar/profile.jpg"
import { PiDropLight } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";







function ProfileOverView() {
    return (
        <>
            <div className=' grid grid-cols-1 md:container md:mx-auto px-8 py-5 pb-5 dark:bg-darkAccent rounded-b-3xl bg-white'>
                <div>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-lg  rounded-lg md:mx-auto px-8 py-6 h-auto' >
                        <div className='flex flex-col lg:flex-row    '>
                            {/* // yaha pe jitna mt h usko hatana h */}
                            <img src={profile} className='w-24 h-24 rounded-lg' alt="" />

                            <div className='flex flex-col  '>
                                <div className='px-1 lg:px-5 mt-5 flex flex-row  items-start'> 
                                    {/* //mt-5 hatanaa h  */}
                                    <span className='text-xl font-bold'>
                                        <p>Rahul Sharma</p>
                                    </span>
                                    <span>
                                        <FaEdit className='text-xl ms-3 text-[#7239EA] mt-1' />
                                    </span>
                                    <span className='text-sm ms-1 text-[#7239EA] mt-2 '>Edit</span>
                                </div>

                                <div className='px-0 lg:px-3 flex flex-row flex-wrap items-start gap-3'>
                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <PiDropLight className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium  text-[#071437] mt-1 '> P-A67B7</span>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <PiDropLight className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium  text-[#071437] mt-1 '>SDH HYD</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <PiDropLight className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium  text-[#071437] mt-1 '>O (+ve)</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <PiDropLight className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium text-[#071437] mt-1 '>Male</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <PiDropLight className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium  text-[#071437] mt-1 '>37 yrs</span>
                                    </div>


                                </div>
                                <div className='px-0 lg:px-3 py-3 flex flex-row flex-wrap items-start gap-3'>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <FaMobileAlt className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium text-[#071437] mt-1 '>9933886655</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <MdOutlineMail className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium text-[#071437] mt-1 '>rahul@kosmo.com</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <FaMapLocationDot className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium text-[#071437] mt-1 '>Nijampeth Road, Near KFC, Hyderabad</span>
                                    </div>

                                    <div className='flex flex-row gap-1'>
                                        <span>
                                            <ImLocation2 className='text-xl  text-[#99A1B7] mt-1' />
                                        </span>
                                        <span className='text-base font-medium text-[#071437] mt-1 '>India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex w-[100%] lg:w-60 justify-center items-center bg-lighttokenBgClr dark:bg-darkAccent py-2 px-2 border-dashed border-[3px] rounded border-lighttokenBorderClr">
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-center font-bold mb-3">
                                    <a className="text-2xl text-lighttokenTileClr dark:text-white font-bold mb-3">Token Number</a>
                                </div>
                                <div className="flex  justify-center">
                                    <div className="border border-lighttokenInnerBorderClr bg-lighttokenInnerBorderBgClr  dark:bg-darkSecondary  border-dashed rounded py-5 px-8 mb-3">
                                        <div className="text-4xl font-bold text-lighttokenSubTitleClr dark:text-white">
                                            <span className=" w-20">001</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>




        </>
    )
}

export default ProfileOverView