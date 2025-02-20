import { hrApi } from "../../axios/axiosSetup"


const handleOtp=async({id,otp})=>{
    const clientId = import.meta.env.VITE_CLIENTID;

    const data={
        id:id,
        otp:otp,
        clientId:clientId

    }
    const result=await hrApi.post(`/users/verify-otp/`,data)
    console.log(result)
    return result
}

export default handleOtp

