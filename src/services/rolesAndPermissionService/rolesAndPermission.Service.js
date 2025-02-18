import axios from "axios";


// for creating roles and permission
const createRolesAndPermission = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/createRolesAndPermission`, {...data,clientId:clientId}, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for Updating roles and permission name only
const updateRolesAndPermissionName = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/updateRolesAndPermission`, {...data,clientId:clientId}, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// for Delete roles and permission 
const deleteRolesAndPermissionName = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/softDeleteRolesAndPermission`, {roleId:id,clientId:clientId, softDelete : "0"}, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


// get Particular roles and permisssion
const getParticularRolesAndPermissionList = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clinetId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/rolesAndPermission/${data.clientId}/${data.roleId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}






//for getting list of roles and permission
const getRolesAndPermissionList = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clinetId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/listRolesAndPermission?clientId=${clinetId}&keyword=${data.keyword}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


// for Submitting  roles and permission list
const submitRolesAndPermission = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/role/updateRolesAndPermission`, {...data,clientId:clientId}, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



export default{
    getRolesAndPermissionList,
    createRolesAndPermission,
    getParticularRolesAndPermissionList,
    updateRolesAndPermissionName,
    deleteRolesAndPermissionName,
    submitRolesAndPermission
}