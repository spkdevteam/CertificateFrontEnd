import { hrApi } from "../../axios/axiosSetup"


const handleAPiloginUser = async({userId,password})=>{
    const clientId = import.meta.env.VITE_CLIENTID
     
    const data={
        userId:userId,
        password:password,
        clientId:clientId

    }
    const result=await hrApi.post(`/users/signin`,data, { withCredentials: true })
    console.log(result,"Heello")
    return result?.data
}

export default handleAPiloginUser