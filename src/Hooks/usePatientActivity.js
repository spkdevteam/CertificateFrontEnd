import { useDispatch } from "react-redux"
import useHandleModal from "./useHandleModal"

const usePatient =  ()=>{
    const dispatch = useDispatch()
    const {openPatientSearchModal} = useHandleModal()
    
    
    

    return{openPatientSearchModal}
}
 

export default usePatient