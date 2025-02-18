import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { pushComponentToModal, switchModal } from "../store/handleModal"
import billSummary from "../constant/invoiceTemplate"
import { setPatientDetail } from "../store/reducer/currentPatient/currentPatient"
import getBillItemDetails from "../services/inventory/getBillItemDetails"
import updateBillItemDetails from "../services/inventory/updateBillItemDetails"
import createTempNewInvoice from "../services/inventory/createTempNewInvoice"
import saveTempInvoicetoConfirm from "../services/inventory/createNewInvoice"
import useActivePatientSlice from "./useActivePatientSlice"
import deleteItemFromKart from "../services/inventory/deleteItemFromKart"


const useInvoiceHooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {activeUser, activePatient, activeBranch,} = useActivePatientSlice()

    const handleEditInvoice = (billSummary) => {
        console.log(billSummary,'------------------<<<<<<<<<<<<<<<<<<<<<<<<<<')
        navigate('/patientDetail/editInvoice', { state: billSummary })
    }

    const handleViewinvoiceInvoice = (billSummary) => {
        navigate('/viewInvoice', { state: billSummary })
    }
    const handleViewinvoiceInModal = (billSummary) => {
        alert('hello')
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({ element: 'invoiceView', data: billSummary }))
    }
    const handleDeleteInvoice = (billSummary) => {

        dispatch(switchModal(true))
        dispatch(pushComponentToModal({ element: 'invoiceView', data: billSummary }))
    }
    const createInvoice = (patient) => {
        /*
        function navigates to Edit invoice page , if there is no patient detail 
        , popup for patient search will display 
        */
        const temp = { ...billSummary }
        temp.recipientDetails = patient
        if(patient) dispatch(setPatientDetail(patient))
        navigate('/patientDetail/editInvoice', { state: billSummary })
    }

    const fetchBillDetails = (billnumber) => {
        return async ({ page=1, rowPerPage=100, keyword='' }) => {
            const result = await getBillItemDetails(billnumber)
            const { currentData, totalDataCount } = result?.data
            console.log(totalDataCount,currentData, 'resultresultresultresult')
            return { data: currentData, totalDataCount: totalDataCount }
        }
    }

    const deleteItemFromKartHook =async ({ invoiceId,billKartId}) => {
            const result = await deleteItemFromKart({invoiceId,billKartId })
            return result
    
        }

     

    const openInvoiceList = ()=>{
        navigate('/patientDetail/invoice')
    }

    const updateItemsToKart = async ({ invoice_id, BilledItemDetails }) => {
        console.log(invoice_id, BilledItemDetails, 'billnumber,BilledItemDetails')
        const result = await updateBillItemDetails({ invoice_id, BilledItemDetails })
        return result

    }
    const CraetTemInvoice = async ({ invoiceDetails }) => {
        console.log(invoiceDetails,'value cheking input for create Temp invoice ')
        const result = await createTempNewInvoice({ invoiceDetails })
        return result

    }

    const handleSaveInvoice = async ({ billSummary }) => {
        console.log(billSummary, 'billnumber,BilledItemDetails')
        const result = await saveTempInvoicetoConfirm({ billSummary })
        console.log(result,'resultresultresultresultresult')
        return result
    }





    return {openInvoiceList,deleteItemFromKartHook, updateItemsToKart,CraetTemInvoice,handleSaveInvoice, handleEditInvoice, handleViewinvoiceInvoice, handleViewinvoiceInModal, handleDeleteInvoice, createInvoice, fetchBillDetails }

}

export default useInvoiceHooks