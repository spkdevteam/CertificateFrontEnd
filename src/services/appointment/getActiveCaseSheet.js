import axios from "axios";

const getParticularCaseSheet = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


export default getParticularCaseSheet
