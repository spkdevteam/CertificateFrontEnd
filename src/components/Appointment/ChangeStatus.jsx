import { useEffect, useState } from "react"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import changeBookingStatus from "../../services/appointment/changeBookingStatus"
import createToken from "../../services/appointment/createToken"
import toast from "react-hot-toast"


const ChangeStatus = ({ value, closeModal, onChange }) => {
    const getMyIcon = useDynamicIcons()
    const OnRadioIcon = getMyIcon('radioSeleted')
    const OffRadioIcon = getMyIcon('radioUnchecked')
    const VerifiedIcon = getMyIcon('verified')
    const CloseIcon = getMyIcon('close')
    const [formData, setFormData] = useState(value)
    const [selected, setSelected] = useState(value?.status)


    const updateAppointmentStatus = async (status) => {
        const result = await changeBookingStatus({ appointmentId: formData?._id, status: status, branchId: formData?.branchId })
        if (result.status) {
            toast.success(result?.message)
            onChange()
        }
        console.log(result)
        setSelected(result?.data?.status)
        closeModal(false)

    }
    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const createBookigToken = async () => {
        const result = await createToken(
            {
                branchId: formData?.branchId?._id,
                appointmentid: formData?._id,
                date: formData?.date
            }
        )

        if (result) {

            onChange()
        }

    }

    useEffect(() => {
        
        setSelected(value.status)
        setFormData(value)
    }, [value])

    useEffect(() => {

        if (selected == 'Arrived') {
            createBookigToken()
        }
    }, [selected])


    // ${option == selected ? 'bg-cyan-700 bg-opacity-55' : ''} 

    const status = ['Scheduled', 'Arrived', 'ChairReady', 'In-Progress', 'Completed', 'Cancelled', 'Rescheduled']
    return (
        <div className="w-full h-full flex gap-4  flex-col  justify-between items-center    text-cyan-800 dark:bg-darkSecondary dark:text-cyan-300 pb-5 ">
            <div className="flex items-center p-2 w-full border-b h-12 border-gray-500 border-opacity-50 font-semibold  bg-opacity-45 justify-between  ">
                Change Status
                <CloseIcon onClick={() => closeModal(false)} className='w-5 h-5 cursor-pointer ' />
            </div>
            <div className="flex items-center   w-full p-2 h-240  bg-opacity-45 justify-between  ">
                {
                    <select onChange={(e) => handleChange(e)} className={`w-full text-cyan-800 dark:bg-darkSecondary dark:text-cyan-300 flex border border-opacity-40  focus:outline-none hover:bg-white hover:bg-opacity-20   border-gray-400 rounded-md  gap-4 justify-start px-4 items-center h-10  `} name="" id="">
                        {status?.map((option) => (
                            <option selected={option == selected} className={` w-full flex hover:bg-white text-cyan-800 dark:bg-darkSecondary dark:text-cyan-300 hover:bg-opacity-20     border-white  gap-4 justify-start px-4 items-center h-10  `}>
                                {option}
                            </option>))
                        }

                    </select>
                }
            </div>
            <div className="flex gap-4 border-t w-full p-2 justify-end border-gray-500 border-opacity-50 ">

                <button onClick={() => closeModal(false)} className="flex  w-20 bg-gray-200 h-10 rounded-md text-gray-700 justify-center items-center">  Close  </button>
                <button onClick={() => updateAppointmentStatus(selected)} className="flex  w-40 h-10 text-white bg-cyan-600 rounded-md justify-center items-center" > Update Status </button>

            </div>        </div>
    )
}

export default ChangeStatus