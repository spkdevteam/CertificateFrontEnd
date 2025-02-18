import axios from "axios";

const searchPatientWithNameEmailPhone = async ({patientName='',patientEmail='',patientContactNumber='',branchId=''})=>{
try {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patient/searchPatient?branchId=${branchId} &clientId=${clientId}&name=${patientName}&contactNumber=${patientContactNumber}&email=${patientEmail}&page=1&perPage=5`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data  
} catch (error) {
    
}
}

export default searchPatientWithNameEmailPhone

