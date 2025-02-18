import { useSelector } from "react-redux"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import { useEffect } from "react"


const Booking = ({booking})=>{
const getMyIcon = useDynamicIcons()
const Users = getMyIcon('users')
const searchValue = useSelector((state)=>state.appointment.searchKey)
const isInSearch =  searchValueIncludes(booking,searchValue)
function searchValueIncludes(obj, targetValue) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively search in nested objects
        if (searchValueIncludes(obj[key], targetValue)) {
          return true;
        }
      } else if (typeof obj[key] === "string" && obj[key].includes(targetValue)) {
        return true;
      }
    }
    return false;
  }

  useEffect(()=>{
    console.log(booking,'koooko')
  },[booking])

    return(
        <div className={`h-full gap-2 p-2 flex-nowrap overflow-hidden text-sm font-thin  flex w-full    rounded-md  items-center justify-start 
          ${isInSearch && searchValue.length ?'bg-blue-500'
          :booking.status=="Scheduled"?'bg-green-500'
          :booking?.status=="Arrived"?'bg-purple-900 text-purple-100'
          :booking?.status=="Cancelled"?'bg-pink-900 text-pink-100'
          :booking?.status=="Completed"?'bg-cyan-900 text-cyan-100'
          :booking?.status=="Rescheduled"?'bg-gray-900 text-gray-100'
          :booking?.status=="ChairReady"?'bg-indigo-900 text-indigo-100'
          :booking?.status=="In-Progress"?'bg-yellow-900 text-yellow-100'
          : '' }  `}>
            <Users className='h-5 w-5 '/>  { booking?.slotFrom.split('T')[1].slice(0,5)}-{booking?.slotTo.split('T')[1].slice(0,5)+','+booking?.patient?.firstName?.toUpperCase()||'' + '     '} 
        </div>
    )
}
export default Booking