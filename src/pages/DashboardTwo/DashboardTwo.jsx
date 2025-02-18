import React from 'react'

function DashboardTwo() {
    return (
        <>
            <div className='md:container md:mx-auto px-8 py-2   dark:bg-darkAccent bg-contentBg h-auto'>

                <div>
                    <h1 className='text-xl'>Dashboard</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden p-4">

                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md rounded-lg py-8 px-0 md:px-7 h-auto'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Branch</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>1.2K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Employee</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>1.6K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Chair</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>1.8K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Department</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>2.1K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Services</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>2.5K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Procedure</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>2.8K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Patients</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>3.5K</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] dark:border-darkSecondary border-lightBorderColor shadow-md  rounded-lg py-8 px-0 md:px-8 h-auto'>
                         <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <h1 className='text-2xl dark:text-white text-[#99A1B7]'>Total Cases</h1>
                            </div>
                            <div>
                                <h1 className='text-5xl dark:text-white text-lightBtntext'>3.2K</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default DashboardTwo