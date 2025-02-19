import { useEffect, useState } from "react"
import getAllCertificate from "../services/certificate/getAllCertificate"
import postCreateCertificate from "../services/certificate/postCreateCertifcate"
import putUpdateCertificate from "../services/certificate/putupdateCertificate"
import toast from 'react-hot-toast';
import deleteCertificate from "../services/certificate/deleteCertificate";
import confirmAction from "../common/Toast/confirmAction";
import getcertificateBycertificateNumber from "../services/certificate/getcertificateBycertificateNumber";


const useCertificatehook = () => {
    const [certificateLIst, setCertificateList] = useState([])
    const [updateDataTable, setUpdateDataTable] = useState(1)
    const [selectedCertificate,setSeletedCertificate] = useState({
        _id: "",
        displayId: "",
        certificateNumber: "",
        goldFineness: 0,
        goldWeight: 0,
    })
    const mandateValue = ['certificateNumber', 'goldFineness', 'goldWeight']
    const [formData, setFormDate] = useState({
        _id: "",
        displayId: "",
        certificateNumber: "",
        goldFineness: 0,
        goldWeight: 0,
    })
    useEffect(() => {
        setUpdateDataTable(prev => prev + 1)
    }, [])
    useEffect(()=>{
        console.log(selectedCertificate,'selectedCertificate')
    },[selectedCertificate])




    const getCertificateLIst = async ({ page, rowPerPage, keyWord }) => {
        const result = await getAllCertificate({ page, rowPerPage, keyWord })

        const { data, totalDocs: totalDataCount } = result
        return { data, totalDataCount }
    }
    const createOrEditCertificate = async (inputData) => {
        const validateValue = mandateValue?.filter((val) => !inputData[val]?.length)
        if (validateValue.length) {
            setUpdateDataTable(prev => prev + 1)
            toast.error(`${validateValue?.join(',')} is missing `)
        }
        else {
            if (!inputData?._id?.length) {
                const result = await postCreateCertificate({ certificateNumber: inputData.certificateNumber, goldFineness: inputData.goldFineness, goldWeight: inputData.goldWeight })
                setUpdateDataTable(prev => prev + 1)
                if (result?.status) {
                    toast.success(result.message)
                    setFormDate((prev) => ({
                        ...prev,
                        _id: result?.data?._id
                    }))
                }
                else {
                    toast.error(result.message)
                }
            }
            else {
                const result = await putUpdateCertificate({ certificateNumber: inputData.certificateNumber, goldFineness: inputData.goldFineness, goldWeight: inputData.goldWeight, _id: inputData?._id })
                setUpdateDataTable(prev => prev + 1)
                if (result?.status) {
                    toast.success(result.message)
                    setFormDate((prev) => ({
                        ...prev,
                        _id: result?.data?._id
                    }))
                }
                else {
                    toast.error(result.message)

                }
            }
        }

    }
    const deleteCertificateById = async ({id,certificateNumber})=>{
        try {
            const confirmDelete = await confirmAction( `Delete certificate ${certificateNumber} `) 
            if(confirmDelete){
            const result = await deleteCertificate({id})
            if(result?.status){
                toast.success(result.message)
                setUpdateDataTable(prev => prev + 1)
            }
            else{
                toast.error(result.message)
            }
        }
        } catch (error) {
            toast.error(error.message)
            
        }

    }

    const viewCertificate= async ({certificateNumber})=>{
       try {
        const confirmView = await confirmAction(`View certificate ${certificateNumber}`)
        if (confirmView){
            const result = await getcertificateBycertificateNumber({certificateNumber})
            if (result?.status){
                toast.success(result?.message)
                return result?.data?.certificate
               

            }
            else{
                toast.error(result?.message)
                return  {
                    _id: "",
                    displayId: "",
                    certificateNumber: "",
                    goldFineness: 0,
                    goldWeight: 0,
                }
            }

        }
        

       } catch (error) {
        
       }
    }



    return { createOrEditCertificate, formData, getCertificateLIst, setFormDate, updateDataTable,deleteCertificateById,viewCertificate,selectedCertificate }
}



export default useCertificatehook