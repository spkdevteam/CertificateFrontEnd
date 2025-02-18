import React, { useEffect, useState } from 'react'
import useDarkmode from '../../Hooks/useDarkMode'
import ToothTaggify from '../Taggify/ToothTaggify';
import Button from '../ui/Button';
import { useLocation } from "react-router-dom";
import generateCaseSummary from '../../services/priscription/createCaseSummary';

function EditPriscription() {
    const [showCaseDetails, setShowCaseDetails] = useState(false)
    const [isDark] = useDarkmode()
    const location = useLocation();
    const { patientDetail, cases, newData } = location.state || {};
    useEffect(() => {
        console.log(patientDetail, cases, newData, 'myData')
    }, [location])

    console.log("showCaseDetails", showCaseDetails);

    const departments = [
        { value: "endodontics", label: "Endodontics" },
        { value: "testDepartment", label: "Test Department" },
        { value: "testDepartment1", label: "Test Department 1" },
        { value: "testDepartment2", label: "Test Department 2" },
        { value: "testDepartment3", label: "Test Department 3" },
    ];

    const Service = [
        { value: "rootCanalTreatment", label: "Root Canal Treatment" },
        { value: "toothAlingment", label: "Tooth Alingment" },
        { value: "cavityFillup", label: "Cavity Fillup" },
        { value: "teethCleaning", label: "Teeth Cleaning" },
        { value: "toothWhitening", label: "Tooth Whitening" },
    ];

    return (
        <>
            <div className='md:container md:mx-auto px-5 md:px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='border-[1px] py-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
                    <h2 className="capitalize leading-6 tracking-wider mt-8  text-xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Case Details</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden py-5">

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Branch  <span className="text-red-500">*</span>
                                </p>
                                <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option>--Select Branch--</option>
                                    <option value="sreeDentalHospital"> Sree Dental Hospital</option>
                                    <option value="asianDentalClinic">Asian Dental Clinic</option>
                                    <option value="kosmoDentalClinic"> Kosmo Dental Clinic</option>
                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.branchId}</p>} */}
                            </label>
                        </div>

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Case Id  <span className="text-red-500">*</span>
                                </p>
                                <select name="caseId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option>--Select Case--</option>
                                    {cases?.map((item) => {
                                        const caseSummary = generateCaseSummary(item)
                                        const summary = Object.keys(caseSummary)?.map((cas, cum) => cas + ':' + caseSummary[cas]?.join(' '))?.join(' ')
                                        return <option onClick={() => { setCaseId(item?._id); setFocus(false); setPatientcase(item) }} className="w-full p-2 border  rounded-md text-sm  dark:text-white  text-cyan-800 border-b  flex justify-center items-center cursor-pointer rounded-b  ">
                                            <div className="flex w-[40%] text-small  ">
                                                Case-Id: <br /> {item?.displayId.split('-').slice(3).join('-')}
                                            </div>
                                            <div className="flex   text-sm  ">
                                                {summary?.charAt(0)?.toUpperCase() + summary?.slice(1, 100)?.toLowerCase()}{summary?.length > 100 ? '...' : ''}
                                            </div>
                                            <div className="flex   text-sm  ">
                                                {item?.isActive ? <></> : <></>}
                                            </div>


                                        </option>
                                    })}
                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.caseId}</p>} */}
                            </label>
                        </div>

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Duty Doctor  <span className="text-red-500">*</span>
                                </p>
                                <select name="caseId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option>--Select Doctor--</option>
                                    <option>CR-E21FC4</option>
                                    <option>CR-A1G245</option>
                                    <option>CR-2G13H1</option>
                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.branchId}</p>} */}
                            </label>
                        </div>

                        <div className=" ">
                            <label className=" mt-9 mx-5 flex gap-3 cursor-pointer">
                                <div className='relative '>
                                    <input
                                        className=" sr-only "
                                        name="upperPosterior"
                                        type="checkbox"
                                        checked={showCaseDetails}
                                        onChange={() => setShowCaseDetails(!showCaseDetails)}
                                    />
                                    <div
                                        className={` w-12 h-6 rounded-full ${showCaseDetails ? "bg-lightBtntext" : "bg-gray-300"
                                            }`}
                                    ></div>
                                    <div
                                        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition ${showCaseDetails ? "translate-x-6" : ""
                                            }`}
                                    ></div>
                                </div>
                                <span className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Include Case Details
                                </span>
                            </label>

                        </div>

                    </div>
                    <div className=" border-y-2 border-dashed border-[#F6C000] py-4 justify-between items-center mt-5 w-[100%]">
                        <h2 className="capitalize leading-6 tracking-wider   text-xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Medication Details</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        {
                            showCaseDetails ?
                                <>
                                    <div className="pt-5 xl:w-[31%] md:w-2/5 w-[100%]">
                                        <div className="text-lightBtntext text-xl font-bold mb-3">Chief Complaints</div>
                                        <ul className=" text-gray-700 px-4 text-base list-disc">

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
                                        <ul className="px-4 text-gray-700 text-base list-disc">
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
                                        <ul className="px-4 text-gray-700 text-base list-disc">
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
                                        <ul className="px-4 text-gray-700 text-base list-disc">
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
                                        <ul className="px-4 text-gray-700 text-base list-disc">
                                            <li>
                                                <span className="font-bold">OPG</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="border-r mt-5 border-[#F6C000] border-dashed hidden md:block mx-9"></div>
                                </>
                                : ""
                        }

                        <div className="relative pt-5 mb-13 flex-grow  xl:w-[69%] md:w-3/5 w-full">
                            <div className='py-2 '>
                                <h2 className='text-2xl font-semibold text-lightTextHeading'>Medicine (Rx)</h2>
                            </div>
                            <div className='overflow-x-auto overflow-y-hidden'>
                                <table className='min-w-full table-auto'>
                                    <thead>
                                        <tr>
                                            <th className=' px-2  w-1/6 h-16 font-medium text-start'>Drug Name <span className="text-red-500">*</span></th>
                                            <th className=' px-2  w-1/6 h-16 font-medium text-start'>Dosage <span className="text-red-500">*</span></th>
                                            <th className=' px-2  w-1/6 h-16 font-medium text-start'>Frequency <span className="text-red-500">*</span></th>
                                            <th className=' px-2  w-1/6 h-16 font-medium text-start'>Instruction <span className="text-red-500">*</span> </th>
                                            <th className=' px-2  w-1/6 h-16 font-medium text-start'>Timing <span className="text-red-500">*</span></th>
                                            <th className=' px-2 w-1/6 h-16 font-medium text-start'>Duration <span className="text-red-500">*</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className='h-auto'>
                                        {/* -----To vertically align the content of a cell in a table-- tbody me heght dene se row center me hu jaata ha isilye align top use keye h */}
                                        <tr className='align-top'>
                                            <td className='px-2 w-1/6 h-16 text-center relative'>
                                                <div className='w-44 '>
                                                    <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                                        <option ></option>
                                                        {
                                                            departments && departments.length > 0 && departments.map((item, ind) => {
                                                                return (
                                                                    <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>

                                                </div>
                                            </td>
                                            <td className=' px-2 w-1/6 h-16 text-start'>
                                                <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                                    <option ></option>
                                                    {
                                                        departments && departments.length > 0 && departments.map((item, ind) => {
                                                            return (
                                                                <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td className='px-2 w-1/6 h-16 text-center'>
                                                <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                                    <option ></option>
                                                    {
                                                        Service && Service.length > 0 && Service.map((item, ind) => {
                                                            return (
                                                                <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td className='px-2 w-1/6 h-16 text-start'>
                                                <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                                    <option ></option>
                                                    {
                                                        Service && Service.length > 0 && Service.map((item, ind) => {
                                                            return (
                                                                <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td className='px-2 w-1/6 h-16 text-start'>
                                                <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                                    <option ></option>
                                                    {
                                                        Service && Service.length > 0 && Service.map((item, ind) => {
                                                            return (
                                                                <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td className='px-2 w-1/6 h-16 text-start'>
                                                <input
                                                    name="age"
                                                    type="text"
                                                    placeholder="Ex-10days"
                                                    className="form-control outline-none w-44  rounded-md px-4 py-2 text-start border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                                />
                                            </td>
                                        </tr>

                                    </tbody>
                                    <tfoot>
                                        <tr className='align-top'>
                                            <td colSpan="4" className="pr-4 py-2 w-1/6 h-16 text-end ">
                                                Medication Note:
                                            </td>
                                            <td colSpan="2" className="px-6 w-1/6 h-16 text-end ">
                                                <input
                                                    name="age"
                                                    type="text"
                                                    placeholder=""
                                                    className="form-control outline-none w-96  rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                                />
                                            </td>
                                        </tr>


                                    </tfoot>
                                </table>
                            </div>
                            <div className="flex flex-wrap items-center px-4 pb-4">
                                <div className="w-full text-right">
                                    <Button
                                        text="Submit & Add More"
                                        // onClick={handleSubmitService}
                                        className="btn btn-sm dark:bg-darkBtn dark:text-white dark:hover:bg-darkBtnHover bg-lightBgBtn   hover:bg-lightHoverBgBtn mt-1 md:mt-2 px-4 py-2 rounded text-lightBtntext hover:text-white"
                                    // isLoading={loading.servicesLoading}
                                    />
                                </div>
                            </div>

                            {/* for table */}
                            <div className='overflow-x-auto'>
                                <table className="min-w-full mt-2">
                                    <thead className="bg-[#C9FEFF] dark:bg-darkBtn dark:text-white">
                                        <tr className='border-b border-dashed border-lighttableBorderColor'>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Drug Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Dosage
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Frequency
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Instruction
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Timing
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Duration
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium  tracking-wider">
                                                Notes
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-darkAccent">
                                        {/** Example rows */}
                                        <tr className="border-b border-dashed border-lighttableBorderColor">

                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">Paracetamol 500mg	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">	1 Tablet</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">Twice a day	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">After Food	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">0 - 1 Tab - 1 Tab	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">7 Days</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">--</td>
                                        </tr>
                                        <tr className="border-b border-dashed border-lighttableBorderColor">

                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">Paracetamol 500mg	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">	1 Tablet</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">Twice a day	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">After Food	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">0 - 1 Tab - 1 Tab	</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">7 Days</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-start text-sm text-tableTextColor">Take 30 min before food</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <h2 className="capitalize leading-6 tracking-wider mt-8  text-xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Other Details</h2>

                            <div className="grid grid-cols- lg:grid-cols-3 gap-5 overflow-hidden py-5">

                                <div className=" md:col-span-3">
                                    <label >
                                        <p className={`mb-1 py-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Additional Advices
                                            {/* <span className="text-red-500">*</span> */}
                                        </p>
                                    </label>
                                    <textarea
                                        className={` form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary  bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                                        placeholder=""
                                        name='address'
                                        // value={address}
                                        rows={1}
                                    // onChange={handleChange}
                                    // readOnly={isViewed}
                                    ></textarea>
                                    {/* {<p className="text-red-600  text-xs"> {formDataErr.address}</p>} */}
                                </div>

                                <div className=" ">
                                    <label>
                                        <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Appointment Date<span className="text-red-500">*</span>
                                        </p>
                                        <input
                                            name="appointmentDate"
                                            type="date"
                                            className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </label>
                                </div>

                                <div className=" ">
                                    <label>
                                        <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Appointment  Time<span className="text-red-500">*</span>
                                        </p>
                                        <input
                                            name="startTime"
                                            type="time"
                                            placeholder=''
                                            className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </label>
                                </div>

                                <div className="">
                                    <label >
                                        <p className={`mb-1  ${isDark ? "text-white" : "text-black"}`}>
                                            Purpose of Appointment
                                            {/* <span className="text-red-500">*</span> */}
                                        </p>
                                    </label>
                                    <textarea
                                        className={` form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary  bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                                        placeholder=""
                                        name='address'
                                        // value={address}
                                        rows={1}
                                    // onChange={handleChange}
                                    // readOnly={isViewed}
                                    ></textarea>
                                    {/* {<p className="text-red-600  text-xs"> {formDataErr.address}</p>} */}
                                </div>

                            </div>


                        </div>


                    </div>
                    <div className="border-b my-8"></div>
                    <div className="flex justify-end gap-2 mt-10">
                        <Button
                            text="Cancel"
                            className="bg-lightmodalBgBtn text-lightmodalbtnText hover:bg-lightmodalBgBtnHover hover:text-white  px-4 py-2 rounded"
                        // onClick={() => closeModal()}
                        />
                        <Button
                            text="Save"
                            className={` ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                            onClick={() => closeModal()}
                        />
                    </div>
                </div>




            </div>

        </>
    )
}

export default EditPriscription