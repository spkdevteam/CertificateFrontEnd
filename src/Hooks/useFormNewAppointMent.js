import { useSelector } from "react-redux"
import loadAvailableSlot from "../services/appointment/loadAvailableSlot"

const useFormNewAppointMent = ()=>{
    const activeBranch = useSelector((state)=>state?.appointment?.branch)||''

    const slotAvailability =async  (slot)=>{
        
        const branchId = slot?.branchId?slot?.branchId: activeBranch || ''
        const chairId = slot?.Chair?._id||''
        const startTime = slot?.slotFrom
        const endTime = slot?.slotTo
        const bookingDate = slot?.seletedDate.split('T')[0]
        const doctorId = slot?.Doctor?._id||''
        const result = await loadAvailableSlot({branchId,chairId,startTime,endTime,bookingDate,doctorId})
      
        return result
    }




    return {slotAvailability}

}


export default useFormNewAppointMent