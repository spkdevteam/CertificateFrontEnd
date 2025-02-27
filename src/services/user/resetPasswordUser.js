import { hrApi } from "../../axios/axiosSetup";


const handleReset=async({id,password,otp})=>{
    const clientId=import.meta.env.VITE_CLIENTID;

    const data={
        id:id,
        password:password,
        clientId:clientId,
        otp:otp
    }

    const result =await hrApi.post(`/users/reset-password`,data)
    console.log(result)
    return result

}

export default handleReset