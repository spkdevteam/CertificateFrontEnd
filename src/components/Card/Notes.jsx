import React from 'react'
import useDarkmode from '../../Hooks/useDarkMode'

function Notes() {
    const [isDark] = useDarkmode()
    return (
        <>
            <div className='grid grid-cols-1'>
                <div className='md:container md:mx-auto px-0 pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
                    <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-3 h-64 shadow-lg'>
                        <div className='py-5 px-3'>
                            <h2 className='text-2xl font-semibold text-lightTextHeading'>Notes</h2>
                        </div>
                        <div className="px-4">
                            <label >
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Remarks

                                </p>
                            </label>
                            <textarea
                                className={` form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                                placeholder=""
                                // value={note}
                                rows={2}

                            // onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-wrap items-center py-3 px-4 pb-4">
                        <div className="w-full text-right">
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

export default Notes