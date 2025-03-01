import { certificateapi } from "../../axios/axiosSetup";


const getCertificateBySuggestion=async({searchKey })=>{
    const clientId = import.meta.env.VITE_CLIENTID;
    const response=await certificateapi.get(`/certificate/getSuggestion/${searchKey}/${clientId}`)
    console.log(response?.data)
    return response?.data


}

export default getCertificateBySuggestion