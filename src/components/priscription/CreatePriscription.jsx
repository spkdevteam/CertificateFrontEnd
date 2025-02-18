import { useDispatch, useSelector } from "react-redux"
import { switchModal } from "../../store/handleModal"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import profile from "../../assets/images/avatar/profile.jpg"
import { useEffect, useState } from "react"
import { FaMobileAlt, FaRegCalendarAlt, FaRegIdBadge } from "react-icons/fa"
import { MdOutlineLocationCity, MdOutlineMail } from "react-icons/md"
import { PiDropLight } from "react-icons/pi"
import { IoTransgender } from "react-icons/io5"
import { FaMapLocationDot } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"
import caseSheetService from "../../services/caseSheetService/caseSheet.service"
import { div } from "framer-motion/client"
import { useInstantTransition } from "framer-motion"
import { cancelEditPrescription, setActivePrescription, updateActiveBooking } from "../../store/reducer/currentPatient/currentPatient"
import savePriscription from "../../services/priscription/savePriscription"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import getActiveAppointMent from "../../services/appointment/getActiveAppointMent"
import generateCaseSummary from "../../services/priscription/createCaseSummary"
import useDarkmode from "../../Hooks/useDarkMode"
import employeeService from "../../services/employeeService/employee.Service"
import searchPatient from "../../services/appointment/searchPatient"
import getDoctorsByBranch from "../../services/appointment/getDoctorsByBranch"
import profileImg from "../../assets/images/avatar/profileImg.png"
import Icons from "../ui/Icon"
import SPKBTNCancel from "../../common/Button/SPKBTNCancel"
import { SPKFormClose } from "../../common/Button/SPKFormClose"
import useColourThemeHook from "../../Hooks/useColourThemeHook"
import SPKBTNInsert from "../../common/Button/SPKBTNInsert"
import SPKBTNNew from "../../common/Button/SPKBTNNew"

