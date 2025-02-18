import { inventoryapi } from "../../axios/axiosSetup";

const getBillItemDetails = async ( billNumber) => {
    try {
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const queryParams = new URLSearchParams({
            clientId,
            buId: businessUnitId,
            billNumber
        });
        const response = await inventoryapi.get(`/invoice/getBillItemDetails?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default getBillItemDetails;
 
