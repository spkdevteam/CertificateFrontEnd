import { useEffect } from "react"
import SPKButtonPayment from "../../common/Button/SPKButtonPayment"
import useAccountsHooks from "../../Hooks/useAccountsHooks"
import useActivePatientSlice from "../../Hooks/useActivePatientSlice"
import useHandleModal from "../../Hooks/useHandleModal"
import { useTheme } from "@material-tailwind/react"
import { useColorScheme } from "@mui/material"
import useColourThemeHook from "../../Hooks/useColourThemeHook"
import SPKBTNView from "../../common/Button/SPKBTNView"
import { useDispatch, useSelector } from "react-redux"
import { disableAccountsUpdate } from "../../store/accountsSlice"

const PatientInvoiceSummary = ({ accountSummary }) => {
    const { openPaymentScreen } = useHandleModal()
    const { activePatient } = useActivePatientSlice()
    const { theme } = useColourThemeHook()
    const {viewLedgerForm} = useAccountsHooks()
    const updateAccounts = useSelector((state)=>state.accounts.updateAccounts)
    const dispatch = useDispatch()

    const { partyOutstanding,  getPartyBillWiseOutStanding } = useAccountsHooks()
    console.log(accountSummary, 'partyOutstandingpartyOutstanding')
    useEffect(() => {
        getPartyBillWiseOutStanding({ partyId: activePatient?._id })
         
    },[] )
    useEffect(() => {
        if(updateAccounts) getPartyBillWiseOutStanding({ partyId: activePatient?._id })
          dispatch(disableAccountsUpdate())
    },[updateAccounts] )

    return (
        <div className={`flex w-full   gap-2   h-full text-sm    justify-center items-center    rounded  `}>

            <div className={`h-full p-4 w-full md:w-1/2 border flex flex-col justify-start items-center  rounded-md ${theme.bordercolour}`}>
                <div className="w-full  text-xl flex flex-col justify-center items-center p-2 rounded-t-md  h-1/2   " >
                    <p className="text-sm    dark:text-white font-bold  " >Total Amount </p>
                    <p className="text-2xl font-semibold w-full  text-center    ">{parseFloat(partyOutstanding?.reduce((cum, inv) => cum + inv?.totalAmount, 0)).toFixed(2)}</p>
                </div>
                <div className="w-full p-2 rounded-b-md h-1/2 flex justify-center items-center  ">
                    <SPKBTNView onClick={() => viewLedgerForm({
                        billSummary: {
                            supplierDetails: {

                                _id: accountSummary.branchId,

                            },
                            recipientDetails: {
                                _id: accountSummary.partyId,
                            },

                        }
                    })} text='Ledger' width='w-full' />

                </div>

            </div>
            
            <div className={`h-full p-4 w-1/2 border  rounded-md ${theme.bordercolour}`}>
                <div className="w-full  text-xl flex flex-col justify-center items-center p-2 rounded-t-md  h-1/2   " >
                    <p className="text-sm font-bold *: ">Balance   </p>
                    <span className="font-semibold text-xl w-20 text-center   ">{parseFloat(partyOutstanding?.reduce((cum, inv) => cum + inv?.balanceAmount, 0)).toFixed(2)}</span>
                </div>
                <div className="w-full p-2 rounded-b-md h-1/2 flex justify-center items-center  ">
                    <SPKButtonPayment onClick={() => openPaymentScreen({
                        billSummary: {
                            supplierDetails: {

                                _id: accountSummary.branchId,

                            },
                            recipientDetails: {
                                _id: accountSummary.partyId,
                            },

                        }
                    })} text='Pay now' width='w-full' />

                </div>
            </div>


        </div>

    )
}


export default PatientInvoiceSummary



