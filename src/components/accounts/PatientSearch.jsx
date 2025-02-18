import { useEffect, useState } from "react";
import RadioButton from "../../common/radioButton/RadioButton";
import useBranchHook from "../../Hooks/useBranchBook";
import useActivePatientSlice from "../../Hooks/useActivePatientSlice";
import useDynamicIcons from "../../Hooks/useDynamicIcons";
import { button } from "framer-motion/client";
import TaggifyElement from "../Taggify/TaggifyElement";
import TagifyElement from "./SelectInvoice";
import SelectInvoice from "./SelectInvoice";

const PatientSearch = ({ handleChange, includePrevious, setIncludePrevious, formData, outStanding = [], }) => {
    const getMyIcon = useDynamicIcons()
    const [focus, setFocus] = useState('')
    const { listActiveBranch } = useBranchHook()
    const { loadPatientDetails, loadPatientDetailsById } = useActivePatientSlice()
    const [initialInvoice, setInitialinvoice] = useState(formData?.invoice)

    const [patientList, setPatientList] = useState([])
    const [lockPatient, setLockPatient] = useState(false)
    const [branchList, setBranchList] = useState()
    const [patient, setPatient] = useState({
        firstName: '',
        _id: '',
        branchId: ''
    })
    const EmailIcon = getMyIcon('email')
    const PhoneIcon = getMyIcon('contact')
    const UndoIcon = getMyIcon('undo')

    const initialiseComponent = async () => {
        setPatientList(await loadPatientDetails({ branchId: formData?.branchId, searchValue: patient.firstName }))
        setBranchList(await listActiveBranch())
    }

    useEffect(() => {
        initialiseComponent()
    }, [])
    const loadActivePatient = async () => {
        const result = await loadPatientDetailsById({ patientId: formData?.partyId })
       
        setPatient((prev) => ({
            ...prev,
            firstName: result?.data?.firstName,
            _id: result?.data?._id,
            branchId: result?.data?.branch

        }))
    }
    useEffect(() => {
         
        if (formData?.partyId) loadActivePatient()
    }, [formData])

    const handlePatientSelection = (patient) => {

        setPatient((prev) => ({
            ...prev,
            _id: patient?._id,
            firstName: patient?.firstName,
            branchId: patient?.branch?._id
        }))
        handleChange({ target: { name: 'partyId', value: patient?._id } })
        handleChange({ target: { name: 'branchId', value: patient?.branch?._id } })

        setFocus('');
        setLockPatient(true)

    }





    const handlePatientSearch = async (e) => {
        const { name, value, id } = e.target
        console.log({ name, value, id }, '{ name, value, id }{ name, value, id }')
        setPatient((prev) => ({
            ...prev,
            [name]: value
        }))
        const temp = {
            target: {
                name: 'partyId',
                value: id
            }
        }
        handleChange(temp)
        setPatientList(await loadPatientDetails({ branchId: formData?.branchId, searchValue: patient.firstName }))

    }


    return (

        <div className="md:w-4/12 w-full  max-w-md p-5 border border-gray-600 border-opacity-30  text-xs rounded-md shadow-lg">
            <h2 className=" font-bold  mb-6 text-start">
                Patient details
            </h2>

            <div className=" mb-4">
                <label className=''>
                    <p className={`flex gap-4 mb-1 `}>
                        Branch <span className="text-red-500">*</span>
                    </p>
                    <select
                        value={formData?.companyId}
                        onChange={handleChange}
                        disabled={lockPatient}

                        name="branchId" className="w-full p-3   bg-white bg-opacity-5 outline-none   rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option className="dark:bg-darkSecondary" value="">--Select Branch--</option>
                        {
                            branchList && branchList.length > 0 && branchList.map((item) => {
                                return (
                                    <option className="dark:bg-darkSecondary" selected={patient?.branchId == item?._id} key={item._id} value={item._id}>{item?.name}</option>
                                )
                            })
                        }
                    </select>

                </label>
            </div>


            <div className="w-full relative justify-end items-center mb-4 ">
                <p className={`flex gap-4 mb-1 `}>
                    Patient  <span className="text-red-500">*</span>
                </p>
                <input
                    name="firstName"
                    type="text"
                    value={patient?.firstName}
                    id={patient?._id}
                    placeholder="Search..."
                    onChange={(e) => { handlePatientSearch(e); setFocus('firstName') }}
                    autoComplete="off"
                    readOnly={lockPatient}
                    className={`w-full p-3   bg-white bg-opacity-5 outline-none   rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                />
                {patient?._id ? <UndoIcon onClick={() => { setPatient((prev) => ({ ...prev, _id: null })); setFocus('firstName'); setLockPatient(false) }} className='absolute cursor-pointer end-0 p-1  text-red-900 w-5 h-5' /> : ''}

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





            <div className=" flex  flex-col     gap-2 justify-start items-center w-full ">
                <RadioButton status={includePrevious} onClick={setIncludePrevious} text="Previous " />

                <div className=" w-full">
                    <p className={`flex gap-4 mb-1 `}>
                        Invoices  <span className="text-red-500">*</span>
                    </p>
                    <div className="w-full  gap-2  outline-none flex flex-wrap  rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" >

                        {
                             
                        formData?.invoice?.map((item) => (<button className=" h-10 p-3  rounded-md bg-white  bg-opacity-5 "> {item?.displayId?.slice(item?.displayId?.length - 14)} </button>))
                        }
                    </div>
                </div>
                {
                    includePrevious ? <SelectInvoice close={()=>setIncludePrevious(false)} options={outStanding?.map((item) => ({ displayName: item?.displayId?.slice(item?.displayId?.length - 14) + ' (' + item?.balanceAmount + ' out of ' + item?.totalAmount + ')', id: item?.invoiceId }))} value={includePrevious ? formData.invoice?.map((item) => ({ displayName: item?.displayId?.slice(item?.displayId?.length - 14), id: item?.invoiceId })) : initialInvoice.invoice?.map((item) => ({ displayName: item?.displayId?.slice(item?.displayId?.length - 14), id: item?.invoiceId }))} onChange={handleChange} name='invoice' displayField='displayId' />
                        : ''
                }

            </div>





            {/* <div className="w-full mb-4 flex border  rounded-md gap-4 overflow-scroll mt-4 p-4">
                {outStanding && outStanding?.filter((bill) => { return !includePrevious ? bill.displayId == formData?.invoice[0]?.displayId : bill?.displayId }).map((bill) => {
                    console.log(includePrevious, bill.due && !isNaN(new Date(bill.dueDate)) && new Date(bill.dueDate).getTime() > Date.now(), 'my amount')
                    return 
                    
                    <div
                        className={`flex cursor-pointer justify-center flex-col px-5 w-24 border items-center bg-white bg-opacity-5 text-white rounded-md p-2 ${bill.due && !isNaN(new Date(bill.due)) && new Date(bill.due).getTime() > Date.now()
                                ? "bg-red-800"
                                : ""
                            }`}
                    >
                        <p>{bill?.displayId?.slice((bill?.displayId?.length) - 14)}</p>
                        <p> {parseFloat(bill?.balanceAmount)?.toFixed(2)} / {parseFloat(bill?.totalAmount)?.toFixed(2)}</p>

                    </div>
                }
                )} 
            </div>*/}




        </div>

    )
}

export default PatientSearch