import { useDispatch, useSelector } from "react-redux"
import { updateMonthlyBookigData, updateWeeklyBookigData } from "../store/appointmentStore"
import { useEffect, useState } from "react"
import getDatewiseBookingSummaryByPeriod from "../services/appointment/getDatewiseBookingSummaryByPeriod"

const useGetMonthlyBookingSummary = ()=>{
    try {

        const [bookings,setBookings] = useState([])
        const dispatch = useDispatch()
        const activeAppointment = useSelector((state)=>state.appointment)
        const fromDate = activeAppointment?.activeMonthStart
        const toDate = activeAppointment?.activeMonthEnd
        const branch = activeAppointment?.branch
        const loadBookings =async ()=>{
            console.log( 'my result will come here  ')
            
              const result =await getDatewiseBookingSummaryByPeriod({fromDate:new Date(fromDate),toDate:new Date(toDate),branchId:branch})
              console.log(result,'my result is printing here ')
              setBookings(result?.data)
              dispatch (updateMonthlyBookigData(result?.data))
        }


        useEffect(()=>{
            console.log('hello am here ')
           if(activeAppointment.view == 'Month' && fromDate && toDate && branch?.length ) loadBookings()
        },[])



        console.log(result,'my result ')
        
    } catch (error) {
        
    }
}

export default useGetMonthlyBookingSummary