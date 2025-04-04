import axios from "axios";

const getAllCheifComplaint = async ()=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/complaint/getAllActiveComplaint/${clientId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        
        return response.data  
    } catch (error) {
        
    }

}

export default getAllCheifComplaint