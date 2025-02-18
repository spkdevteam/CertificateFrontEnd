import axios from "axios"

const fetchPatientBookingDetails = async (input)=>{
    console.log(input,'saaakj')
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId"); //getdailyBookingWithPagination
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/filterPatientBookingDetails?clientId=${clientId}&buId=${businessUnitId}&fromDate=${input?.fromDate}&toDate=${input?.toDate}&page=${input?.page}&patientId=${input?.patientId}&keyword=${input?.keyWord}&perPage=${input?.perPage}&branchId=${input?.branchId||''}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
     
    return response.data
}

export default fetchPatientBookingDetails  

                                                                                                                            