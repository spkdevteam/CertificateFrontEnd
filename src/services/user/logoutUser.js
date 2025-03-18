import { hrApi } from "../../axios/axiosSetup"


const handlelogoutUser=async({userId})=>{
    const clientId = import.meta.env.VITE_CLIENTID;
    const data={
        userId:userId,
       clientId:clientId,

    }

    const response=await hrApi.post("/users/logout",data,{withCredentials: true});
    return response?.data
}

export default handlelogoutUser