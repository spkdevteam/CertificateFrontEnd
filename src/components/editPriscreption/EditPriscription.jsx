import React, { useEffect, useState } from 'react'
import useDarkmode from '../../Hooks/useDarkMode'
import ToothTaggify from '../Taggify/ToothTaggify';
import Button from '../ui/Button';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import generateCaseSummary from '../../services/priscription/createCaseSummary';
import medicineFrequencies from '../../constant/constant';
import medicineDosages from '../../constant/medicineDosages';
import fetchMedicineList from '../../services/medicines/fetchMedicineList';
import useDynamicIcons from '../../Hooks/useDynamicIcons';
import savePriscription from '../../services/priscription/savePriscription';
import toast, { Toaster } from 'react-hot-toast';
import { handlePrscriptionChange, setPatientDetail } from '../../store/reducer/currentPatient/currentPatient';
import caseSheetService from '../../services/caseSheetService/caseSheet.service';
import { useDispatch, useSelector } from 'react-redux';
import getPatientDetailsById from '../../services/appointment/getPatientDetailsById';
import getPrescriptionById from '../../services/appointment/getPrescriptionById';
import getParticularCaseSheet from '../../services/appointment/getActiveCaseSheet';
import getBranchById from '../../services/branchService/getBranchById';
import { pushComponentToModal, switchModal } from '../../store/handleModal';
import { duration, Tooltip } from '@mui/material';
import getDoctorsByBranch from '../../services/appointment/getDoctorsByBranch';
import medicineInstruction from '../../constant/medicineInstructions';
import SPKBTNSave from '../../common/Button/SPKBTNSave';
import SPKBTNView from '../../common/Button/SPKBTNView';
import SPKBTNCancel from '../../common/Button/SPKBTNCancel';
import SPKBTNThemedEdit from '../../common/Button/OutlineThemeButton/SPKBTNThemedEdit';
import SPKBTNThemedDelete from '../../common/Button/OutlineThemeButton/SPKBTNThemedDelete';
import SpkDataTable from '../../common/DataTable/SpkDataTable';
import CaseDetailsSideBar from '../caseSheet/CaseDetailsSideBar';
import EditMedicineDetails from '../priscription/EditMedicineDetails';
import usePatientHook from '../../Hooks/usePatientHook';
import usePriscriptionHook from '../../Hooks/usePriscription';
import useActivePatientSlice from '../../Hooks/useActivePatientSlice';
import useHandleModal from '../../Hooks/useHandleModal';
import usePatientCasesHook from '../../Hooks/usePatientCases';


