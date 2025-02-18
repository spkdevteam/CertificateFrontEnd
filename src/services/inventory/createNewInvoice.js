import { inventoryapi } from "../../axios/axiosSetup";

const saveTempInvoicetoConfirm = async ( {billSummary}) => {
    try {
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const body = {
            clientId,
            buId: businessUnitId,
            billSummary 
        } ;
        const response = await inventoryapi.post(`/invoice/saveTempInvoicetoConfirm`,body);
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default saveTempInvoicetoConfirm;
 
