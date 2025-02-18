
 

import { accountsapi } from "../../axios/axiosSetup";

const  getPartyLedger  = async ( { partyId,fromDate,toDate,page,perPage,keyWord }) => {
    try {
         
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await accountsapi.get(`/transaction/accountledger?partyId=${partyId}&clientId=${clientId}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&perPage=${perPage}&keyWord=${keyWord}`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching invoice summary:', error);
        throw error; // Re-throw error to handle it in the caller
    }
};

export default getPartyLedger ;
 
 