function EditPriscription() {

    const [showCaseDetails, setShowCaseDetails] = useState(false)
    const { activeBranch, activeUser } = useActivePatientSlice()
    const [activeFocus, setActivefocus] = useState('')
    const { closeModal } = useHandleModal()
    //  const [isDark] = useDarkmode()
    const isDark = false
    const location = useLocation();
    const { newData } = location.state || {};
    const [activeCaseSheet, setActiveCaseSheet] = useState({})
    const { previewPrescription, saveUpdatePriscription } = usePriscriptionHook()
    const { updateActivePatientStoreById } = usePatientHook()
    const [prescription, setPrescription] = useState({})
    const [medicineList, setMedicineList] = useState([])
    const navigate = useNavigate()
    const validatPrescription = ['branchId', 'patientId', 'doctorId', 'drugArray']
    const validateDrug = ['drugName', 'dosage', 'freequency', 'duration']
    const [caseSheetList, setCaseSheetList] = useState([])
    const [edit, setEdit] = useState(false)
    const ativePatientData = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    const [doctorList, setDoctorList] = useState([])
    const {readAllPatientCases}= usePatientCasesHook()
    const [updateItemDetails, setUpdateItemDetails] = useState(1)
    const [formData, setFormData] = useState({
        drugName: "",
        drug: "",
        dosage: "",
        freequency: "",
        instruction: "",
        duration: "",
        timing: '',
        note: "",

    })
    const dispatch = useDispatch()
    const getMyIcon = useDynamicIcons()



    const loadDoctorDetails = async () => {
        const result = await getDoctorsByBranch({ branchId: ativePatientData?.branch })

        setDoctorList(result?.data?.employees)
    }
    useEffect(() => {
        loadDoctorDetails()
    }, [ativePatientData])

    useEffect(() => {

        const selectedCase = caseSheetList.find(item => item._id === newData?.caseSheetId); // Find the selected case
        setActiveCaseSheet(selectedCase);
    }, [caseSheetList])
    useEffect(() => {
        closeModal()
    }, [])


    useEffect(() => {
        console.log(newData, '-------------->>>>>>>>>>>>>>>>>>>>>>>')

        loadCaseDetails(newData)
        setPrescription(newData)
        updateActivePatientStoreById(newData.patientId)

    }, [newData])
    const handleChange = (e) => {

        const { name, value } = e.target
        const pattern = medicineFrequencies?.filter((item) => item.pattern == value)[0]

        setFormData((prev) => ({
            ...prev,
            [name]: ['dosage', 'duration'].includes(name) && !isNaN(parseInt(value)) ? parseInt(value) : value,
            timing: name == 'freequency' ? pattern?.have : prev.timing
        }))
    }



    const handleSubmitService = (selectedMedicine) => {
        const isValid = validateDrug?.filter((item) => !selectedMedicine[item]?.toString()?.length)
        if (isValid?.length) {
            toast.error(`${isValid.join(',').charAt(0)?.toUpperCase()}${isValid.join(',').slice(1).toLowerCase()} ${isValid.length == 1 ? 'is' : 'are'} empty`)
        }
        else {
            const drugArray = [...prescription.drugArray]
            drugArray.push(selectedMedicine)
            setPrescription((prev) => ({
                ...prev,
                drugArray: drugArray
            }))
            setEdit(false)
            setFormData({
                drugName: "",
                drug: "",
                dosage: "",
                freequency: "",
                instruction: "",
                duration: "",
                timing: '',
                note: "",
            })

        }
        setUpdateItemDetails((prev) => prev + 1)
    }
    useEffect(() => {
        setUpdateItemDetails((prev) => prev + 1)
    }, [])


    const loadCaseDetails = async (patientData) => {
        const data = await readAllPatientCases(patientData.patientId)
        setCaseSheetList(data)
    }

     

    const handleEdit = (med, position) => {

        const drugArray = [...prescription.drugArray]
        setFormData(med);
        drugArray?.splice(position, 1)
        setPrescription((prev) => ({
            ...prev,
            drugArray: drugArray
        }))

        setEdit(false)

    }
    const handleDelete = (med, position) => {
        const drugArray = [...prescription.drugArray]
        drugArray?.splice(position, 1)
        setPrescription((prev) => ({
            ...prev,
            drugArray: drugArray
        }))

    }

    const handleChangePreScription = (e) => {
        const { name, value } = e.target
        setPrescription((prev) => ({
            ...prev,
            [name]: value
        }))
        setEdit(false)

    }

    const handleSavePriscription = async () => {
        const result = await saveUpdatePriscription(prescription)
        if (result.status) {
            toast.success(result.message)
            setEdit(true)
            setPrescription((prev) => ({
                ...prev,
                _id: result?.data?._id
            }))
        }
        else
            toast.error(result.message)
        dispatch(switchModal(false))
    }



    useEffect(() => {

    }, [prescription])
    const backToPriscriptionList = () => {
        navigate('/patientDetail/prescription')
    }


    const updateTablenew = async ({ page = 1, rowPerPage = 100, keyword = '' }) => {

        const currentData = prescription?.drugArray || []
        const totalDataCount = prescription?.drugArray?.length || 0

        return { data: currentData, totalDataCount: totalDataCount }
    }


    const columns = [
        {
            name: " Drug Name",
            selector: (row) => row?.drugName,
            sortable: true,

            left: true, // Center aligns the column

        }, {
            name: "Dosage",
            selector: (row) => row?.dosage,
            sortable: true,

            left: true, // Center aligns the column

        }, {
            name: "Frequency",
            selector: (row) => row?.freequency + row?.timing,
            sortable: true,

            left: true, // Center aligns the column

        }, {
            name: "Instruction",
            selector: (row) => row?.instruction,
            sortable: true,

            left: true, // Center aligns the column

        },
        {
            name: "Duration",
            selector: (row) => parseFloat(row?.duration)?.toFixed(2),
            sortable: true,

            right: true,
        },
        {
            name: "Notes",
            selector: (row) =>  row?.note,
            sortable: true,

            right: true,
        },

        {
            name: "Actions",
            selector: (row, index) => {
                return (
                    <div className="flex justify-center items-center gap-2">
                        <Tooltip content="Edit" placement="top" arrow animation="shift-away">
                            <>
                                <SPKBTNThemedEdit onClick={() => handleEdit(row, row?.index)} />
                                <SPKBTNThemedDelete onClick={() => handleDelete(index)} />
                            </>
                        </Tooltip>
                    </div>
                );
            },
            sortable: false,

            center: true,
        },
    ]




    return (
        <>
            <Toaster />
            <div className='md:container md:mx-auto text-sm   pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='border-[1px] p-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
                    <h2 className="capitalize leading-6 tracking-wider mt-8  text-2xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Case Details</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden py-5">



                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Case Id
                                </p>
                                <select
                                    onChange={(e) => {
                                        setEdit(false)
                                        const selectedCase = caseSheetList.find(item => item._id === e.target.value); // Find the selected case
                                        setActiveCaseSheet(selectedCase);
                                        setPrescription((prev) => ({ ...prev, caseSheetId: selectedCase?._id }))

                                    }}
                                    name="caseId"
                                    className="form-control outline-none w-full rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option value={{}}>--Select Case--</option>
                                    {caseSheetList?.map((item) => {
                                        const caseSummary = generateCaseSummary(item);
                                        const summary = Object.keys(caseSummary)
                                            ?.map((key) => `${key}: ${caseSummary[key]?.join(' ')}`)
                                            ?.join(' ');

                                        const displayId = item?.displayId.split('-').slice(3).join('-');

                                        return (
                                            <option key={item._id} selected={newData?.caseSheetId == item?._id} value={item._id}>
                                                Case-Id: {displayId} - {summary?.charAt(0)?.toUpperCase() + summary?.slice(1, 100)?.toLowerCase()}
                                                {summary?.length > 100 ? '...' : ''}
                                            </option>
                                        );
                                    })}
                                </select>


                            </label>
                        </div>
                        <div className=" ">

                            <label className=''>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black "}`}>
                                    Doctor
                                </p>
                                <select
                                    value={prescription?.doctorId}
                                    onChange={(e) => { setPrescription((prev) => ({ ...prev, doctorId: e.target.value })) }}

                                    name="doctorId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option value="">--Select Doctor--</option>
                                    {
                                        doctorList && doctorList.length > 0 && doctorList.map((item) => {
                                            return (
                                                <option key={item._id} value={item._id}>{item?.firstName + ' ' + item?.lastName}</option>
                                            )
                                        })
                                    }
                                </select>

                            </label>
                        </div>
                        <div className=" "></div>



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
                    <div className=" border-b   border-dashed border-[#F6C000] py-4 justify-between items-center mt-5 w-[100%]">
                        <h2 className="capitalize leading-6 tracking-wider   text-xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Medication Details</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        {
                            showCaseDetails && activeCaseSheet && Object.keys(activeCaseSheet)?.length > 0 ?
                                <>
                                    <CaseDetailsSideBar activeCaseSheet={activeCaseSheet} />
                                </>
                                : ""
                        }



                        <div className="relative pt-5 border rounded-md bg-ora nge-800 flex-grow p-4 xl:w-[69%] md:w-3/5 w-full">
                            <div className='py-2 '>
                                <h2 className='text-sm font-semibold text-lightT extHeading'>Medicine (Rx)</h2>
                            </div>
                            <div className='overflow-x-auto overflow-y-hidden  '>

                                <EditMedicineDetails selectedMedicine={formData} handleSubmitService={handleSubmitService} />

                            </div>


                            {/* for table */}
                            <div>
                                <SpkDataTable columns={columns} onChangePage={updateTablenew} updateTable={updateItemDetails} subHeader={false} pagination={false} isDark={isDark} />

                            </div>


                            <h2 className="capitalize   tracking-wider    text-xl font-semibold text-lightModalHeaderColor dark:text-darkTitleColor">Other Details</h2>

                            <div className="grid grid-cols- lg:grid-cols-3 gap-5 overflow-hidden py-5">

                                <div className=" md:col-span-3">
                                    <label >
                                        <p className={`mb-1 py-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Additional Advices
                                            {/* <span className="text-red-500">*</span> */}
                                        </p>
                                    </label>
                                    <textarea
                                        className={`  form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary  bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                                        placeholder=""
                                        name='additionalAdvice'
                                        onChange={handleChangePreScription}
                                        value={prescription?.additionalAdvice}
                                        rows={1}
                                    // onChange={handleChange}
                                    // readOnly={isViewed}
                                    ></textarea>
                                    {/* {<p className="text-red-600  text-xs"> {formDataErr.address}</p>} */}
                                </div>



                            </div>


                        </div>


                    </div>

                    <div className="flex justify-end gap-2 mt-10">

                        <SPKBTNCancel text='Close' onClick={() => backToPriscriptionList()} />
                        {
                            edit ?
                                <div className='w-10'>
                                    <SPKBTNView width={'10'} text={'View'} onClick={() => previewPrescription({ _id: prescription._id, patientId: prescription?.patientId, caseSheetId: activeCaseSheet, branchId: { _id: newData?.branchId } })} />
                                </div>
                                :

                                <SPKBTNSave text='Save' onClick={() => { handleSavePriscription() }} />


                        }

                    </div>
                </div>




            </div>

        </>
    )
}

export default EditPriscription