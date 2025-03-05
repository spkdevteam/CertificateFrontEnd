import { useEffect, useState } from "react"
import getAllCertificate from "../services/certificate/getAllCertificate"
import postCreateCertificate from "../services/certificate/postCreateCertifcate"
import putUpdateCertificate from "../services/certificate/putupdateCertificate"
import toast from 'react-hot-toast';
import deleteCertificate from "../services/certificate/deleteCertificate";
import confirmAction from "../common/Toast/confirmAction";
import getcertificateBycertificateNumber from "../services/certificate/getcertificateBycertificateNumber";
import getCertificateBySuggestion from "../services/certificate/getCertificateBySuggestion";
import saveMultipleCertificate from "../services/certificate/saveMultipleCertificate";


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
        console.log(updateDataTable,'updateDataTableupdateDataTableupdateDataTableupdateDataTableupdateDataTable')
    },[updateDataTable])
     
    useEffect(() => {
        if (selectedCertificate && Object.keys(selectedCertificate).length > 0) {
            console.log(selectedCertificate, 'selectedCertificate');
        }
    }, [selectedCertificate]);
    




    const getCertificateLIst = async ({ page, rowPerPage, keyWord }) => {
        const result = await getAllCertificate({ page, rowPerPage, keyWord })
        

        const { data, metaData } = result

        return { data, totalDataCount:metaData?.totalDocs }
    } 

    const createOrEditCertificate = async (inputData) => {
        const validateValue = mandateValue?.filter((val) => !inputData[val]?.length)
        if (validateValue.length) {
            toast.error(`${validateValue?.join(',')} is missing `)
            return;
        }
    
        let result;
        if (!inputData?._id?.length) {
            result = await postCreateCertificate({
                certificateNumber: inputData.certificateNumber, 
                goldFineness: inputData.goldFineness, 
                goldWeight: inputData.goldWeight
            });
        } else {
            result = await putUpdateCertificate({
                certificateNumber: inputData.certificateNumber, 
                goldFineness: inputData.goldFineness, 
                goldWeight: inputData.goldWeight, 
                _id: inputData?._id
            });
        }
    
        if (result?.status) {
            toast.success('asasasass');
            setUpdateDataTable(prev => prev + 1); // ✅ This should trigger table refresh
        } else {
            toast.error(result.message);
        }
    };
    
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


    const viewCertificate = async ({ certificateNumber }) => {
        try {
            if (!certificateNumber) return null; // Prevents running on empty input

            const confirmView =  true
            

            if (!confirmView) return null;
    
            const result = await getcertificateBycertificateNumber({ certificateNumber });
    
    
            if (result?.status && result?.data?.certificate) {
                return result.data.certificate;
            } else {
                toast.error(`Certificate ${certificateNumber} not found!`);
                return null;
            }
        } catch (error) {
        
            toast.error(error.message);
            return null;
        }
    };

    const searchCertificate=async({searchKey})=>{
        const response=await getCertificateBySuggestion({searchKey})
        return response

    }

    const multipleCertificate=async({data})=>{

        try {
            const response=await saveMultipleCertificate({data})
            console.log(data)
            console.log(response)
            if(response?.status===true){
                toast.success(response?.message)
                return response
            }
            else{
                toast.error(response?.message)
            }
        } catch (error) {
            console.log(error)
            
        }
    }



    return { createOrEditCertificate, formData, getCertificateLIst, setFormDate, updateDataTable,deleteCertificateById,viewCertificate,selectedCertificate,searchCertificate,multipleCertificate }
}



export default useCertificatehook