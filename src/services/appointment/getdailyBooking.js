import axios from "axios"

const getdailyBooking = async (input)=>{
    const {bookingDate,branchId} = input
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/BookingByDate?clientId=${clientId}&buId=${businessUnitId}&bookingDate=${bookingDate}&branchId=${branchId}`, {
        
        
       
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
     
    return response.data
}

export default getdailyBooking