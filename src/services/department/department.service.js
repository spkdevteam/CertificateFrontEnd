import axios from "axios";


// for creating 
const create = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/createDepartment`, { ...data, clientId: clientId, buId: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for Update 
const update = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/editDepartment`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for getting list
const getAll = async ({ page, keyword, perPage,branchId }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/allDepartmentsByPage?clientId=${clientId}&&keyword=${keyword}&&page=${page}&&perPage=${perPage}&&branchId=${branchId||''}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

// for active and inActive 
const activeInActive = async ({ departmentId, status }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/activeInactiveDepartment`, { departmentId, status , clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};

// for deleting 
const deleteDepartment = async ({id, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    console.log("iddd",id);
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/softDeleteDepartment/`, { departmentId:id,page, keyword: keyWord, perPage,clientId: clientId } ,{
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });

}


const getAllBranch = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/getAllActiveBranch?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}





export default {
    create,
    update,
    getAll,
    activeInActive,
    deleteDepartment,
    getAllBranch
}