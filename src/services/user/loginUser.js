import { hrApi } from "../../axios/axiosSetup"


const handleAPiloginUser = async({email,password})=>{
    const clientId = import.meta.env.VITE_CLIENTID

    const data={
        userId:email,
        password:password,
        clientId:clientId

    }
    const result=await hrApi.post(`/users/signin`,data)
    // console.log(result?.data)
    return result?.data
}

export default handleAPiloginUser