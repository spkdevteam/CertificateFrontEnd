import React from 'react'
import logo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"

function Priscription() {
    return (
        <>
            <div className='md:container md:mx-auto px-5 md:px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='border-[1px] py-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
                    <div className="flex flex-wrap justify-between w-[100%] ">
                        <div className="px-3 md:px-0">
                            <div className="mb-10">
                                <div className="font-semibold text-gray-700 text-sm">
                                    Prescription No:{" "}
                                    <span className="text-lightBtntext text-base">PR-678E12</span>
                                </div>
                                <div className=" font-semibold text-gray-700 text-sm">
                                    Case ID: <span className="text-lightBtntext text-base">CR-12E71C</span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="font-bold text-lightBtntext text-lg ">Dr. Anil Goud</div>
                                <div className="font-semibold text-gray-700 text-sm ">
                                    MBBS, PGT (Diploma), FCPS
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="font-bold text-lightBtntext text-lg">Chief Dental Supervisor</div>
                            </div>
                        </div>

                        <div className="px-3 md:px-0">
                            <div className="mb-4 flex justify-end ">
                                <img
                                    className="h-12 lg:h-14 "
                                    alt="Logo"
                                    src={logo}
                                />
                            </div>
                            <div className="text-right flex flex-col space-y-2">
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Address:</strong> <span className='text-gray-800 text-base'> Healthcare World, Shristinagar, KSTP, Asansol-713302, W.B, India</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Contact:</strong><span className='text-gray-800 text-base'>+91-3412 556644, +91-9800 444000</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Email:</strong> <span className='text-gray-800 text-base'> healthcareworld@kosmo.com</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-sm ">Website:</strong> <span className='text-gray-800 text-base'>www.healthcareworld.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-y-2 border-dashed border-[#F6C000] py-4 justify-between items-center mt-5 w-[100%]">
                        <div className="">
                            <div className=" flex flex-row flex-wrap gap-3">
                                <div className="font-semibold text-gray-700 text-base ">
                                    Patient:{" "}
                                    <span className="text-gray-900  ">Rahul Verma</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base ">
                                    Gender:{" "}
                                    <span className="text-gray-900  ">Male</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base ">
                                    Blood Group:{" "}
                                    <span className="text-gray-900  ">AB (+ve)</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base">
                                    Age:{" "}
                                    <span className="text-gray-900  ">32 Yrs</span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className=" flex flex-row flex-wrap gap-3">
                                <div className="text-gray-700 text-base font-semibold ">
                                    Date:{" "}
                                    <span className="text-gray-800 ">07 September, 2024</span>
                                </div>
                                <div className="text-gray-700 font-semibold text-base">
                                    Time:{" "}
                                    <span className="text-gray-800 ">10:30 am</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="pt-5 xl:w-[30%] md:w-2/5 w-[100%]">
                            <div className="text-lightBtntext text-xl font-bold mb-3">Chief Complaints</div>
                            <ul className=" text-gray-700 px-5 text-base list-disc">
                                <li>
                                    <span className="font-bold">Pain in Tooth</span> in relation to{" "}
                                    <span className="font-bold">3, 2, 8</span>
                                </li>
                                <li>
                                    <span className="font-bold">Decayed Tooth</span> in relation to{" "}
                                    <span className="font-bold">3, 2, 8</span>
                                </li>
                                <li>
                                    <span className="font-bold">Bad Breathe</span> in relation to <span></span>
                                </li>
                            </ul>
                            <div className="border-b my-8"></div>

                            <div className="text-lightBtntext text-xl font-bold mb-3">On Examination</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <li>
                                    <span className="font-bold">Deep Caries</span> in relation to{" "}
                                    <span className="font-bold">3, 2</span>
                                </li>
                                <li>
                                    <span className="font-bold">Bleeding Gums</span> in relation to{" "}
                                    <span className="font-bold">3, 2, 1</span>
                                </li>
                                <li>
                                    <span className="font-bold">Cavity in Tooth</span> in relation to{" "}
                                    <span className="font-bold">3</span>
                                </li>
                            </ul>
                            <div className="border-b my-8"></div>

                            <div className="text-lightBtntext text-xl font-bold mb-3">Diagnosis</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <li>
                                    <span className="font-bold">Irreversible pulpitis</span> in relation to{" "}
                                    <span className="font-bold">3, 2</span>
                                </li>
                                <li>
                                    <span className="font-bold">Deep Caries</span>
                                </li>
                            </ul>
                            <div className="border-b my-8"></div>

                            <div className="text-lightBtntext text-xl font-bold mb-3">Proposed Treatment Plan</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <li>
                                    <span className="font-bold">Root Canal Treatment</span> with{" "}
                                    <span className="font-bold">3, 2, 1</span>
                                </li>
                                <li>
                                    <span className="font-bold">Zirconia Caps</span> with{" "}
                                    <span className="font-bold">3, 2</span>
                                </li>
                            </ul>
                            <div className="border-b my-8"></div>

                            <div className="text-lightBtntext text-xl font-bold mb-3">Investigation</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <li>
                                    <span className="font-bold">OPG</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-r mt-5 border-[#F6C000] border-dashed hidden md:block mx-9"></div>

                        <div className="pt-5 mb-13 flex-grow xl:w-3/4 md:w-3/5 w-full">
                            <div className="text-lightBtntext text-xl font-bold mb-5">Medicine (Rx)</div>
                            <div className="bg-lightBgBtn text-gray-700 text-base font-semibold px-4 py-2 mb-8 rounded">
                                Continue all home medicine as usual
                            </div>

                            <div>
                                <div className="mb-3">
                                    <div>
                                        <span className="text-gray-700 font-bold text-base">1. Paracetamol 500mg</span>
                                        <span className="text-muted mx-2">-----</span>
                                        <span className="text-gray-700 font-bold text-base">14 Tablets</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-gray-700 font-bold text-sm">1 Tablet x Twice a day</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">After Food</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">0 - 1 Tab - 1 Tab</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">07 Days</span>
                                    </div>
                                    <div className="pl-5 italic">
                                        <span className="text-gray-600 font-bold text-sm">Note:</span>
                                        <span className="text-gray-600 font-semibold text-sm mx-2">--</span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div>
                                        <span className="text-gray-700 font-bold text-base">2. Pantop DSR 450mg</span>
                                        <span className="text-muted mx-2">-----</span>
                                        <span className="text-gray-700 font-bold text-base">14 Tablets</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-gray-700 font-bold text-sm">2 Tablets x Twice a day</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">After Food</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">0 - 1 Tab - 1 Tab</span>
                                        <span className="text-muted mx-2">--------</span>
                                        <span className="text-gray-700 font-bold text-sm">07 Days</span>
                                    </div>
                                    <div className="pl-5 italic">
                                        <span className="text-gray-600 font-bold text-sm">Note:</span>
                                        <span className="text-gray-600 font-semibold text-sm mx-2">Take 30 min before food</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap mb-8 mt-10">
                                <label className="text-lightBtntext text-lg font-bold">Next Appointment:</label>
                                <span className="text-gray-700 text-base mt-1 font-semibold px-2">
                                    24-11-2024 at 12:00PM for Root Canal Treatment
                                </span>
                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </>
    )
}

export default Priscription