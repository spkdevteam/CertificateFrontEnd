import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


import getBranchById from "../services/branchService/getBranchById"
import searchPatient from "../services/appointment/searchPatient"
import getPatientDetailsById from "../services/appointment/getPatientDetailsById"


const useActivePatientSlice = () => {
    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    const patientData = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    const [branchDetails, setBranchDetails] = useState({})
    const [patientList,setPatientList] = useState([])
    useEffect(() => {
        getBranchDetails()
    }, [patientData, currentUser])

    const getBranchDetails =async () => {
        
        const branch = patientData?._id ? patientData?.branch : (currentUser?.role?.id == 1 || currentUser?.role?.id == 2 || currentUser?.role?.id == 3 || currentUser?.role?.id == 15) ? "" : currentUser?.branch
        if (branch) {
            
            const result = await getBranchById(typeof(branch) == "object"?branch?._id:branch )
           
            setBranchDetails(result.data)
            return result.data
        }

    }

    const loadPatientDetails = async ({searchValue,branchId}) => {
        const result = await searchPatient({ page: 1, keyword: searchValue, perPage: 100, isAdmin: true, branchId:branchId })

         setPatientList(result?.data?.patients )
         return patientList
    }

    
    const loadPatientDetailsById = async ({patientId}) => {
         
        const result = await getPatientDetailsById({patientId:patientId })

         
         return result
    }

    return { loadPatientDetailsById,activeUser: currentUser, activePatient: patientData, activeBranch: branchDetails,loadPatientDetails,patientList,getBranchDetails }
}

export default useActivePatientSlice