import { hrApi } from "../../axios/axiosSetup";


const handleForgotPassword=async({email})=>{
    const clientId = import.meta.env.VITE_CLIENTID;

    const data={

        emailId:email,
        clientId:clientId
    }

    const result=await hrApi.post(`/users/forgot-password/`,data)
    console.log(result)
    return result


}

export default handleForgotPassword