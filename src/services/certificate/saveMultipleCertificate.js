import { certificateapi } from "../../axios/axiosSetup"


const saveMultipleCertificate=async({data})=>{
    const clientId = import.meta.env.VITE_CLIENTID

    const inputdata={data,clientId }

    const response=await certificateapi.post("/certificate/saveMultiple",inputdata)
    return response?.data
}

export default saveMultipleCertificate