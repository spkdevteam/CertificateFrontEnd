import { useSelector } from "react-redux"
import employeeService from "../services/employeeService/employee.Service"
import useActivePatientSlice from "./useActivePatientSlice"
import getBranchById from "../services/branchService/getBranchById"

const useBranchHook = () => {
    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    /*
        read active user from current user 
    */ 
    const branch = (currentUser?.role?.id == 1 || currentUser?.role?.id == 2 || currentUser?.role?.id == 3 || currentUser?.role?.id == 15) ? "" : currentUser?.branch
    
    const listActiveBranch =async  () => {
        if (branch)
            {
            const responce = await getBranchById(branch)
            console.log(responce,'responce')
            return responce
        }
        else {
            const response = await employeeService.getActiveBranches()
            return response?.listOfBranches
        }
    }



        return { listActiveBranch }
    }
    export default useBranchHook