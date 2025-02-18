import axios from "axios";


// for creating 
const create = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    console.log({ ...data, clientId: clientId, buId: businessUnitId },'{ ...data, clientId: clientId, buId: businessUnitId }')
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/create`, { ...data, clientId: clientId, buId: businessUnitId }, {
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

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/editService`, { ...data, clientId: clientId, buId: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for getting list
const getAll = async ({ page, keyword, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/allServicesByPage?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

// for active and inActive 
const activeInActive = async ({ serviceId, status }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/activeInactiveService`, { serviceId, status, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};

// for deleting 
const deleteService = async ({ id, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    console.log("iddd", id);
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/softDeleteService/`, { serviceId: id, page, keyword: keyWord, perPage, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });

}


const deleteProcedure = async ({ id, page, keyword: keyWord, perPage }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    console.log("iddd", id);
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    return await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/delete?clientId=${clientId}&procedureId=${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });

}



const getAllActiveDepartment = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/activeDepartments?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}



const getAllActiveService = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/getAllActiveServices?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

const getAllProcedures = async ({keyword='',page=0,perPage=10,branchId=''}) => {
    
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/proceduresByPage?clientId=${clientId}&keyword=${keyword}&page=${page}&perPage=${perPage}&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    console.log(response.data,'response.data')
    return response.data    
}
//
const toggleProcedure=async (data)=>{
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/toggleProcedureByPage`, { ...data, clientId: clientId, buId: businessUnitId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
} 

const filterProcedurewithPageAndKeyword = async ({ page=0, keyword='', perPage=10,branchId='' }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/proceduresByPage?branchId=${branchId}&&keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}

const editProcedure = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    console.log( { ...data, clientId: clientId, buId: businessUnitId },' { ...data, clientId: clientId, buId: businessUnitId }')
    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/edit`, { ...data, clientId: clientId, buId: businessUnitId }, {
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
    deleteService,
    getAllActiveDepartment,
    getAllActiveService,
    getAllProcedures,
    toggleProcedure,
    filterProcedurewithPageAndKeyword,
    deleteProcedure,
    editProcedure
}