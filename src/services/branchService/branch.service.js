import axios from "axios";


// const create = async (data) => {
//     const authToken = localStorage.getItem("KOSMO_client_token");
//     const clientId = localStorage.getItem("KOSMO_client_clientId");
//     const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

//     return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/createBranch`, data, {
//         headers: {
//             Authorization: `Bearer ${authToken}`,
//         }

//     });
// };

const create = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/createBranch`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};

const update = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/updateBranch`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for getting all branch list
const getAll = async ({ page, keyword, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/listBranch?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });

    return response.data
}

// for getting all branch list


// for active and inActive 
const activeInActive = async ({ branchId, status, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/activeInactiveBranch/`, { branchId: branchId, clientId: clientId, status, page, keyword: keyWord, perPage }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });


};


const deleteBranch = async (id, page, perPage, keyWord) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/softDeleteBranch`, { keyword: keyWord, page: page, perPage: perPage, branchId: id, clientId: clientId, softDelete: "0" }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};





const getMyBranchDetailsUsingId = async (branchId) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/getBranchfromId?branchId=${branchId}&&clientId=${clientId}`,  {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




export default {
    create,
    update,
    getAll,
    activeInActive,
    deleteBranch, 
    getMyBranchDetailsUsingId,
}