import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import { useDispatch, useSelector } from 'react-redux';
import calculateTimeSlot from '../../helper/CalculateTimeSlot';
import { div } from 'framer-motion/client';
import MedicineCourse from './MedicineTile';
import AddMedicineToKart from './AddMedicineToKart';
import { cyan } from '@mui/material/colors';
import { cancelEditPrescription, editMedicinePrescription, handlePrscriptionChange } from '../../store/reducer/currentPatient/currentPatient';
import useDynamicIcons from '../../Hooks/useDynamicIcons';
import savePriscription from '../../services/priscription/savePriscription';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import getBranchById from '../../services/branchService/getBranchById';
import getParticularCaseSheet from '../../services/appointment/getActiveCaseSheet';
import getPatientDetailsById from '../../services/appointment/getPatientDetailsById';
import getPrescriptionById from '../../services/appointment/getPrescriptionById';
import useDarkmode from '../../Hooks/useDarkMode';
import generatePDF from 'react-to-pdf';
import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit';
import SPKBTNPrint from '../../common/Button/SPKBTNPrint';

function Priscription() {
    const dispatch = useDispatch()
    const [activeCaseSheet, setActiveCaseSheet] = useState({})
    const getMyIcon = useDynamicIcons()
    const EditIcon = getMyIcon('edit')
    const PrintIcon = getMyIcon('print')
    const CancelIcon = getMyIcon('close')
    const [prescription, setPrescription] = useState({})
    const [patientData, setPatientData] = useState();
    const navigate = useNavigate()
    const [branch, setBranch] = useState()
    const location = useLocation();
    const { newData } = location.state || {};
    const [showCaseDetails, setShowCaseDetails] = useState(false)
    const [isDark] = useDarkmode()
    const printRef = useRef()



    const fetchBranchDetails = async (branchId) => {
        const result = await getBranchById(branchId)
        setBranch(result?.data)
    }

    const fetchCaseSheet = async (caseSheetId) => {
        const result = await getParticularCaseSheet(caseSheetId)
        setActiveCaseSheet(result?.data)
    }
    const fetchPatientById = async (patientId) => {
        const result = await getPatientDetailsById({ patientId: patientId })
        setPatientData(result?.data)
    }
    const fetchPrescriptionDetails = async (prescriptionId) => {
        const result = await getPrescriptionById({ prescriptionId: prescriptionId })
        setPrescription(result?.data)
    }
    useEffect(() => {
        fetchBranchDetails(newData?.branchId)
        fetchCaseSheet(newData?.caseSheetId)
        fetchPrescriptionDetails(newData?._id)
        fetchPatientById(newData.patientId)
    }, [newData])





    const handleCancel = () => {
        dispatch(cancelEditPrescription())
        navigate('/patientDetail/prescription')
    }
    const handleEditPrscription = () => {
        if (typeof (newData?.doctorId) == 'object') {
            console.log('yes')
            newData.doctorId = newData?.doctorId?._id
        }
        console.log(newData, typeof (newData?.doctorId), 'myNewData-----------------------')
        navigate('/patientDetail/editPriscription', { state: { newData: newData } })
    }
    const handlePrintView = () => {
        navigate('/previewPrescription', { state: { prescription, activeCaseSheet, patientData, branch } })
    }







    return (
        <>
            <div className='md:container md:mx-auto px-5 md:px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='  flex w-full justify-between  '>
                    <div className=' p-2     flex  gap-4  justify-end items-end   ' >
                        <button onClick={() => handleCancel()} className='text-xl flex justify-center items-center text-red-500 bg-red-500 bg-opacity-15 min-w-24 rounded-md   min-h-10  bottom-0 end-0 '>
                            <CancelIcon className=' ' />  <h1 className='text-sm'>Back</h1>
                        </button>
                    </div>
                    <div className='  p-2     flex  gap-4  justify-center items-center   ' >
                        <div className="flex items-center justify-center   ">
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
                                    ></div>
                                    <div
                                        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition ${showCaseDetails ? "translate-x-6" : ""
                                            }`}
                                    ></div>
                                </div>
                                <span className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Include Case Detailscccccccccccc
                                </span>
                            </label>

                        </div>
                        <SPKBTNEdit text={'Edit '} onClick={() => handleEditPrscription()} />

                        <SPKBTNPrint onClick={() => handlePrintView()} text='Print' />


                    </div>
                </div>
                <div ref={printRef} className='border-[1px] py-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
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
                                {console.log(prescription?.doctorId, 'prescription?.doctorId?.Qualification')}
                                <div className="font-bold text-lightBtntext text-lg">{prescription?.doctorId?.role?.name}</div>
                            </div>
                        </div>

                        <div className="px-3 md:px-0">
                            <div className="mb-4 flex justify-end ">

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
                    <div className="flex flex-col md:flex-row border-y-2 border-dashed border-[#F6C000] py-4 justify-between items-center mt-5 w-[100%]">
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

                        <div className="flex  ">
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
                    <div className="flex flex-col md:flex-row justify-between">

                        {
                            showCaseDetails && activeCaseSheet && Object.keys(activeCaseSheet)?.length > 0 ?
                                <>
                                    <div className="pt-5 xl:w-[30%] md:w-2/5 w-[100%]">
                                        {activeCaseSheet?.cheifComplaints?.length ? <>

                                            <div className="text-lightBtntext text-xl font-bold mb-3">Chief Complaints</div>
                                            <ul className=" text-gray-700 px-5 text-base list-disc">


                                                {
                                                    activeCaseSheet && activeCaseSheet?.cheifComplaints?.map((Complaint) => {

                                                        return <li>
                                                            <span className="font-bold">{...Complaint?.complaints?.map((item) => item?.compId.complaintName)}</span> in relation to{" "}
                                                            <span className="font-bold">{...Complaint?.tooth}</span>
                                                        </li>
                                                    })
                                                }


                                            </ul>
                                            <div className="border-b my-4"></div>
                                        </> : ''
                                        }


                                        {activeCaseSheet?.clinicalFindings?.length ? <>
                                            <div className="text-lightBtntext text-xl font-bold mb-3">On Examination</div>
                                            <ul className="px-5 text-gray-700 text-base list-disc">
                                                <span className="font-bold">
                                                    {activeCaseSheet && activeCaseSheet?.clinicalFindings?.map((finding) => {

                                                        return (
                                                            <li>

                                                                <span className="font-bold">{finding?.findings?.map((item) => { return item?.findId?.findingsName })}</span> in relation to{" "}
                                                                <span className="font-bold">{finding?.tooth?.join(',')}</span>
                                                            </li>)

                                                    })}
                                                </span>
                                            </ul>
                                            <div className="border-b my-4"></div>
                                        </> : ''
                                        }
                                        {
                                            activeCaseSheet && activeCaseSheet?.services?.length ?

                                                <><div className="text-lightBtntext text-xl font-bold mb-3">Diagnosis</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">
                                                        <span className="font-bold">
                                                            {activeCaseSheet && activeCaseSheet?.services?.map((serv) => {

                                                                return (
                                                                    <li>
                                                                        <span className="font-bold">{serv?.service.serviceName}</span> in relation to{" "}
                                                                        <span className="font-bold">{serv?.tooth?.join(',')}</span>
                                                                    </li>)

                                                            })}
                                                        </span>
                                                    </ul>
                                                    <div className="border-b my-4"></div>
                                                </>

                                                : ''}
                                        <div className="text-lightBtntext text-xl font-bold mb-3">Proposed Treatment Plan</div>
                                        <ul className="px-5 text-gray-700 text-base list-disc">
                                            <span className="font-bold">
                                                {activeCaseSheet && activeCaseSheet?.procedures?.map((proc) => {

                                                    return (
                                                        <li>
                                                            <span className="font-bold">{proc?.procedure?.map((c) => c?.procedId?.procedureName)}</span> in relation to{" "}
                                                            <span className="font-bold">{proc?.tooth?.join(',')}</span>
                                                        </li>)

                                                })}
                                            </span>
                                        </ul>

                                        <div className="border-b my-8"></div>
                                        {
                                            activeCaseSheet?.investigation?.length ?
                                                <><div className="text-lightBtntext text-xl font-bold mb-3">Investigation</div>
                                                    <ul className="px-5 text-gray-700 text-base list-disc">
                                                        {activeCaseSheet && activeCaseSheet?.investigation?.map((proc) => {

                                                            return (

                                                                <li>
                                                                    <span className="font-bold">{proc.fileType}</span>
                                                                </li>
                                                            )
                                                        })}

                                                    </ul>
                                                </> : ''

                                        }
                                    </div>
                                    <div className="border-r mt-5 border-[#F6C000] border-dashed hidden md:block mx-9"></div>
                                </> : ''
                        }


                        <div className="relative pt-5 mb-13 flex-grow  xl:w-3/4 md:w-3/5 w-full">




                            <div className='flex w-full justify-between'>
                                <div className="text-lightBtntext text-xl font-bold mb-5">Medicine (Rx)</div>



                            </div>
                            {
                                prescription?.additionalAdvice?.length ?
                                    <div className="bg-lightBgBtn bg-opacity-80 text-gray-700 text-base font-semibold px-4 py-2 mb-8 rounded">
                                        {prescription?.additionalAdvice}
                                    </div>
                                    : ''
                            }


                            {console.log(prescription?.drugArray, 'prescription?.drugArray')}
                            {
                                prescription?.drugArray?.map((item, index) => (
                                    <div className={`  mb-6`}>
                                        {console.log(item, 'my item')}
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
        </>
    )
}

export default Priscription