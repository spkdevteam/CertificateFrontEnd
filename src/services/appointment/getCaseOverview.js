import axios from "axios";

const getActiveCaseSheetByPatient = async (data) => {
    try {
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");

        if (!authToken || !clientId || !data?.patientId) {
            throw new Error("Missing required data for API call.");
        }

        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getActiveCaseSheetOverView/${clientId}/${data.patientId}`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }
        );
        return response.data; // Always return the parsed response
    } catch (error) {
        console.error("Error fetching active case sheet by patient:", error);
        throw error; // Optional: rethrow the error for higher-level handling
    }
};

export default getActiveCaseSheetByPatient;
