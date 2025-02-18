import axios from "axios";

const createChiefComplaint = async ({ complaintName, discription})=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/complaint/createComplaint`,{clientId, complaintName, discription}, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        
        return response.data  
    } catch (error) {
        
    }

}

export default createChiefComplaint