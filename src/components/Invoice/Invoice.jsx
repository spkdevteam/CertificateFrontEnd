import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import { useDispatch, useSelector } from 'react-redux';
import calculateTimeSlot from '../../helper/CalculateTimeSlot';
import { div } from 'framer-motion/client';
import MedicineCourse from '../priscription/MedicineTile';
import AddMedicineToKart from '../priscription//AddMedicineToKart';
import { cyan } from '@mui/material/colors';
import { cancelEditPrescription, editMedicinePrescription, handlePrscriptionChange } from '../../store/reducer/currentPatient/currentPatient';
import useDynamicIcons from '../../Hooks/useDynamicIcons';
import savePriscription from '../../services/priscription/savePriscription';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import getBranchById from '../../services/branchService/getBranchById';
import getParticularCaseSheet from '../../services/appointment/getActiveCaseSheet';
import getPatientDetailsById from '../../services/appointment/getPatientDetailsById';
import getPrescriptionById from '../../services/appointment/getPrescriptionById';
import useDarkmode from '../../Hooks/useDarkMode';
import generatePDF from 'react-to-pdf';

function InvoicePage() {
    const dispatch = useDispatch()
    const [activeCaseSheet, setActiveCaseSheet] = useState({})
    const getMyIcon = useDynamicIcons()
    const EditIcon = getMyIcon('edit')
    const PrintIcon = getMyIcon('print')
    const CancelIcon = getMyIcon('close')
    const [prescription, setPrescription] = useState({})
    const [patientData, setPatientData] = useState();
    const navigate = useNavigate()
    const [branch, setBranch] = useState()
    const location = useLocation();
    const { newData } = location.state || {};
    const [showCaseDetails, setShowCaseDetails] = useState(false)
    const [isDark] = useDarkmode()
    const printRef = useRef()



    const fetchBranchDetails = async (branchId) => {
        const result = await getBranchById(branchId)
        setBranch(result?.data)
    }

    const fetchCaseSheet = async (caseSheetId) => {
        const result = await getParticularCaseSheet(caseSheetId)
        setActiveCaseSheet(result?.data)
    }
    const fetchPatientById = async (patientId) => {
        const result = await getPatientDetailsById({ patientId: patientId })
        setPatientData(result?.data)
    }
    const fetchPrescriptionDetails = async (prescriptionId) => {
        const result = await getPrescriptionById({ prescriptionId: prescriptionId })
        setPrescription(result?.data )
    }
    useEffect(() => {
        fetchBranchDetails(newData?.branchId)
        fetchCaseSheet(newData?.caseSheetId)
        fetchPrescriptionDetails(newData?._id)
        fetchPatientById(newData.patientId)
    }, [newData])





    const handleCancel = () => {
        dispatch(cancelEditPrescription())
        navigate('/patientDetail/prescription')
    }
    const handleEditPrscription = () => {
        if(typeof(newData?.doctorId) =='object' ) {
            console.log('yes')
            newData.doctorId = newData?.doctorId?._id
        }
        console.log(newData, typeof(newData?.doctorId) ,'myNewData-----------------------')
        navigate('/patientDetail/editPriscription', { state: { newData: newData } })
    }
    const handlePrintView = () => {
        navigate('/previewPrescription', { state: { prescription, activeCaseSheet, patientData, branch } })
    }







    return (
        <div className=' w-full h-full bg-yellow-900'>
           
        </div>
    )
}

export default InvoicePage