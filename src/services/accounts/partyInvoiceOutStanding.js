import { accountsapi } from "../../axios/axiosSetup";

const partyInvoiceOutStanding = async ({partyId}) => {
try {
    const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const result =await  accountsapi.get(`/transactions/invoiceWiseOutStanding/${clientId}/${partyId}`)
        return result.data
    
} catch (error) {
    
}

}

export default partyInvoiceOutStanding

