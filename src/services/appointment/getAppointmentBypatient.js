import axios from "axios";



const getAllAppointMentBypatient = async (data)=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/getAllbookingBypatient?clientId=${clientId}&branchId=${data?.branchId}&buId=${businessUnitId}&patientId=${data.patientId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        console.log(response)
        return response.data  
    } catch (error) {
        
    }
    }
    
    export default getAllAppointMentBypatient

