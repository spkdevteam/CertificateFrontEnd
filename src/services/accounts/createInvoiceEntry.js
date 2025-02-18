import { accountsapi } from "../../axios/axiosSetup";

const createInvoiceEntry = async ( input) => {
    try {
        const { _id='' ,type, companyId , prefix, accountHead , branchId ,invoice, partyId , date , autoNarration , narration , amount } = input 
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const body = { clientId,prefix,_id , companyId , accountHead , invoice,branchId , partyId , date , autoNarration , narration , amount , type:type} ;
        const response = await accountsapi.post(`/transaction/createReceiptEntry`,body);
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default createInvoiceEntry;
 
