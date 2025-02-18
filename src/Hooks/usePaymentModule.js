import transactions from "../constant/accounttransactions"
import useHandleModal from "./useHandleModal"
 


const usePaymentHooks = ()=>{
    const {} = useHandleModal()

    

    const getAccounttransactions = (company_id,party_id,fromDate,toDate)=>{
        return transactions

    }
    return {getAccounttransactions}
}

export default usePaymentHooks

