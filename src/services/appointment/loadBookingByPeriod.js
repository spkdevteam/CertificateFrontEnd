import axios from "axios";

const loadBookingByPeriod = async ({ fromDate = new Date(), toDate = new Date(), branchId = "" }) => {
  const authToken = localStorage.getItem("KOSMO_client_token");
  const clientId = localStorage.getItem("KOSMO_client_clientId");
  const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId"); // Include if required

  const formattedFromDate = new Date(fromDate).toISOString();
  const formattedToDate = new Date(toDate).toISOString();

  const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/getBookingSummaryByPeriod?clientId=${encodeURIComponent(clientId)}&branchId=${encodeURIComponent(branchId)}&fromDate=${encodeURIComponent(formattedFromDate)}&toDate=${encodeURIComponent(formattedToDate)}`;
    console.log(apiUrl,'apiUrlapiUrlapiUrlapiUrl')
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching booking summary:", error.response ? error.response.data : error.message);
    throw error; // Re-throw the error for further handling
  }
};

export default loadBookingByPeriod;
