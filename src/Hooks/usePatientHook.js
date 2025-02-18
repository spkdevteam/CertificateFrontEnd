import { useDispatch } from "react-redux"
import getPatientDetailsById from "../services/appointment/getPatientDetailsById"
import { setPatientDetail } from "../store/reducer/currentPatient/currentPatient"

const usePatientHook = ()=>{
      const dispatch = useDispatch()



    const updateActivePatientStoreById = async (patientId) => {
        const result = await getPatientDetailsById({ patientId: patientId })
        dispatch(setPatientDetail(result?.data))
    }



    return {updateActivePatientStoreById}
}

export default usePatientHook