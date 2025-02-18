import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import procedureService from "../services/procedure/procedure.service"
import toast from "react-hot-toast"
import useActivePatientSlice from "./useActivePatientSlice"


const useProcedureHook = () => {
    const [subMenuAccessList, setSubMenuAccessList] = useState({})
    const { activePatient, activeBranch } = useActivePatientSlice()
    const { capability: capabilityarray, isCapability } = useSelector((state) => state.capabilitySlice)
    const [updateprocedureList, setUpdateProcedureList] = useState(1)
    const [toggleWord, setToggleWord] = useState(false);
    useEffect(() => {
        const navMenu = capabilityarray.map((item) => {
            const { menu } = item
            const subMenu = menu.map((value) => {
                if (value.name == "Chair") {
                    const { subMenus } = value
                    setSubMenuAccessList(subMenus)
                }
            })
        })

    }, [capabilityarray])
    useEffect(() => {
        //   setUpdateProcedureList((prev)=>prev+1)
    }, [updateprocedureList])



    const handleActive = async (row) => {
        if (subMenuAccessList?.update?.access == false) {
            toast.error("You Don't have access to Update")
        } else {
            const id = row._id;
            setToggleWord(false)
            // setShowLoadingModal(true)
            let status = "1"
            row.isActive ? (status = "0") : (status = "1")
            try {
                const response = await procedureService.toggleProcedure({ procedureId: id, keyWord: '', page: 1, perPage: 10 })
                toast.success(response?.data?.message)
                // setShowLoadingModal(false)
                setUpdateProcedureList((prev) => prev + 1)
            } catch (error) {
                // setShowLoadingModal(false)
                console.log("Error While active and inactive", error);
            }
        }

    }

    const fetchPriscriptionData = async ({ page = 0, keyWord = '', perPage = 10, branchId = '' }) => {

        try {
            console.log(page, perPage, branchId, 'page, nextValue, perPage, branchId------------------------ ')
            const response = await procedureService.getAllProcedures({ page, keyword: keyWord, perPage, branchId: branchId })
            console.log(response?.result, 'respon-----ddddddddddddddddddddddddddddddddddd------------seresponseresponse')
            return { currentData: response?.result, totalDataCount: response?.count }
            // return { data: [], totalDataCount: 0}
        } catch (error) {
            return { data: [], totalDataCount: 0 }
        }
    }








    return { handleActive, updateprocedureList, fetchPriscriptionData }
}


export default useProcedureHook