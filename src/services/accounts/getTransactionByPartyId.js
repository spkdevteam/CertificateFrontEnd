import { accountsapi } from "../../axios/axiosSetup";

const getTransactionByPartyId = async ( {  
    partyId,
    fromDate,
    toDate,
    keyWord,
    page,
    perPage }) => {
    try {
         
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await accountsapi.get(`/transaction/transactionByPartyId/${clientId}/${partyId}/${fromDate}/${toDate}/${keyWord}/${page}/${perPage}`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default getTransactionByPartyId;
 
