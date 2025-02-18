import { inventoryapi } from "../../axios/axiosSetup";

const getinvoicesForPatient = async ({ keyWord, page = 1, perPage = 10, branchId, patientId }) => {
    try {
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const queryParams = new URLSearchParams({
            keyWord,
            page: page.toString(),
            perPage: perPage.toString(),
            clientId,
            buId: businessUnitId,
            branchId: branchId || '',  
            patientId: patientId || '',  
        });
        const response = await inventoryapi.get(`/invoice/getInvoices?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default getinvoicesForPatient;

