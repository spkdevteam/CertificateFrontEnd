import axios from "axios";



const readPatientPriscription = async ({keyWord,page,perPage,branchId,patientId})=>{
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/prescription/listPrescription?keyWord=${keyWord}&page=${page}&perPage=${perPage}&clientId=${clientId}&buId=${businessUnitId}&branchId=${branchId||''}&patientId=${patientId||''}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
            
        });
        return response.data  
    } catch (error) {
        
    }
    }
    
    export default readPatientPriscription

