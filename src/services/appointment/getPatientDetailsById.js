import axios from "axios"

const getPatientDetailsById = async (input)=>{
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/patient/${clientId}/${input?.patientId||''}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
     
    return response.data
}

export default getPatientDetailsById

                                                                                                                            