import axios from "axios";

const createToken = async ({branchId,appointmentid,date})=>{
try {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/createToken?clientId=${clientId}&branchId=${branchId}&buId=${businessUnitId}&appointmentid=${appointmentid}&date=${date}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data  
} catch (error) {
    
}
}
// 
export default createToken

