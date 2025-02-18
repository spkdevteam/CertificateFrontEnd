import axios from "axios"

const getdailyBookingWithPagination = async (input)=>{
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/getdailyBookingWithPagination?clientId=${clientId}&buId=${businessUnitId}&bookingDate=${input?.bookingDate}&page=${input?.page}&keyword=${input?.keyword}&perPage=${input?.perPage}&branchId=${input?.branchId||''}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
     
    return response.data
}

export default getdailyBookingWithPagination

                                                                                                                            