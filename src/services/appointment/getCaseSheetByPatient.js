import axios from "axios";

const getParticularCaseSheetByPatient = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getAllCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


export default getParticularCaseSheetByPatient
