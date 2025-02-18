import React from 'react'
import useDarkmode from '../../Hooks/useDarkMode'
import Taggify from '../Taggify/Taggify'

function MedicalHistoryCard() {
    const [isDark] = useDarkmode()
    return (
        <>
            <div className='grid grid-cols-1'>
                <div className='md:container md:mx-auto px-8 md:px-8 pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
                    <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-3  h-64 shadow-lg'>
                        <div className='py-5 px-3'>
                            <h2 className='text-2xl font-semibold text-lightTextHeading'>Medical History </h2>
                        </div>
                        <div className="px-4 relative">
                            <label >
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Medical History
                                </p>
                            </label>
                            <div className='absolute w-full md:max-w-[97%] max-w-[92%]'>
                                <Taggify />

                            </div>
                        </div>
                        <div className="flex flex-wrap items-center  mt-7 py-3 px-5 pb-4">
                            <div className="w-full flex justify-end items-center mt-7">
                                <button
                                    className=" bg-lightBgBtn   hover:bg-lightHoverBgBtn mt-1 md:mt-2 px-4 py-2 rounded text-lightBtntext hover:text-white"

                                >
                                    Submit & Add More
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default MedicalHistoryCard