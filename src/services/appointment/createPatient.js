import axios from "axios";

const createPatients = async (patient)=>{
try {
    console.log(patient,'patiet')
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/createPatientWhileBooking`, {
        clientId:clientId,
        businessUnit:businessUnitId,
        roleId:17,
        ...patient
    }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    console.log(response,'aaaaaaaaaaa')
    return response.data  
} catch (error) {
    console.log(error)
    return {status:false,message:error?.response?.data?.message}
}
}

export default createPatients

