import { useEffect, useState } from "react"
import useActivePatientSlice from "./useActivePatientSlice"
import getAllActiveChair from "../services/chairService/getAllActiveChairs"


const useChairHook = ()=>{
     const {activeBranch } =  useActivePatientSlice()
     const [chairList,setChairList] = useState([])

    
useEffect(()=>{
    console.log(activeBranch)
},[activeBranch])


    const getChairList =async  ()=>{
        const chairList =await getAllActiveChair({page:1,perPage:1000,isAdmin:true,branchId:null,keyword:''})
        setChairList(chairList?.data?.chairs)
    }




    return {getChairList,chairList}
}

export default useChairHook