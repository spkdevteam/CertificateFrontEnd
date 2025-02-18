import { useDispatch } from "react-redux"
import { pushComponentToModal, switchModal } from "../store/handleModal"
 


const useHandleModal = ()=>{
    const dispatch = useDispatch()
    
    const closeModal = ()=>{
        dispatch(switchModal(false))
    }
    const openPatientSearchModal = ()=>{
       
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({element:'PaientForInvoice' ,data:{title:'Create invoice'}}))

    }
    const openPaymentScreen = ({billSummary})=>{
       
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({element:'paymentInterface' ,data:{title:'Lets pay ',billSummary:billSummary}}))
        
    }

    const openEmptyModal = ()=>{
       
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({element:'Empty' ,data:{title:'Empty',billSummary:''}}))

    }

    return {closeModal,openPatientSearchModal,openPaymentScreen,openEmptyModal}

}

export default useHandleModal