import { useEffect, useState } from "react"
import getAllCertificate from "../services/certificate/getAllCertificate"
import postCreateCertificate from "../services/certificate/postCreateCertifcate"
import putUpdateCertificate from "../services/certificate/putupdateCertificate"
import toast from 'react-hot-toast';
import deleteCertificate from "../services/certificate/deleteCertificate";
import confirmAction from "../common/Toast/confirmAction";
import getcertificateBycertificateNumber from "../services/certificate/getcertificateBycertificateNumber";
import getCertificateBySuggestion from "../services/certificate/getCertificateBySuggestion";
import { useDispatch } from "react-redux";

import { updateTableTableStatus } from "../store/updateTableSlice";
import saveMultipleCertificate from "../services/certificate/saveMultipleCertificate";



const useCertificatehook = () => {
    const [certificateLIst, setCertificateList] = useState([])
    const dispatch = useDispatch()

    const [updateDataTable, setUpdateDataTable] = useState(1)
    const [selectedCertificate,setSeletedCertificate] = useState({
        _id: "",
        displayId: "",
        certificateNumber: "",
        goldFineness: 0,
        goldWeight: 0,
    })
    const[isLoading,setIsLoading]=useState(false)


    const mandateValue = ['certificateNumber']
    const [formData, setFormDate] = useState({
        _id: "",
        displayId: "",
        certificateNumber: "",
        goldFineness:0,
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
    




    const getCertificateLIst = async ({ page=1, rowPerPage=10, keyWord }) => {

        const result = await getAllCertificate({ page:page, rowPerPage, keyWord })
        

        const { data, metaData } = result
        setCertificateList(data)

        return { data, totalDataCount:metaData?.totalDocs }
    } 

    const createOrEditCertificate = async (inputData) => {
        const validateValue = mandateValue?.filter((val) => !inputData[val]?.length)
        
        setIsLoading(true)

        try {

            let result;
            if (!inputData?._id?.length) {
                result = await postCreateCertificate({
                    certificateNumber: inputData.certificateNumber, 
                    // goldFineness: inputData.goldFineness, 
                    // goldWeight: inputData.goldWeight
                });
            } else {
                result = await putUpdateCertificate({
                    certificateNumber: inputData.certificateNumber, 
                    // goldFineness: inputData.goldFineness, 
                    // goldWeight: inputData.goldWeight, 
                    _id: inputData?._id
                });
            }
        
            if (result?.status) {
                toast.success(result?.message);
                // getCertificateLIst({ page: 0, rowPerPage: 10, keyWord: "" });
                //  setUpdateDataTable(prev => prev + 1);
            //     const fetchedData = await getCertificateLIst({ page: 0, rowPerPage: 10, keyWord: "" });
            //     console.log(fetchedData?.data)
            // setCertificateList(fetchedData.data); 
            dispatch(updateTableTableStatus())  

            
 // ✅ This should trigger table refresh

            } else {
                toast.error(result.message);
            }
    

            
        } catch (error) {
            toast.error(error?.message)
            
        }finally{
            setIsLoading(false)
        }
    
    };
    
    const deleteCertificateById = async ({id,certificateNumber})=>{
        try {
            const confirmDelete = await confirmAction( `Delete certificate ${certificateNumber} `) 
            if(confirmDelete){
            const result = await deleteCertificate({id})
            if(result?.status){
                toast.success(result.message)

                dispatch(updateTableTableStatus())  
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


    return { createOrEditCertificate, formData, getCertificateLIst, setFormDate, updateDataTable,deleteCertificateById,viewCertificate,selectedCertificate,searchCertificate,isLoading,setIsLoading,setUpdateDataTable,certificateLIst,setCertificateList,multipleCertificate }
}



export default useCertificatehook