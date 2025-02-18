import { useDispatch, useSelector } from "react-redux"
import loadBookingByPeriod from "../services/appointment/loadBookingByPeriod"
import { updateWeeklyBookigData } from "../store/appointmentStore"
import { useEffect, useState } from "react"

const useGetWeeklyBookingData = ()=>{
    try {

        console.log('hello..............')
        const [bookings,setBookings] = useState([])
        const dispatch = useDispatch()
        const activeAppointment = useSelector((state)=>state.appointment)
        const fromDate = activeAppointment?.fromDate
        const toDate = activeAppointment?.toDate
        const branch = activeAppointment?.branch
        const loadBookings =async ()=>{
            console.log( 'my result will come here  ')
            
              const result =await loadBookingByPeriod({fromDate:fromDate,toDate:toDate,branchId:branch})
              console.log(result,'my result is printing here ')
              setBookings(result?.data)
              dispatch (updateWeeklyBookigData(result?.data))
        }
        useEffect(()=>{
           if(activeAppointment.view == 'Week' && fromDate && toDate && branch?.length ) loadBookings()
        },[activeAppointment.view,activeAppointment.fromDate,activeAppointment.toDate,activeAppointment.branch])



        console.log(result,'my result ')
        
    } catch (error) {
        
    }
}

export default useGetWeeklyBookingData