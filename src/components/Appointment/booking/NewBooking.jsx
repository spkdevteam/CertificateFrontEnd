import toast, { Toaster } from "react-hot-toast"
import useDynamicIcons from "../../../Hooks/useDynamicIcons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useDarkmode from "../../../Hooks/useDarkMode"
import createPatients from "../../../services/appointment/createPatient"
import Button from '../../../components/ui/Button';
import { switchModal } from "../../../store/handleModal"
import useFormNewAppointMent from "../../../Hooks/useFormNewAppointMent"
import getdailyBookingWithPagination from "../../../services/appointment/getDailyBookingwithPagination.js"
import employeeService from "../../../services/employeeService/employee.Service.js"
import saveAppointment from "../../../services/appointment/saveAppointment.js"
import { updateBookingStatus } from "../../../store/appointmentStore"
import searchPatientWithNameEmailPhone from "../../../services/appointment/searchPetient.js"
import getParticularCaseSheetByPatient from "../../../services/appointment/getCaseSheetByPatient.js"
import getAllCheifComplaint from "../../../services/cheifComplaint/getAllCheifComplaint.js"
import Icons from "../../ui/Icon.jsx"

const NewBooking = ({ scrollContent }) => {
    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    const data = useSelector((state) => state?.modalSlice?.data)
    const dispatch = useDispatch()
    const { slotAvailability } = useFormNewAppointMent()
    const getMyIcon = useDynamicIcons()
    const [info, setInfo] = useState({ message: '', status: false })
    const CloseIcon = getMyIcon('close')
    const [isDark, setDarkMode] = useDarkmode();
    const [C_Complaint, setC_Complant] = useState([])
    const [complaintListVisible, setComplaintVisible] = useState(false)
    const [formData, setFormData] = useState({});
    const [branchList, setBranchList] = useState([]);
    const [patientList, setPatientList] = useState([])
    const [docAvailable, setDocAvailable] = useState([])
    const [spicialistAvailable, setSpicialistAvailable] = useState([])
    const [docBooked, setDocBooked] = useState([])
    const [specialistBooked, setSpecialistBooked] = useState([])
    const [asstBooked, setAsstBooked] = useState([])
    const [chairBooked, setChairBooked] = useState([])
    const [asstAvailable, setAsstAvailable] = useState([])
    const [chairAvailable, setChairAvailable] = useState([])
    const [isViewed, setIsViewed] = useState()
    const [lockPatient, setlockPatient] = useState(false)
    const [focus, setFocus] = useState()
    const [loading, setLoading] = useState(false);
    const [viewOption, setViewOptions] = useState(false)
    const [formDataErr, setFormDataErr] = useState({
        branchId: "",
        roleId: "",
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        gender: "",
        ZipCode: "",
        address: "",
        country: "",
        state: "",
        city: "",
        panNumber: "",
        aadharNumber: "",
        emergencyPhone: "",
        bloodGroup: "",
        password: "",
        confirmPassword: ""
    });
    const [appInfo, setAppInfo] = useState({ message: '', status: false })
    const VerifiedIcon = getMyIcon('verified')
    const AddUserIcon = getMyIcon('addUser')
    const EditIcon = getMyIcon('edit')
    const NewIcon = getMyIcon('createNew')
    const OptionsIcon = getMyIcon('options')
    const DeleteIcon = getMyIcon('delete')
    const CancelIcon = getMyIcon('close')
    const PhoneIcon = getMyIcon('contact')
    const EmailIcon = getMyIcon('email')
    const UndoIcon = getMyIcon('undo')


    const closeModal = () => { dispatch(switchModal(false)) }

    const createPatient = async (userData) => {

        const newData = {
            branchId: (currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ? userData?.branchId : currentUser?.branch,
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            gender: userData?.gender,
            bloodGroup: userData?.bloodGroup,
            phone: userData?.phone,
            patientGroup: userData?.patientGroup,
            referedBy: userData?.referedBy,
            roleId: "67602305890afbdafd0818a7",
            age: userData?.age,
            email: userData?.email
        }
        
        const data = await createPatients(newData)
        if (data.status) {
            toast.success(data.message)
        }
        setInfo({ message: data.message, status: data.status })
        setFormData((prev) => ({
            ...prev,
            patientId: data?.data?.patientId
        }))


    }

    const handleKeyPress = (e) => {
        const value = e.target.value;
        const cleanedValue = value.replace(/[^6-9\d]/g, ""); //Allow only number starts with 6 to 9
        if (cleanedValue.trim() !== "") {
            e.target.value = cleanedValue;
        } else {
            e.target.value = ""; // Clear the input if no valid characters are present
        }
    };


    const getChiefComplaint = async () => {
        const result = await getAllCheifComplaint()

        setC_Complant(result?.data)

    }
    const searchPatient = async (patientRecord) => {
        try {

            const result = await searchPatientWithNameEmailPhone({ patientName: patientRecord.firstName, patientEmail: '', patientContactNumber: patientRecord.phone, branchId: patientRecord.branchId })
            setPatientList(result?.data?.patients)
            console.log(result)

        } catch (error) {

        }
    }

    useEffect(() => {

        const timeout = setTimeout(() => {
            console.log(formData)
            if (formData?.firstName?.length || formData.phone || formData.branchId) searchPatient(formData)
            else {
                setPatientList([])
            }
        }, 500);


        return () => {
            clearTimeout(timeout);
        };
    }, [formData.firstName, formData.phone, formData.email, formData.lastName, formData.branchId]);
    useEffect(() => {
        if (formData?.patientId?.length) setlockPatient(true)
        else setlockPatient(false)
    }, [formData?.patientId])


    useEffect(() => {
        console.log(docBooked, 'docBooked')
    }, [docBooked])


    const handlePatientSelection = (patient) => {
        setFormData((prev) => ({
            ...prev,
            firstName: patient.firstName,
            lastName: patient.lastName,
            branchId: patient.branch?._id,
            age: patient.age,
            email: patient.email,
            gender: patient.gender,
            bloodGroup: patient.bloodGroup,
            phone: patient.phone,
            patientId: patient._id

        }))
        setFocus('')

    }


    function handleChange(e) {
        const { name, value } = e.target
        setAppInfo({})
        setInfo({})

        if (name == "branchId") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    branchId: "Branch is Required"
                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    branchId: ""
                }))
            }
        }
        if (name == "roleId") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    roleId: "Role is Required"
                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    roleId: ""
                }))
            }
        }
        if (name == "firstName") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    firstName: "First Name is Required"

                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    firstName: ""
                }))
            }
        }

        if (name == "lastName") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    lastName: "Last Name is Required",

                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    lastName: ""
                }))
            }
        }

        if (name == "phone") {
            const phoneRegex = /^\d{10}$/;
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    phone: "Phone No. is Required"
                }))
            } else if (!phoneRegex.test(value)) {
                setFormDataErr((prev) => ({
                    ...prev,
                    phone: "Phone number should be 10-digit"
                }))
            }
            else {
                setFormDataErr((prev) => ({
                    ...prev,
                    phone: ""
                }))
            }
        }

        if (name == "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    email: "Email is Required"
                }))
            } else if (!emailRegex.test(value)) {
                setFormDataErr((prev) => ({
                    ...prev,
                    email: "Enter valid Email "
                }))
            }
            else {
                setFormDataErr((prev) => ({
                    ...prev,
                    email: ""
                }))
            }
        }


        // if(['firstName','lastName','phone','age','gender','email'].includes(name)){
        //     setFormData((prev) => ({
        //         ...prev,
        //         patientId:"",

        //     }))
        // }
        if (name == 'date') {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
                slotFrom: `${value}T${prev?.slotFrom?.split('T')[1] || '00:00:00.000Z'}`,
                slotTo: `${value}T${prev?.slotTo?.split('T')[1] || '00:00:00.000Z'}`
            }))
        }
        else {
            const date = formData?.date ? formData.date : new Date().toISOString().split('T')[0]
            setFormData((prev) => ({
                ...prev,
                [name]: ['slotFrom', 'slotTo'].includes(name)
                    ? `${date}T${value}:00.000Z`
                    : value
            }))
        }


    }
    const loadSlotFilteredData = async () => {
        try {
            const input = {
                branchId: (currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ? formData?.branchId : currentUser?.branch,
                slotFrom: formData?.slotFrom,
                slotTo: formData?.slotTo,
                seletedDate: formData.date,
                Chair: data?.Chair,
                Doctor: data?.Doctor
            }


            const result = await slotAvailability(input)
            const {
                doctorsAvailable,
                chairAvailable,
                assistantAvailable,
                specialistAvailable,
            } = result.data
            console.log(doctorsAvailable, 'doctorsAvailable')
            const docList = await doctorsAvailable?.map((doctor) => ({ id: doctor?._id, displayName: doctor?.firstName, roleId: doctor?.roleId }))
            const asstList = await assistantAvailable?.map((asst) => ({ id: asst?._id, displayName: asst?.firstName }))
            const chairList = await chairAvailable?.map((chair) => ({ id: chair?._id, displayName: chair?.chairNumber }))
            // if (data?.doctor) {
            //     const exist = docAvailable.some((doc) => doc.id === data?.doctor?._id)
            //     setDocBooked([{ id: data?.doctor?._id, displayName: data?.doctor?.firstName }])
            //     if (!exist) {
            //         setDocAvailable([...docAvailable, { id: selectedRow?.dutyDoctorId?._id, displayName: selectedRow?.dutyDoctorId?.firstName }])
            //     }
            // }
            console.log([...specialistBooked, ...docBooked,], ' ...specialistBooked, ...docBooked, ')
            setDocAvailable((prev) => ([
                ...specialistBooked,
                ...docBooked,
                ...docList?.filter((div) => !docBooked.some((item) => item.id === div.id))
            ].sort((a, b) => a.displayName - b.displayName)))


            setAsstAvailable((prev) => ([
                ...asstBooked,
                ...asstList?.filter((div) => !asstBooked.some((item) => item.id === div.id))
            ].sort((a, b) => a.displayName - b.displayName)))


            setChairAvailable((prev) => ([
                ...chairBooked,
                ...chairList?.filter((div) => !chairBooked.some((item) => item.id === div.id))
            ].sort((a, b) => a.displayName - b.displayName)))


        } catch (error) {

        }
    }

    const handleSaveAppointment = async () => {
        (currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ? '' : formData.branchId = currentUser?.branch
        const activeCaseSheet = await getParticularCaseSheetByPatient(formData?.patientId) || null
        formData.caseId = activeCaseSheet?.data?.caseSheets?.filter((item) => ['In Progress', 'Proposed'].includes(item.status))[0]?._id || ''

        console.log(formData)
        const result = await saveAppointment(formData)
        if (result?.status) {
            dispatch(updateBookingStatus(true))
            // closeModal()
            toast.success(result?.message)

        }
        else {
            setAppInfo({ ...result })
            toast.error(result?.message)
        }
    }


    useEffect(() => {

        loadSlotFilteredData()

    }, [formData?.slotFrom, formData?.slotTo, formData?.date, formData?.branchId])



    useEffect(() => {
        const temData = {
            branchId: data?.branchId?._id,
            patientId: data?.patientId?._id,
            date: data?.date,
            dutyDoctorId: data?.dutyDoctorId?._id,
            dentalAssistant: data?.dentalAssistant?._id,
            specialistDoctorId: data?.specialistDoctorId?._id,
            chairId: data?.chairId?._id,
            firstName: data?.patientId?.firstName,
            lastName: data?.patientId?.lastName,
            email: data?.patientId?.email,
            gender: data?.patientId?.gender,
            bloodGroup: data?.patientId?.bloodGroup,
            phone: data?.patientId?.phone,
            age: data?.patientId?.age,
            slotFrom: data?.slotFrom,
            slotTo: data?.slotTo

        }
        if (data?.isViewed) setIsViewed(true)

        setFormData(temData)
        // loadSlotFilteredData()
        if (data?.specialistDoctorId?._id) {
            const exist = docAvailable.some((doc) => doc.id === data?.specialistDoctorId?._id)
            setSpecialistBooked([{ id: data?.specialistDoctorId?._id, displayName: data?.specialistDoctorId?.firstName ,roleId:data?.specialistDoctorId?.roleId}])
            if (!exist) {
                console.log({ id: data?.specialistDoctorId?._id, displayName: data?.specialistDoctorId?.firstName,roleId:data?.specialistDoctorId?.roleId }, ' { id: data?.specialistDoctorId?._id, displayName: data?.specialistDoctorId?.name }')
                setDocAvailable((prev) => ([
                    ...prev,
                    { id: data?.specialistDoctorId?._id, displayName: data?.specialistDoctorId?.firstName,roleId:data?.specialistDoctorId?.roleId }
                ]))
            }

        }
        if (data?.dutyDoctorId?._id) {
            const exist = docAvailable.some((doc) => doc.id === data?.dutyDoctorId?._id)
            setDocBooked([{ id: data?.dutyDoctorId?._id, displayName: data?.dutyDoctorId?.firstName }])
            if (!exist) {
                console.log( { id: data?.dutyDoctorId?._id, displayName: data?.dutyDoctorId?.firstName },' { id: data?.doctor?._id, displayName: data?.doctor?.firstName }')
                setDocAvailable((prev) => ([
                    ...prev,
                    { id: data?.dutyDoctorId?._id, displayName: data?.dutyDoctorId?.firstName,roleId:data?.dutyDoctorId?.roleId }
                ]))
                 
            }
        }
        if (data?.dentalAssistant?._id) {
            setAsstBooked([{ id: data?.dentalAssistant?._id, displayName: data?.dentalAssistant?.firstName }])
            const exist = asstAvailable.some((doc) => doc.id === data?.dentalAssistant._id)
            if (!exist) {
                setAsstAvailable([...asstAvailable, { id: data?.dentalAssistant?._id, displayName: data?.dentalAssistant?.firstName }])
            }
        }
        if (data?.chairId?._id) {
            const exist = chairAvailable.some((doc) => doc.id === data?.chairId?._id)
            setChairBooked([{ id: data?.chairId?._id, displayName: data?.chairId?.chairNumber }])
            if (!exist) {
                setChairAvailable([...chairAvailable, { id: data?.chairId?._id, displayName: data?.chairId?.chairNumber }])
            }
        }
        if (data?._id) {
            // setEdit(true)
        }
        else {
            // setEdit(false)
        }
    }, [data])


    useEffect(() => {
        console.log(docAvailable, 'docAvailabledocAvailabledocAvailabledocAvailable')
    }, [docAvailable])





    useEffect(() => {
        setInfo({ message: '', status: false })
        getdailyBooking()
        getActiveBranch();
        setFormData((prev) => ({ ...prev, date: new Date().toISOString().split('T')[0] }))
        getChiefComplaint()
    }, [])
    async function getdailyBooking(data) {
        try {
            const response = await getdailyBookingWithPagination(data)
            setPending(true)
        } catch (error) {
        }
    }
    async function getActiveBranch() {
        try {
            const response = await employeeService.getActiveBranches()
            setBranchList(response?.listOfBranches);
        } catch (error) {
            console.log("Error while getting active branch list", error);
        }
    }




    return (
        <div className={`w-full h-[100%]    flex flex-col rounded-md bg-white dark:bg-darkAccent text-left   shadow-xl   max-w-4xl`}>
            <Toaster />
            <div className={`  py-7 px-5 text-lightModalHeaderColor flex justify-between bg-white border-b border-lightBorderColor dark:bg-darkSecondary dark:border-b dark:border-darkSecondary `}>

                <h2 className="capitalize leading-6 tracking-wider  text-xl font-semibold text-black dark:text-darkTitleColor" style={{ fontFamily: "Inter_Regular" }}>
                    {`${data?._id && isViewed ? 'View ' : data?._id && !isViewed ? 'Edit ' : 'Create New '}`} Appointment
                </h2>
                <button onClick={closeModal} className="  text-lightmodalCrosscolor hover:text-lightmodalbtnText text-[22px]">
                    <Icons icon="heroicons-outline:x" />
                </button>
            </div>
            <div className={`px-6 py-8 overflow-y-auto h-[75vh] grid   `}>
                <div className={`h-full    w-full  `} >

                    <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                        Personal Details  <small className={`font-thin  ${info?.status ? 'text-cyan-800' : 'text-red-500'}`}>{info?.message}</small>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                        <div className=" ">
                            <label hidden={currentUser?.role?.id == 1 || currentUser?.role?.id == 2 || !currentUser?.branch ? false : true} className=''>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Branch  <span className="text-red-500">*</span>
                                </p>
                                <select
                                    value={(currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ? formData?.branchId : currentUser?.branch}
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
                                {<p className="text-red-600  text-xs">{formDataErr.branchId}</p>}
                            </label>
                        </div>
                        <div className="   ">
                            <label className="">
                                <p className={` justify-start items-center flex  mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    First Name <span className="ml-1 text-red-500">*</span> <VerifiedIcon className={`ml-1 ${formData?.patientId?.length ? 'text-cyan-800' : 'text-red-800'}`} />

                                </p>
                                <div className="flex w-full relative justify-end items-center ">
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={formData?.firstName}
                                        placeholder="Enter First Name"
                                        onChange={(e) => { handleChange(e); setFocus('firstName') }}
                                        readOnly={isViewed}
                                        autoComplete="off"
                                        disabled={lockPatient}
                                        className={`form-control relative  outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white`}
                                    />
                                    {formData?.patientId ? <UndoIcon onClick={() => { setFormData((prev) => ({ ...prev, patientId: null })) }} className='absolute cursor-pointer end-0 p-1  text-red-900 w-5 h-5' /> : ''}

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

                                {<p className="text-red-600  text-xs"> {formDataErr.firstName}</p>}
                            </label>
                        </div>

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Last Name <span className="text-red-500">*</span>
                                </p>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={formData?.lastName}
                                    placeholder="Enter First Name"
                                    onChange={handleChange}
                                    readOnly={isViewed}
                                    autoComplete="off"
                                    disabled={lockPatient}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                                {<p className="text-red-600  text-xs"> {formDataErr.lastName}</p>}
                            </label>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">



                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Age (Yrs)
                                </p>
                                <input
                                    name="age"
                                    type="text"
                                    value={formData?.age}
                                    onChange={handleChange}
                                    placeholder="Enter Age"
                                    disabled={lockPatient}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Gender
                                </p>
                                <select
                                    name="gender"
                                    value={formData?.gender}
                                    disabled={lockPatient}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                    onChange={handleChange}
                                    readOnly={isViewed}
                                >
                                    <option value=""> Select</option>
                                    <option value="Male"> Male</option>
                                    <option value="Female">FeMale</option>
                                    <option value="Other"> Other</option>
                                    <option value="Prefer not to say"> Prefer not to say</option>
                                </select>
                                {<p className="text-red-600  text-xs">{formDataErr.gender}</p>}
                            </label>
                        </div>

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Blood Group
                                </p>
                                <select
                                    name="bloodGroup"
                                    value={formData?.bloodGroup}
                                    onChange={handleChange}
                                    readOnly={isViewed}
                                    disabled={lockPatient}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                    <option value="" > Select Blood Group</option>
                                    <option value="a-(+ve)"> A (+ve)</option>
                                    <option value="a-(-ve)">A (-ve)</option>
                                    <option value="b-(+ve)">B (+ve)</option>
                                    <option value="b-(-ve)">B (-ve)</option>
                                    <option value="ab-(+ve)">AB (+ve)</option>
                                    <option value="ab-(-ve)">AB (-ve)</option>
                                    <option value="o-(+ve)">O (+ve)</option>
                                    <option value="o-(-ve)">O (-ve)</option>
                                </select>
                                {<p className="text-red-600  text-xs">{formDataErr.bloodGroup}</p>}
                            </label>
                        </div>


                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Email
                                </p>
                                <input
                                    name="email"
                                    value={formData?.email}
                                    type="text"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    readOnly={isViewed}
                                    disabled={lockPatient}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                                {<p className="text-red-600  text-xs"> {formDataErr.email}</p>}
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Phone Number
                                </p>
                                <input
                                    name="phone"
                                    maxLength={10}
                                    minLength={10}
                                    type="text"
                                    value={formData?.phone}
                                    placeholder="Enter Branch Contact"
                                    onChange={(e) => { handleChange(e); setFocus('phone') }}
                                    onInput={handleKeyPress}
                                    readOnly={isViewed}
                                    autocomplete="off"
                                    disabled={lockPatient}
                                    className="form-control relative outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                                <div className='flex flex-col absolute '>
                                    {
                                        focus == 'phone' && patientList?.map((patient, index) => (
                                            <div key={index} onClick={() => handlePatientSelection(patient)} className='h-10     cursor-pointer z-20 w-full border   rounded-md px-4 py-2   border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white'>
                                                {patient?.firstName + patient?.lastName || '' + patient?.phone}
                                            </div>
                                        ))
                                    }
                                </div>
                                {<p className="text-red-600  text-xs"> {formDataErr.phone}</p>}
                            </label>
                        </div>
                        <div className=" flex justify-center  ">
                            <div className="flex justify-center items-end pb-1   ">
                                <div onClick={() => createPatient(formData)} className="flex h-10 text-lightBtntext rounded-md   gap-2 dark:hover:bg-darkBtnHover hover:bg-lightHoverBgBtn hover:text-white justify-center items-center p-2  cursor-pointer">
                                    {!formData?.patientId?.length ? <><AddUserIcon className=' h-5 w-5' /> <small className='text-base   font-thin' >Create  user </small></>
                                        : <button>  </button>}

                                </div>
                            </div>

                        </div>








                    </div>

                    <h4 class=" font-medium text-lg mt-3 px-4 py-2 text-lightModalHeaderColor">
                        Appointment Details  <small className={`font-thin  ${appInfo?.status ? 'text-cyan-800' : 'text-red-500'}`}>{appInfo?.message}</small>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Appointment Date <span className="text-red-500">*</span>
                                </p>
                                <input
                                    disabled={isViewed}
                                    name="date"
                                    type="date"
                                    // min={new Date().toISOString().split('T')[0]}
                                    value={formData?.date?.split('T')[0] || new Date().toISOString().split('T')[0]}
                                    onChange={handleChange}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Start Time <span className="text-red-500">*</span>
                                </p>
                                <input
                                    name="slotFrom"
                                    type="time"
                                    placeholder=''
                                    value={formData?.slotFrom?.split('T')[1]?.slice(0, 5) || null}
                                    onChange={handleChange}
                                    disabled={isViewed}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    End Time <span className="text-red-500">*</span>
                                </p>
                                <input
                                    name="slotTo"
                                    type="time"
                                    placeholder=''
                                    value={formData?.slotTo?.split('T')[1]?.slice(0, 5) || null}
                                    onChange={handleChange}
                                    disabled={isViewed}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Duty Doctor  <span className="text-red-500">*</span>
                                </p>
                                <select disabled={isViewed} onChange={handleChange} value={formData?.dutyDoctorId} name="dutyDoctorId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                ><option selected >Select Duty Doctor</option>

                                    {
                                        docAvailable?.map((doc) => <option key={doc.id} selected={doc?.id == formData?.dutyDoctorId} className="h-20 rounded-none bg-cyan-800 bg-opacity-55 " value={doc.id}> {doc?.displayName?.toUpperCase()}</option>)
                                    }


                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Specialist Doctor
                                </p>
                                <select disabled={isViewed} onChange={handleChange} value={formData?.specialistDoctorId} name="specialistDoctorId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                ><option selected >Select Specialist</option>
                                    {console.log(docAvailable, '11111111111111111111')}
                                    {
                                        docAvailable?.filter((doc) => doc?.roleId == '15' && doc.id != formData.dutyDoctorId)?.map((doc) => <option key={doc.id} selected={doc?.id == formData?.specialistDoctorId} className="h-20 rounded-none bg-cyan-800 bg-opacity-55 " value={doc.id}> {doc?.displayName?.toUpperCase()}</option>)
                                    }


                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Chair No  <span className="text-red-500">*</span>
                                </p>
                                <select disabled={isViewed} onChange={handleChange} value={formData?.chairId} name="chairId" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option>Select Chair No </option>
                                    {
                                        chairAvailable?.map((doc) => <option key={doc.id} selected={doc?.id == formData?.chairId} className="h-20 rounded-none bg-cyan-800 bg-opacity-55 " value={doc.id}> {doc.displayName?.toUpperCase()}</option>)
                                    }

                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                            </label>
                        </div>


                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Dental Assistant
                                </p>
                                <select disabled={isViewed} onChange={handleChange} value={formData?.dentalAssistant} name="dentalAssistant" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                > <option>Select assistant</option>
                                    {
                                        asstAvailable?.map((doc) => <option key={doc.id} selected={doc?.id == formData?.dentalAssistant} className="h-20 rounded-none bg-cyan-800 bg-opacity-55 " value={doc.id}> {doc.displayName?.toUpperCase()}</option>)
                                    }


                                </select>
                            </label>
                        </div>


                    </div>

                    <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                        Medical Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden p-4">
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Chief Complaints
                                </p>
                                <input
                                    name="chiefComplaint"
                                    type="text"
                                    placeholder="+ Add New Chief Complaints"
                                    value={formData.chiefComplaint}
                                    readOnly={isViewed}
                                    onChange={(e) => { handleChange(e); setComplaintVisible(true) }}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />



                                {
                                    C_Complaint && complaintListVisible && C_Complaint.length > 0 && C_Complaint?.filter((fil) => formData.chiefComplaint ? fil.complaintName?.toLowerCase()?.includes(formData.chiefComplaint?.toLowerCase()) : fil)?.map((item, index) => {
                                        return (
                                            <li className='cursor-pointer' onClick={() => { setFormData((prev) => ({ ...prev, chiefComplaint: item.complaintName })); setComplaintVisible(false) }} defaultValue={index === 0 ? true : false} key={item.complaintName} value={item.complaintName}>{item?.complaintName}</li>
                                        )
                                    })
                                }
                            </label>
                        </div>

                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Medical History
                                </p>
                                <input
                                    name="medicalHistory"
                                    type="text"
                                    placeholder="+ Add New Medical History"
                                    value={formData?.medicalHistory}
                                    onChange={handleChange}
                                    readOnly={isViewed}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                    </div>
                    <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                        Other Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden p-4">
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Patient Group
                                </p>
                                <input
                                    name="patientGroup"
                                    type="text"
                                    placeholder=""
                                    readOnly={isViewed}
                                    className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                />
                            </label>
                        </div>
                        <div className=" ">
                            <label>
                                <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                    Refered By
                                </p>
                                <select value={formData?.referedBy} disabled={isViewed} name="referedBy" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                >
                                    <option>Select Refered by</option>
                                    <option value="DirectWalkIn">Direct Walk-in</option>
                                    <option value="otherDentist">Other Dentist</option>
                                    <option value="friends/collegue">Friend / Colleague</option>
                                </select>
                                {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                            </label>
                        </div>
                    </div>


                </div>
            </div>

            <div className="px-4 h-[5%]  8 py-4 flex justify-end space-x-3 border-t border-slate-100 dark:border-darkSecondary">
                <div className="flex gap-2">
                    {
                        <button
                            text="Cancel"
                            // className="border bg-red-300 rounded px-5 py-2"
                            className=" h-10  justify-center items-center gap-2 flex  bg-lightmodalBgBtn text-lightmodalbtnText hover:bg-lightmodalBgBtnHover hover:text-white  px-4 py-2 rounded"
                            onClick={() => closeModal()}
                        >
                            {/* <CancelIcon /> */}
                            Cancel
                        </button>
                    }

                    {
                        isViewed && (
                            <button
                                className={`h-10 w-24 flex  justify-center items-center gap-2 ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                                onClick={() => setIsViewed(false)}
                                isLoading={loading}
                            >
                                {/* <EditIcon />  */}
                                Edit
                            </button>

                        )
                    }
                    {
                        !isViewed && formData?.patientId?.length ? (
                            <button className={`h-10 flex justify-center items-center gap-2  ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                                onClick={handleSaveAppointment}
                                isLoading={loading}
                            >
                                {/* <AddUserIcon />  */}
                                {`${formData?.emploeeId ? "Update" : "Save"}`}
                            </button>

                        ) : !isViewed && !formData?.patientId?.length ?
                            <button className={`flex ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} h-10  justify-center items-center gap-2     px-4 py-2 rounded`}
                                onClick={() => createPatients(formData)}
                            >
                                {/* <AddUserIcon /> */}
                                Add user
                            </button> : ''
                    }


                </div>
            </div>


        </div>
    )
}

export default NewBooking 