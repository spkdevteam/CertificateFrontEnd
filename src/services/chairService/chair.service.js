import axios from "axios";


// for creating Chair
const create = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/branch/chair/createChair`, { ...data, clientId: clientId, businessUnit: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for Update Chair
const update = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/branch/chair/updateChair`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for getting all Chair list
const getAll = async ({ page, keyword, perPage,isAdmin , branchId  }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/branch/chair/listChair?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}&&isAdmin=${isAdmin}&&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

// for active and inActive 
const activeInActive = async ({ chairId, status }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/branch/chair/activeInactiveChair`, { chairId, status , clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for deleting the Chair
const deleteChair = async ({id, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/branch/chair/softDeleteChair/`, { chairId:id,page, keyword: keyWord, perPage,clientId: clientId } ,{
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
    deleteChair,
    getAllBranch
}