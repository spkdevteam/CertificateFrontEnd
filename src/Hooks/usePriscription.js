import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { pushComponentToModal, switchModal } from "../store/handleModal"
import getParticularCaseSheet from "../services/appointment/getActiveCaseSheet"
import getPrescriptionById from "../services/appointment/getPrescriptionById"
import getPatientDetailsById from "../services/appointment/getPatientDetailsById"
import getBranchById from "../services/branchService/getBranchById"
import deletePrescription from "../services/priscription/deletePrescription"
import { toast } from "react-toastify"
import confirmAction from "../common/Toast/confirmAction"
import savePriscription from "../services/priscription/savePriscription"
import { useState } from "react"
import useHandleModal from "./useHandleModal"
const validatPrescription = ['branchId', 'patientId', 'doctorId', 'drugArray']
 

const usePriscriptionHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {closeModal}=useHandleModal()
    
    const handleView = async (row) => {
        console.log(row?._id, row?.patientId,row?.caseSheetId?._id,row?.branchId?._id, 'is old row')
        dispatch(pushComponentToModal({ element: 'Loading', data: {} }))
        dispatch(switchModal(true))
        const preScriptionResult = await getPrescriptionById({ prescriptionId: row?._id })
        const Patientresult = await getPatientDetailsById({ patientId: row?.patientId })
        const caseSheetresult = row?.caseSheetId?._id ? await getParticularCaseSheet(row?.caseSheetId?._id) : {}
        const branchresult = await getBranchById(row?.branchId?._id)
        const activeCaseSheet = caseSheetresult?.data
        const branch = branchresult.data
        const ativePatientData = Patientresult?.data
        const myPrescription = preScriptionResult?.data
        dispatch(switchModal(false))

        navigate('/previewPrescription', { state: { prescription: myPrescription, activeCaseSheet, patientData: ativePatientData, branch } })
    }
    const previewPrescription = handleView



    const handleEdit = async (row) => {
        const newData = {
            branchId: row?.branchId?._id,
            buId: row?.buId,
            patientId: row?.patientId,
            doctorId: row?.doctorId?._id,
            drugArray: row?.drugArray,
            additionalAdvice: row?.additionalAdvice,
            nextVisitDate: row?.nextVisitDate,
            nextVisitDiscription: row?.nextVisitDiscription,
            caseSheetId: row?.caseSheetId?._id,
            _id: row?._id
        }
        navigate('/patientDetail/editPriscription', { state: { newData: newData } })
    }

    const handleDeletePriscription = async (prescriptionId) => {
        const confirm = await confirmAction('Delete the selected prescription ? ')
        console.log(confirm,'confirm')
        if (confirm) {


            const result = await deletePrescription(prescriptionId)
            if (result.status) {
                toast.success(result.message)
            }
            else {
                toast.error(result.message
                )
            }
        }

    }

    const saveUpdatePriscription = async (prescription) => {
        dispatch(pushComponentToModal({ element: 'Loading', data: {} }))
        dispatch(switchModal(true))

        const isValid = validatPrescription?.filter((item) => {
            return !prescription[item]?.length
        })
        if (isValid?.length) {
            dispatch(switchModal(true))
            toast.error(`${isValid.join(',').charAt(0)?.toUpperCase()}${isValid.join(',').slice(1).toLowerCase()} ${isValid.length == 1 ? 'is' : 'are'} empty`)
            closeModal()
        }
        else {



            const newData = {
                ...(prescription?._id ? { _id: prescription?._id } : {}),
                displayId: prescription?.displayId,
                branchId: prescription?.branchId,
                buId: prescription?.buId,
                patientId: prescription?.patientId,
                doctorId: prescription?.doctorId,
                caseSheetId: prescription?.caseSheetId || null,
                drugArray: prescription?.drugArray,
                additionalAdvice: prescription?.additionalAdvice,
                nextVisitDate: prescription?.nextVisitDate,
                nextVisitDiscription: prescription?.nextVisitDiscription,
                nextVisitTime: prescription?.nextVisitTime,

            }




            const result = await savePriscription(newData)
            return result
        }
            
    }

 



    return { handleView, handleEdit ,handleDeletePriscription ,previewPrescription,saveUpdatePriscription}
}

export default usePriscriptionHook