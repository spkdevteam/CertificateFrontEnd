import { useDispatch } from "react-redux"
import fetchPatientBookingDetails from "../services/appointment/fetchPatientBookingDetails.js"
import filterBookingDetails from "../services/appointment/filerBookigDetails.js"
import getdailyBookingWithPagination from "../services/appointment/getDailyBookingwithPagination.js"
import { pushComponentToModal, switchModal } from "../store/handleModal.js"
import useActivePatientSlice from "./useActivePatientSlice.js"


const useAppointmentHook = () => {
    const dispatch = useDispatch()
    const { loadPatientDetailsById,activeUser,  activePatient , activeBranch ,loadPatientDetails,patientList,getBranchDetails } = useActivePatientSlice()
    const getpatientBookingDetails = (patientId) => {
        // return async ({ page=1, rowPerPage=100, keyword='' }) => {
        //     const result = await getdailyBookingWithPagination({ patientId, page, keyword: keyword, perPage:rowPerPage, bookingDate: new Date().toISOString().split('T')[0] })
        //     const { currentData, totalDataCount } = result?.data
        //     console.log(totalDataCount,currentData, 'resultresultresultresult')
        //     return { data: currentData, totalDataCount: totalDataCount }
        // }
        return () => { }
    }

    const getPeriodicAppointmentDetails = ({ fromDate, toDate, branchId, patientId }) => {
        return async ({ page, keyword, rowPerPage }) => {
            try {
                console.log({ fromDate, toDate, page, keyWord: keyword, perPage: rowPerPage, branchId, patientId })
                const response = await fetchPatientBookingDetails({ fromDate, toDate, page, keyWord: keyword, perPage: rowPerPage, branchId, patientId })

                return { data: response?.data, totalDataCount: response?.data?.length }
            } catch (error) {

            }
        }
    }

    const openAppointmentForCurrentPatient = () => {
       
        const temData = {
            branchId: { _id: activePatient?.branch },
            patientId: {
                _id: activePatient?._id,
                firstName: activePatient?.firstName,
                lastName: activePatient?.lastName,
                email: activePatient?.email,
                gender: activePatient?.gender,
                bloodGroup: activePatient?.bloodGroup,
                phone: activePatient?.phone,
                age: activePatient?.age,
            },
            date: new Date()?.toISOString(),
            dutyDoctorId: { _id: (activeUser?.roleId ==3 ||activeUser?.roleId ==15 )?activeUser?._id:null   },
        }
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({ element: 'NewBooking', data: temData }))
    }




    return { getpatientBookingDetails, getPeriodicAppointmentDetails, openAppointmentForCurrentPatient }
}

export default useAppointmentHook