const CreatePriscription = () => {


    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const [isDark] = useDarkmode()
    const getMyIcon = useDynamicIcons()
    const [info, setInfo] = useState({ message: '', status: false })
    const VerifiedIcon = getMyIcon('verified')
    const PhoneIcon = getMyIcon('contact')
    const EmailIcon = getMyIcon('email')
    const UndoIcon = getMyIcon('undo')
    const [focus, setFocus] = useState(true)
    const [branchList, setBranchList] = useState([]);
    const [patientList, setPatientList] = useState([])
    const [selectedPatient, setSelectedPatient] = useState()
    const [docList, setDoctorList] = useState([])
    const [lockPatient, setLockPatient] = useState(false)
    const [isViewed, setIsViewed] = useState(false)
    const [userDoctor, setUserDoctor] = useState('')
    const { theme } = useColourThemeHook()
    const patientData = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    const [formData, setFormData] = useState({
        branchId: patientData?._id ? patientData?.branch : (currentUser?.role?.id == 1 || currentUser?.role?.id == 2 || currentUser?.role?.id == 3 || currentUser?.role?.id == 15) ? "" : currentUser?.branch,

        patientId: '',//patientData?._id ? patientData?._id : '',
        doctorId: (currentUser?.role?.id == 3 || currentUser?.role?.id == 15) ? currentUser?._id : ''
        ,
        firstName: '',// patientData?._id?patientData?.firstName:''
    })
    // const activePatient = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    useEffect(() => {
        if (currentUser?.role?.id == 3 || currentUser?.role?.id == 15)
            setUserDoctor(currentUser?._id)
    }, [currentUser])
    useEffect(() => {
        // setSelectedPatient(patientData)
    }, [patientData])



    useEffect(() => {
        getActiveBranch();
    }, [])

    useEffect(() => {
        loadPatientDetails()
        loadDoctorDetails()
    }, [formData])

    const loadDoctorDetails = async () => {
        const result = await getDoctorsByBranch({ branchId: formData?.branchId })

        setDoctorList(result?.data?.employees)
    }

    const loadPatientDetails = async () => {
        const result = await searchPatient({ page: 1, keyword: formData?.firstName, perPage: 100, isAdmin: true, branchId: formData?.branchId })

        setPatientList(result?.data?.patients)
    }


    async function getActiveBranch() {
        try {
            const response = await employeeService.getActiveBranches()
            setBranchList(response?.listOfBranches);
        } catch (error) {
            console.log("Error while getting active branch list", error);
        }
    }


    const closeModal = () => { dispatch(switchModal(false)) }
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePatientSelection = (patient) => {

        setSelectedPatient(patient)
        setFormData((prev) => ({
            ...prev,
            patientId: patient?._id,
            firstName: patient?.firstName,
            branchId: patient?.branch?._id
        }))
        setLockPatient(true)
        setFocus('')
    }
    const handleCreatePrecription = () => {
        const newData = {
            branchId: formData?.branchId,
            buId: formData?.buId,
            patientId: formData?.patientId,
            doctorId: formData?.doctorId,
            drugArray: [],
            additionalAdvice: null
        }
        console.log(newData, '-----------------New Data <<<<<<<<<<<<<<<<<')
        navigate('/patientDetail/editPriscription', { state: { newData } })
        closeModal()
    }



    return (
        <div className=" h-full w-full text-sm     flex justify-center items-center shadow-sm  ">
            <div className={` p-4 rounded-md overflow-hidden flex-col  xl:w-[60%]   w-[50%]       text-lightModalHeaderColor flex items-center justify-center  bg-white   border-lightBorderColor  dark:bg-darkSecondary dark:border-b dark:border-darkSecondary `}>
                <div className={`w-full items-center flex justify-between`}>
                    <h2 className=" text-black dark:text-darkTitleColor " >
                        Create Prescription
                    </h2>
                    <SPKFormClose onClick={closeModal} text="" />
                </div>
                <div className={`gap-4 w-full rounded-md`}>

                    <div className={`rounded-xl p-4 gap-2  border ${theme.bordercolour}     flex flex-col w-full`}>

                        <div className="w-full    gap-4 flex    dark:text-darkTitleColor    rounded      ">
                            <div className={`w-1/2 flex justify-center text-sm items-center flex-col gap-4  border ${theme.bordercolour} rounded-md   p-5`}>

                                {currentUser?.role?.id == 1 || currentUser?.role?.id == 2 || currentUser?.role?.id == 3 || currentUser?.role?.id == 15 || !currentUser?.branch ? <div className="w-full mb-4 ">
                                    <label className=''>
                                        <p className={`flex gap-1 mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Branch <span className="text-red-500">*</span>
                                        </p>
                                        <select
                                            value={formData?.branchId}
                                            onChange={handleChange}
                                            disabled={isViewed || lockPatient}

                                            name="branchId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        >
                                            <option value="">--Select Branch--</option>
                                            {
                                                branchList && branchList.length > 0 && branchList.map((item) => {
                                                    return (
                                                        <option key={item._id} value={item._id}>{item?.name}</option>
                                                    )
                                                })
                                            }
                                        </select>

                                    </label>
                                </div> : ''}


                                <div className=" w-full mb-4    ">
                                    <label>
                                        <p className={` flex gap-1 mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                            Patient <span className="text-red-500">*</span> <VerifiedIcon className={`${formData?.patientId?.length ? 'text-cyan-800' : 'text-red-800'}`} />

                                        </p>
                                        <div className="flex w-full relative justify-end items-center ">
                                            <input
                                                name="firstName"
                                                type="text"
                                                value={formData?.firstName}
                                                placeholder="Search..."
                                                onChange={(e) => { handleChange(e); setFocus('firstName') }}
                                                autoComplete="off"
                                                readOnly={lockPatient}
                                                className={`form-control relative  outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white`}
                                            />
                                            {formData?.patientId ? <UndoIcon onClick={() => { setFormData((prev) => ({ ...prev, patientId: null })); setFocus('firstName'); setLockPatient(false) }} className='absolute cursor-pointer end-0 p-1  text-red-900 w-5 h-5' /> : ''}

                                        </div>
                                        <div className='flex flex-col    absolute '>
                                            {
                                                focus == 'firstName' && patientList?.map((patient, index) => (
                                                    <div onClick={() => handlePatientSelection(patient)} key={index} className=' flex justify-center items-center gap-4   cursor-pointer z-20 w-full border   rounded-md px-4 py-2   border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white'>
                                                        <small className='items-start text-sm w-3/12 '> {patient?.firstName + ' ' + patient?.lastName || ''} </small>
                                                        <div className="flex flex-col w-8/12">
                                                            <div className=" flex "> <PhoneIcon />
                                                                <small className='items-start text-sm w-4/12'> {patient?.phone || ''} </small> </div>
                                                            <div className=" flex "> <EmailIcon />
                                                                <small className='items-start text-sm w-4/12'> {patient?.email || ''} </small> </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </label>
                                </div>


                                {/* <div className="w-full mb-4  ">
                            <label className=''>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black "}`}>
                                    Doctor
                                </p>
                                <select
                                    value={formData?.doctorId}
                                    onChange={handleChange}

                                    name="doctorId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option value="">--Select Doctor--</option>
                                    {
                                        docList && docList.length > 0 && docList.map((item) => {
                                            return (
                                                <option key={item._id} value={item._id}>{item?.firstName + ' ' + item?.lastName}</option>
                                            )
                                        })
                                    }
                                </select>

                            </label>
                        </div> */}

                            </div>
                            <div className={`w-1/2 flex justify-center text-sm items-center flex-col gap-4  border   rounded-md   ${theme.bordercolour} p-5`}>
                                <img src={selectedPatient && selectedPatient?.profileImage ? `${import.meta.env.VITE_BASE_URL}/patient/${selectedPatient?.profileImage}` : profileImg} className='w-24 h-24 rounded-lg' alt="" />

                                <div className="flex flex-col justify-center w-full flex-wrap items-center text-xs">
                                    <p>{selectedPatient?.firstName?.length ? selectedPatient?.firstName?.charAt(0).toUpperCase() + selectedPatient?.firstName?.slice(1)?.toLowerCase() : '' + ' ' + selectedPatient?.lastName ? selectedPatient?.lastName : ''} {selectedPatient?.displayId?.slice(6) || ''} {selectedPatient?.age ? 'age:' + selectedPatient?.age || '' : ''} </p>
                                    <p></p>
                                    <p className="flex gap-2 justify-center flex-wrap items-center" >{selectedPatient?.phone?.length ? <> <PhoneIcon className='text-cyan-700 ' />  {selectedPatient?.phone} </> : ''} {selectedPatient?.email?.length ? <> <EmailIcon className='text-cyan-700 ' /> {selectedPatient?.email} </> : ''}</p>
                                    <p className="flex gap-2 justify-center items-center" > </p>

                                </div>
                            </div>

                        </div>
                        <div className="w-full    py-2  flex justify-end items-center  gap-4    ">
                            <SPKBTNCancel onClick={closeModal} text="Close" />
                            {
                                formData?.patientId?.length && formData?.branchId?.length ?
                                    <SPKBTNNew text='Create' onClick={handleCreatePrecription} />
                                    :
                                    ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePriscription