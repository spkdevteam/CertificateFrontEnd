import { hrApi } from "../../axios/axiosSetup"


const handleAPiloginUser = async({userId,password,companyId})=>{
    const clientId = import.meta.env.VITE_CLIENTID
     
    const data={
        userId:userId,
        password:password,
        companyId:companyId,
        clientId:clientId

    }
    const result=await hrApi.post(`/users/signin`,data)
    // console.log(result?.data)
    return result?.data
}

export default handleAPiloginUser