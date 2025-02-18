import { inventoryapi } from "../../axios/axiosSetup";

const deleteItemFromKart = async ( {invoiceId,billKartId}) => {
    try {
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const body = {
            clientId,
            buId: businessUnitId,
            invoiceId,
            billKartId 
        } ;
        const response = await inventoryapi.delete(`/invoice/deleteItemFromKart?invoiceId=${invoiceId}&clientId=${clientId}&billKartId=${billKartId}`, );
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default deleteItemFromKart;
 
