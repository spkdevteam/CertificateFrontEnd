

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import generatePDF from 'react-to-pdf';
import useDynamicIcons from "../../Hooks/useDynamicIcons";

import useDarkmode from "../../Hooks/useDarkMode";
import { setCaseSheetData } from "../../store/reducer/caseSheet/caseSheet";
import calculateTimeSlot from "../../helper/CalculateTimeSlot";
import MedicineCourse from "./MedicineTile";
import medicineFrequencies from "../../constant/constant";


function printPriscription() {
    const [isDark] = useDarkmode()
    const navigate = useNavigate()
    const location = useLocation();
    const showMedicalHistory = location.state.showMedicalHistory;
    const incominData = location.state;
    const [showCaseDetails, setShowCaseDetails] = useState(false)
    const activePatient = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    const [activeCaseSheet, setActiveCaseSheet] = useState({})
    const getMyIcon = useDynamicIcons()
    const EditIcon = getMyIcon('edit')
    const PrintIcon = getMyIcon('print')
    const CancelIcon = getMyIcon('close')
    const [prescription, setPrescription] = useState({})
    const [patientData, setPatientData] = useState();
    const [branch, setBranch] = useState()
    const printRef = useRef();
    useEffect(() => {
        console.log(incominData, 'incominDataincominDataincominDataincominDataincominData')

        setBranch(incominData?.branch)
        setPatientData(incominData?.patientData)
        setActiveCaseSheet(incominData?.activeCaseSheet)
        setPrescription(incominData?.prescription)
    }, [incominData])
    
    
    
    
    useEffect(()=>{
        console.log({inputObject:{
            patientData,
            prescription,
            branch,
            activeCaseSheet
        }},'input object--------------')

    },[patientData,
        prescription,
        branch,
        activeCaseSheet])




    const handleCancel = () => {

        if (Object.keys(activePatient).length) navigate('/patientDetail/prescription')
        else navigate('/prescription')
        //navigate('/patientPrescription', { state: { newData: incominData?.prescription } })
    }

    const handlePrintView = () => {

        generatePDF(printRef, {
            filename: 'case_detail.pdf',
            pageSize: 'A4',
            margin: { top: 20, bottom: 40, left: 20, right: 20 } // Set margins
        });
    }

    return (
        <>

            <div className=' md:container md:mx-auto px-5 md:px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='  flex w-full justify-between  '>
                    <div className=' p-2     flex  gap-4  justify-end items-end   ' >
                        <button onClick={() => handleCancel()} className='  text-xl flex justify-center items-center text-red-500 bg-red-500 bg-opacity-15 min-w-24 rounded-md   min-h-10  bottom-0 end-0 '>
                            <CancelIcon className=' ' />  <h1 className='text-sm'>Back</h1>
                        </button>
                    </div>
                    <div className='  p-2     flex  gap-4  justify-center items-center   ' >
                        <div className="flex items-center justify-center    ">
                            <label className=" h-full  mx-5 flex gap-3 cursor-pointer">
                                <div className='relative  '>
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
                                    >  </div>
                                    <div
                                        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition ${showCaseDetails ? "translate-x-6" : ""
                                            }`}
                                    ></div>
                                </div>
                                <span className={`mb-1   ${isDark ? "text-white" : "text-black"} `}>
                                    Include Case Details
                                </span>
                            </label>

                        </div>


                        <button onClick={() => handlePrintView()} className='text-xl flex gap-4  justify-center items-center gap-53  min-w-24 rounded-md border-gray-500 border-opacity-55 min-h-10  bottom-0 end-0 text-gray-500 bg-gray-500 bg-opacity-20 '>
                            <PrintIcon className='w-5 h-5 ' /> <h1 className='text-sm'>Print  </h1>
                        </button>

                    </div>
                </div>
                <div ref={printRef} className="w-full h-full p-5">
                    <div className='  m-5 p-5 dark:border-darkSecondary   rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
                        <div className="flex flex-wrap justify-between w-[100%] ">
                            <div className="px-3 md:px-0">
                                <div className="mb-10">
                                    <div className="font-semibold text-gray-700 text-sm">
                                        Prescription No:{" "}
                                        <span className="text-lightBtntext text-base">{prescription?.displayId?.split('-')?.slice(2).join('-') || ''}</span>
                                    </div>
                                    {
                                        activeCaseSheet?._id ?
                                            <div className="  font-semibold text-gray-700 text-sm">
                                                Case ID: <span className="text-lightBtntext text-base">{activeCaseSheet?.displayId?.split('-')?.slice(2).join('-') || ''}</span>
                                            </div> : ""
                                    }
                                </div>
                                <div className="mb-2">
                                    <div className="font-bold text-lightBtntext text-lg ">{prescription?.doctorId?.firstName || '' + ' ' + prescription?.doctorId?.lastName || ''}</div>
                                    <div className="font-semibold text-gray-700 text-sm ">
                                        {prescription?.doctorId?.Qualification}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="font-bold text-lightBtntext ">{prescription?.doctorId?.role?.name}</div>
                                </div>
                            </div>

                            <div className="px-3 md:px-0">
                                <div className="mb-4 flex justify-end ">
                                    {console.log(branch, 'branch?.branchLogo branch?.branchLogo ')}
                                    <img
                                        className="h-12 lg:h-14 "
                                        alt="Logo"
                                        src={`${import.meta.env.VITE_BASE_URL}/branch/${branch?.branchLogo}` || logo}
                                    />
                                </div>
                                <div className="text-right flex flex-col space-y-2">
                                    <div >
                                        <strong className="font-semibold text-gray-700 text-base ">Address:</strong> <span className='text-gray-800 text-base'> {branch?.address?.length ? branch?.address + ',' : ''}{branch?.city?.length ? branch?.city + ',' : ''},{branch?.state ? branch?.state + ',' : ''},{branch?.ZipCode || ''}</span>
                                    </div>
                                    <div >
                                        <strong className="font-semibold text-gray-700 text-base ">Contact:</strong><span className='text-gray-800 text-base'>{branch?.contactNumber}</span>
                                    </div>
                                    <div >
                                        <strong className="font-semibold text-gray-700 text-base ">Email:</strong> <span className='text-gray-800 text-base'> {branch?.emailContact}</span>
                                    </div>
                                    <div >
                                        {/* <strong className="font-semibold text-gray-700 text-sm ">Website:</strong> <span className='text-gray-800 text-base'>www.healthcareworld.com</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex   md:flex-row border-y-2 border-dashed border-[#F6C000] py-4 justify-between items-center mt-5 w-[100%]">
                            <div className=" flex w-9/12">
                                <div className=" flex flex-row flex-wrap gap-3 w-full ">
                                    <div className="font-semibold text-gray-700 text-base ">
                                        Patient:{" "}
                                        <span className="text-gray-900  ">{patientData?.firstName?.charAt(0).toUpperCase() + patientData?.firstName?.slice(1) + ' ' + patientData?.lastName?.charAt(0).toUpperCase() || '' + patientData?.lastName?.slice(1) || ''}</span>
                                    </div>
                                    <div className="font-semibold text-gray-700 text-base ">
                                        Gender:{" "}
                                        <span className="text-gray-900  ">{patientData?.gender}</span>
                                    </div>
                                    <div className="font-semibold text-gray-700 text-base ">
                                        Blood Group:{" "}
                                        <span className="text-gray-900  ">{patientData?.bloodGroup}</span>
                                    </div>
                                    <div className="font-semibold text-gray-700 text-base">
                                        Age:{" "}
                                        <span className="text-gray-900  ">{patientData?.age} Yrs</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-3/12">
                                <div className=" flex flex-row flex-wrap gap-3">
                                    <div className="text-gray-700 text-base font-semibold ">
                                        Date:{" "}
                                        <span className="text-gray-800 ">{prescription?.createdAt?.split('T')[0]}</span>
                                    </div>
                                    <div className="text-gray-700 font-semibold text-base">
                                        Time:
                                        <span className="text-gray-800 ">{prescription?.createdAt ? calculateTimeSlot(prescription?.createdAt) : ''}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex   md:flex-row justify-between">

                            {
                                showCaseDetails && activeCaseSheet && Object.keys(activeCaseSheet)?.length > 0 ?
                                    <div className="flex flex-col border-r mt-5  md:block mx-9  border-[#F6C000] border-dashed  ">
                                        {

                                            activeCaseSheet?.cheifComplaints?.length ?
                                                <>
                                                    <div className="text-lightBtntext text-xl font-bold mb-3">Chief Complaints</div>
                                                    <ul className=" text-gray-700 px-5 text-base list-disc">


                                                        {
                                                            Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.cheifComplaints?.map((Complaint, index) => {

                                                                return <li key={index} >
                                                                    <span className="font-bold">{...Complaint?.complaints?.map((item) => item?.compId.complaintName)}</span> in relation to{" "}
                                                                    <span className="font-bold">{...Complaint?.tooth?.join(',')}</span>
                                                                </li>
                                                            })
                                                        }


                                                    </ul>
                                                    <div className="border-b my-8"></div>
                                                </>
                                                : ''
                                        }



                                        {
                                            activeCaseSheet?.clinicalFindings?.length ?
                                                <>
                                                    <div className="text-lightBtntext text-xl font-bold mb-3">On Examination</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">





                                                        <span className="font-bold">
                                                            {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.clinicalFindings?.map((finding) => {

                                                                return (
                                                                    <li>

                                                                        <span className="font-bold">{finding?.findings?.map((item) => { return item?.findId?.findingsName })}</span> in relation to{" "}
                                                                        <span className="font-bold">{finding?.tooth?.join(',')}</span>
                                                                    </li>)

                                                            })}
                                                        </span>
                                                    </ul>
                                                    <div className="border-b my-8"></div>
                                                </> : ''
                                        }

                                        {
                                            activeCaseSheet?.services?.length ?
                                                <>
                                                    <div className="text-lightBtntext text-xl font-bold mb-3">Diagnosis</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">
                                                        <span className="font-bold">
                                                            {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.services?.map((serv) => {

                                                                return (
                                                                    <li>
                                                                        <span className="font-bold">{serv?.service.serviceName}</span> in relation to{" "}
                                                                        <span className="font-bold">{serv?.tooth?.join(',')}</span>
                                                                    </li>)

                                                            })}
                                                        </span>
                                                    </ul>
                                                    <div className="border-b my-8"></div>
                                                </>
                                                : ''
                                        }

                                        {
                                            activeCaseSheet?.procedures?.length ?
                                                <>
                                                    <div className="text-lightBtntext text-xl font-bold mb-3">Proposed Treatment Plan</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">
                                                        <span className="font-bold">
                                                            {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.procedures?.map((proc) => {

                                                                return (
                                                                    <li>
                                                                        <span className="font-bold">{proc?.procedure?.map((c) => c?.procedId?.procedureName)}</span> in relation to{" "}
                                                                        <span className="font-bold">{proc?.tooth?.join(',')}</span>
                                                                    </li>)

                                                            })}
                                                        </span>
                                                    </ul>
                                                    <div className="border-b my-8"></div>
                                                </>
                                                : ''
                                        }

                                        {
                                            activeCaseSheet?.investigation?.length ?
                                                <>
                                                    <div className="text-lightBtntext text-xl font-bold mb-3">Investigation</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">
                                                        {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.investigation?.map((proc) => {

                                                            return (

                                                                <li>
                                                                    <span className="font-bold">{proc.fileType}</span>
                                                                </li>
                                                            )
                                                        })}

                                                    </ul>
                                                </>
                                                : ''
                                        }
{/* <div className=""></div> */}
                                        
                                    </div>
                                    : ""
                            }


                            <div className="relative pt-5 mb-13 flex-grow  xl:w-3/4 md:w-3/5 w-full">




                                <div className='flex w-full justify-between'>
                                    <div className="text-lightBtntext text-xl font-bold mb-5">Medicine (Rx)</div>



                                </div>
                                {
                                    prescription?.additionalAdvice?.length ?
                                        <div className="bg-lightBgBtn bg-opacity-80 text-gray-700 text-base font-semibold px-4 py-2 mb-8 rounded">
                                            {prescription?.additionalAdvice}
                                        </div> : ''

                                }



                                {
                                    prescription?.drugArray?.map((item, index) => (
                                        <div className={`  mb-6`}>

                                            <MedicineCourse medicine={item} position={index} />
                                        </div>
                                    ))
                                }
                                <div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default printPriscription;


