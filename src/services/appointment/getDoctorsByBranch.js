import axios from "axios";

const getDoctorsByBranch = async ({ branchId }) => {

    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/getEmployeelist/${clientId}/${branchId}/${3}
`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

export default getDoctorsByBranch