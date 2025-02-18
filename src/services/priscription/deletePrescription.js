import axios from "axios";



const deletePrescription = async (prescriptionId)=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/client/bu/prescription/deletePrescription?clientId=${clientId}&prescriptionId=${prescriptionId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        return response.data  
    } catch (error) {
        
    }
    }
    
    export default deletePrescription

