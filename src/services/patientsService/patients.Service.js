import axios from "axios";


const create = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/createPatient`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

const update = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/updatePatient`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

const getAll = async ({ page, keyword, perPage, isAdmin, branchId }) => {

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

const getSearch = async ({ keyword, isAdmin, branchId }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/listPatientWithSearch?keyword=${keyword}&&clientId=${clientId}&&isAdmin=${isAdmin}&&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const activeInActive = async ({ id, status, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/activeInactivePatient/`, { patientId: id, clientId: clientId, status, page, keyword: keyWord, perPage }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};


const get = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/patient/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}



const deleteone = async (id, page, perPage, keyWord, isAdmin, branchId) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/softDeletePatient`, { keyword: keyWord, page: page, perPage: perPage, patientId: id, clientId: clientId, softDelete: "0", isAdmin: isAdmin, branchId: branchId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const getPatientRoleId = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/getPatientRoleId/${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}







export default {
    create,
    getAll,
    getSearch,
    update,
    activeInActive,
    deleteone,
    getPatientRoleId,
    get
}