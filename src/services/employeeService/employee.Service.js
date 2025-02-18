import axios from "axios";


// for creating roles and permission
const createEmployee = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/createEmployee`, { ...data, clientId: clientId, businessUnit: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

const updateEmployee = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/updateEmployee`, { ...data, clientId: clientId, businessUnit: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for getting all business unit list
const getAllEmployeeList = async ({ page, keyword, perPage, isAdmin, branchId }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/listEmployee?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}&&isAdmin=${isAdmin}&&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}





// for active and inActive 
const activeInActiveEmployee = async ({ id, status, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/activeInactiveEmployee/`, { employeeId: id, clientId: clientId, status, page, keyword: keyWord, perPage }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });


};


const getActiveBranches = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/getAllActiveBranch?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}



const getActiveRoles = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/getRolesList?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}



const deleteEmployee = async (id, page, perPage, keyWord) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/employee/softDeleteEmployee`, {keyword : keyWord, page : page, perPage : perPage, employeeId: id, clientId: clientId, softDelete: "0" }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};







export default {
    createEmployee,
    updateEmployee,
    getActiveBranches,
    getActiveRoles,
    getAllEmployeeList,
    activeInActiveEmployee,
    deleteEmployee
}