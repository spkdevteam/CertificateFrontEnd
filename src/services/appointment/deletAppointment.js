import axios from "axios";

const deleteAppointment = async (data)=>{
try {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/delete?clientId=${clientId}&branchId=${data?.branchId}&buId=${businessUnitId}&appointmentid=${data?.appointmentid }`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
        
    });
    console.log(response)
    return response.data  
} catch (error) {
    
}
}

export default deleteAppointment