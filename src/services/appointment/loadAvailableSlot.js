import axios from "axios"

const loadAvailableSlot = async (input)=>{
    const {branchId,chairId,startTime,endTime,bookingDate,doctorId} = input
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/getAvailability?clientId=${clientId}&branchId=${branchId}&buId=${businessUnitId}&chairId=${chairId}&startTime=${startTime}&endTime=${endTime}&bookingDate=${bookingDate}&doctorId=${doctorId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
     
    return response.data
}

export default loadAvailableSlot