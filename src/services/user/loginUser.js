import { hrApi } from "../../axios/axiosSetup"


const handleAPiloginUser = async({email,password})=>{
    const clilentId = ''

    const data={
        email:email,
        password:password
    }
    const result=await hrApi.post(`/users/signin`,data)
    return result?.data
}

export default handleAPiloginUser