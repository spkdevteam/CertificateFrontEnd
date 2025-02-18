import axios from "axios";

const searchPatient = async ({ page, keyword, perPage, isAdmin, branchId }) => {

    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/listPatient?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}&&isAdmin=${isAdmin}&&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

export default searchPatient