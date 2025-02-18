import axios from "axios";

const getDatewiseBookingSummaryByPeriod = async ({ fromDate = new Date(), toDate = new Date(), branchId = "" }) => {
  const authToken = localStorage.getItem("KOSMO_client_token");
  const clientId = localStorage.getItem("KOSMO_client_clientId");
  const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId"); // Include if required

  const formattedFromDate = new Date(fromDate).toISOString();
  const formattedToDate = new Date(toDate).toISOString();
  console.log(formattedFromDate,formattedToDate ,'formattedFromDate,formattedToDate ')  
  const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/client/bu/booking/getDatewiseBookingSummaryByPeriod?clientId=${encodeURIComponent(clientId)}&branchId=${encodeURIComponent(branchId)}&fromDate=${encodeURIComponent(formattedFromDate)}&toDate=${encodeURIComponent(formattedToDate)}`;
     
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

export default getDatewiseBookingSummaryByPeriod;
