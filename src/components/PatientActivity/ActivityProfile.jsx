import React from 'react'
import useDarkmode from '../../Hooks/useDarkMode'
import { FaRegCircle } from "react-icons/fa";


function ActivityProfile() {

    const [isDark] = useDarkmode()
    return (
        <>
            <div className={`md:container md:mx-auto py-8 w-auto bg h-full flex items-center rounded-lg border-[1px]  border-lightBorderColor dark:border-darkSecondary ${isDark ? "bg-darkAccent" : "bg-green-400"}`}>
                {/* <div className="col-span-12 lg:col-span-6 xl:col-span-4 "> */}
                {/* List Widget */}
                <div className="bg-white border-[1px] h-[100%] mx-4 shadow-lg rounded-lg overflow-hidden mb-4">
                    {/* Header */}
                    <div className="px-8 flex items-center border-0 mt-8">
                        <h3>
                            <span className="font-bold mb-2 text-gray-900">Activities</span>
                        </h3>
                    </div>
                    {/* end::Header */}

                    {/* begin::Header */}
                    <div className="px-8 flex items-center border-0 mt-5 mb-0">
                        <p>
                            <span className="text-primary font-bold text-3xl">Jul, 22 2024</span>
                        </p>
                    </div>


                    {/* Body */}
                    <div className="px-4 py-4 w-96 h-[100%] overflow-y-auto">
                        {/* Timeline */}
                        <div className=" space-x-4 space-y-4">
                            {/* Item */}
                            <div className="flex  items-start">
                                <div className=" text-gray-600 font-bold text-sm ml-4 w-[2.5rem]">08:42</div>
                                <div className="text-yellow-500 ml-1 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Created an Appointment with Dr. Anil Goud</div>
                            </div>
                            {/* Item */}
                            <div className="flex  items-start">
                                <div className=" text-gray-600 font-bold text-sm w-[2.5rem]">08:42</div>
                                <div className="text-yellow-500 ml-1 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Appointment Started </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className=" text-gray-600 font-bold text-sm w-[2.5rem]">08:42</div>
                                <div className="text-yellow-500 ml-1 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Created an Appointment with Dr. Anil Goud</div>
                            </div>
                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">10:00</div>
                                <div className="text-green-50z-20 0 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-800 font-semibold">                                   </div>
                            </div>
                            {/* Item */}
                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">14:37</div>
                                <div className="text-red-500 z-20 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-800">
                                    Case ID: CR-7038 Created by Dr. Anil Goud.
                                </div>
                            </div>
                            {/* Item */}
                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">16:50</div>
                                <div className="text-blue-500z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">
                                    Indulging in poorly driving and keep structure keep great.</div>
                            </div>
                            {/* Item */}
                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">21:03</div>
                                <div className="text-red-500 z-20 flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-800">
                                    New order placed <a href="#" className="text-blue-600">#XF-2356</a>.
                                </div>
                            </div>
                            {/* Item */}
                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">10:30</div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Indulging in poorly driving and keep structure keep great.</div>
                            </div>

                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">16:50 </div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">New order placed <a href="#" className="text-blue-600">#XF-2356</a>.</div>
                            </div>

                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">23:07</div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Finance KPI Mobile app launch preparion meeting.</div>
                            </div>

                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">23:07</div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Indulging in poorly driving and keep structure keep great
                                    .</div>
                            </div>

                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">23:07</div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">
                                    New order placed <a href="#" className="text-blue-600">#XF-2356</a>.

                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className=" z-10 text-gray-600 font-bold text-sm w-[2.5rem]">23:07</div>
                                <div className="text-blue-400z-20  flex-shrink-0">
                                    <FaRegCircle className='text-xl' />
                                </div>
                                <div className="ml-3 text-gray-600">Finance KPI Mobile app launch preparion meeting
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ActivityProfile
