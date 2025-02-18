import axios from "axios"

const getPrescriptionById = async (input)=>{
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/prescription/prescription/${clientId}/${input?.prescriptionId||''}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
     
    return response.data
}

export default getPrescriptionById

                                                                                                                            