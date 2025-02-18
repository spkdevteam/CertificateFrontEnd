import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBookingData, updateBookingStatus } from "../store/appointmentStore"
import getdailyBookingNonSummarizedData from "../services/appointment/getdailyBookingNonSummarizedData.js"
import { bookingTemplate } from "../constant/bookingTemplate.js"

const useGetBookingData = () => {

    // const [bookingData,setBookingData] = useState([])
    const dispatch = useDispatch()
    const activeDate = useSelector((state) => state.appointment.activeDate) || new Date()?.toISOString()
    const activeBranch = useSelector((state) => state.appointment.branch)
    const updateBooking = useSelector((state) => state.appointment.updateBooking)

    const fetchData = async () => {
            dispatch(updateBookingStatus(true))
            dispatch(setBookingData({...bookingTemplate}))
            
            const result = await getdailyBookingNonSummarizedData({ bookingDate: activeDate?.split('T')[0], branchId: activeBranch })
            dispatch(setBookingData(result))
            dispatch(updateBookingStatus(false))
        
    }

    useEffect(() => {
        fetchData()
    }, [activeDate, activeBranch])


    useEffect(() => {
        if(updateBooking )fetchData()
    }, [updateBooking])

}

export default useGetBookingData