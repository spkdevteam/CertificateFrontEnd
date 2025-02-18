import axios from "axios";



const savePriscription = async (data)=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/prescription/createPrescription`,{...data,clientId:clientId,buId:businessUnitId}, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        return response.data  
    } catch (error) {
        
    }
    }
    
    export default savePriscription

