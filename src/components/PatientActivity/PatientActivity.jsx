import React, { useEffect, useRef, useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import useDarkmode from '../../Hooks/useDarkMode';
// import "./PatientActivity.css"
import { FaSearch } from "react-icons/fa";
import { FiFilter } from 'react-icons/fi';
import { PiExportBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

import profile from "../../assets/images/avatar/profile.jpg"
import { useNavigate } from 'react-router-dom';



function PatientActivity() {

    const [showStart, setShowStart] = useState(false);
    const divRef = useRef(null);
    const navigate = useNavigate()


    const [stepNumber, setStepNumber] = useState(0);

    const [activeStep, setActiveStep] = useState(0);
    const [openRow, setOpenRow] = useState(null);

    const [isDark, setDarkMode] = useDarkmode();
    const [toggleFilter, setToggleFilter] = useState(false)

    const filtermenuRef = useRef(null);
    const filterButtonRef = useRef(null);


    const handleClickOutside = (event) => {
        // Check if the click is outside the modal and not on the filter button
        if (
            filtermenuRef.current &&
            !filtermenuRef.current.contains(event.target) &&
            filterButtonRef.current &&
            !filterButtonRef.current.contains(event.target)
        ) {
            setToggleFilter(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // Data for the parent table
    const parentData = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        col1: `Row ${index + 1} Col 1`,
        col2: `Row ${index + 1} Col 2`,
        col3: `Row ${index + 1} Col 3`,
        col4: `Row ${index + 1} Col 4`,
        col5: `Row ${index + 1} Col 5`,
    }));

    // Sample data for the child table
    const childData = [
        { subId: 1, subCol1: 'Child Col 1', subCol2: 'Child Col 2', subCol3: 'Child Col 3' },
        { subId: 2, subCol1: 'Child Col 1', subCol2: 'Child Col 2', subCol3: 'Child Col 3' },
    ];

    // Function to toggle the display of the child table
    const handleToggle = (rowId) => {
        setOpenRow(openRow === rowId ? null : rowId);
    };


    // const handleStepClick = (index) => {
    //     setActiveStep(index);
    // };

    // const steps = [
    //     {
    //         id: 1,
    //         title: "Account Details",
    //     },
    //     {
    //         id: 2,
    //         title: "Personal info-500",
    //     },
    //     {
    //         id: 3,
    //         title: "Address",
    //     },
    //     {
    //         id: 4,
    //         title: "Social Links",
    //     },
    // ];

    // chat gtp
    const steps = [
        { title: 'Step 1', content: 'This is the content for step 1.' },
        { title: 'Step 2', content: 'This is the content for step 2.' },
        { title: 'Step 3', content: 'This is the content for step 3.' },
        { title: 'Step 4', content: 'This is the content for step 4.' },
    ];


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setShowStart(false); // Hide the div
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={`md:container md:mx-auto px-4 py-2 w-full lg:h-screen h-auto flex flex-col lg:flex-row items-center rounded-lg border-[1px]  border-lightBorderColor dark:border-darkSecondary ${isDark ? "bg-darkAccent" : "bg-white"}`}>
                {/* <div className="col-span-12 lg:col-span-6 xl:col-span-4 "> */}
                {/* List Widget */}
                <div className=" w-[100%] lg:w-[50%] border-[1px] border-lightBorderColor  h-[27rem] lg:h-[100%]  lg:mr-4 shadow-lg rounded-lg overflow-hidden lg:mt-4 mb-4">
                    {/* Header */}
                    <div className="px-7 flex items-center border-0 pt-8">
                        <h3>
                            <span className="font-bold text-xl mb-2 text-gray-900">Activities</span>
                        </h3>
                    </div>
                    {/* end::Header */}

                    {/* begin::Header */}
                    <div className="px-7 flex items-center border-0 mt-5 mb-0">
                        <p>
                            <span className="text-info font-bold text-2xl">Jul, 22 2024</span>
                        </p>
                    </div>


                    {/* Body */}
                    <div className="px-8 py-4 w-[100%] lg:w-96 h-full overflow-y-auto">

                        <div className="flex flex-col space-y-5">
                            {steps.map((step, index) => (
                                <>

                                    <div key={index} className="flex  gap-2  items-center relative">
                                        <div className="font-semibold text-gray-600">{step.title}</div>

                                        {/* Line between circles */}
                                        {index !== steps.length - 1 && (
                                            <div className="absolute left-[4.5rem] top-8 w-px h-full bg-gray-300"></div>
                                        )}

                                        {/* Step indicator */}
                                        <div
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${index === 0 ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 bg-white text-gray-600'
                                                }`}
                                        >
                                            {/* {index + 1} */}
                                        </div>

                                        {/* Step content */}
                                        <div className="">
                                            <div className=" text-gray-500">{step.content}</div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className='flex flex-col  mx-auto border-[1px] dark:border-darkSecondary border-lightBorderColor  rounded-lg px-8 w-[100%] lg:w-[60%] xl:w-[68%] lg:h-[100%] h-[27rem] '>
                    <div className=' relative flex flex-row flex-wrap w-auto justify-between items-center py-7  h-auto'>
                        <h1 className='font-semibold text-xl'>Overview</h1>

                        <div className=' flex gap-2'>
                            <span className='relative'>
                                <button
                                    ref={filterButtonRef}
                                    onClick={() => setToggleFilter(!toggleFilter)}
                                    type="button"
                                    className="btn btn-sm flex items-center px-4 py-2 bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white rounded-md"
                                >
                                    <FaRegCalendarAlt className="text-lg mr-1" />
                                    Shedule
                                </button>
                            </span>
                            <span>
                                <button onClick={() => setShowStart(!showStart)} className=' btn btn-sm flex items-center px-4 py-2 rounded-md bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white '>
                                    <FaRegFilePdf className="text-lg mr-1" />

                                    Start
                                </button>
                            </span>
                            <span className={`relative  z-10  `}>
                                <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                                    <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"}`} style={{ color: "#80808f" }} />
                                </span>
                                <input
                                    type="text"
                                    className={`pl-9 py-2 w-[9.4rem] dark:bg-darkIconAndSearchBg bg-light rounded-md`}
                                    placeholder='Search ...'
                                />
                            </span>
                        </div>
                        {
                            showStart ?
                                <div ref={divRef} className='absolute z-50  top-[-4.6rem] right-[-2rem]'>
                                    <div className=''>
                                        <div className=" w-[17.2rem] h-[100%] shadow-lg border border-lightborderInputColor dark:border-darkSecondary rounded-lg bg-white dark:bg-darkAccent">
                                            < div className='grid grid-cols-1'>
                                                <div className="border-t border-lightborderInputColor dark:border-darkSecondary">
                                                    <button onClick={() => navigate("/patientDetail/createCaseSheet") } className="px-10 py-2 cursor-pointer">
                                                        <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                                            New Case Sheet
                                                        </p>
                                                    </button>
                                                    <button className="px-10 py-2 cursor-pointer">
                                                        <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                                            Resume Lasr Case Sheet
                                                        </p>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>
                    <div className='overflow-x-auto'>
                        <table className="min-w-[100%] mt-2 px-8 ">
                            <thead className="bg-[#C9FEFF] dark:bg-darkBtn dark:text-white " >
                                <tr className="border-b border-dashed border-lighttableBorderColor">
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Column 1</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Column 2</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Column 3</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Column 4</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Column 5</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-darkAccent">
                                {parentData.map((row) => (
                                    <React.Fragment key={row.id}>
                                        <tr className="border-b border-dashed border-lighttableBorderColor">
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{row.col1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{row.col2}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{row.col3}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{row.col4}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{row.col5}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">
                                                <button
                                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                                    onClick={() => handleToggle(row.id)}
                                                >
                                                    Toggle Child Table
                                                </button>
                                            </td>
                                        </tr>
                                        {openRow === row.id && (
                                            <tr>
                                                <td colSpan="6" className="px-4 dark:bg-darkAccent bg-contentBg">
                                                    <table className="min-w-full  ">
                                                        <thead className='bg-lightChlidTheadclr dark:bg-darkBtn dark:text-white'>
                                                            <tr className=' '>
                                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Sub Column 1</th>
                                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Sub Column 2</th>
                                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Sub Column 3</th>
                                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Sub Column 4</th>
                                                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">Sub Column 5</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-lightChildBgClr dark:bg-darkAccent">
                                                            {childData.map((child) => (
                                                                <tr key={child.subId} className='border-b border-dashed border-lighttableBorderColor '>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{child.subCol1}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{child.subCol2}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{child.subCol3}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{child.subCol3}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">{child.subCol3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>













            {/* </div> */}




        </>
    )
}

export default PatientActivity