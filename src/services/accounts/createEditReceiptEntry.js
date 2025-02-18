import { accountsapi } from "../../axios/axiosSetup";

const createReceiptEntry = async ( {input}) => {
    try {
        const {
            transactionId,
            companyId,
            accountHead,
            branchId,
            partyId,
            date,
            autoNarration,
            narration,
            amount,
            _id,
            b2bDetails
          } = input 
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const body = { clientId,
            transactionId,
            companyId,
            accountHead,
            branchId,
            partyId,
            date,
            autoNarration,
            narration,
            amount,
            _id,
            b2bDetails,
            type:'debit'} ;


        const response = await accountsapi.post(`/transaction/createReceiptEntry`,body);
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default createReceiptEntry;
 
