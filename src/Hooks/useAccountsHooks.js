import toast from "react-hot-toast"
import createReceiptEntry from "../services/accounts/createEditReceiptEntry"
import createInvoiceEntry from "../services/accounts/createInvoiceEntry"
import getInvoiceTransactions from "../services/accounts/getInvoiceTransactions"
import getPartyBillWiseSummary from "../services/accounts/getPartyBillWiseSummary"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { pushComponentToModal, switchModal } from "../store/handleModal"
import getPartyLedger from "../services/accounts/getPartyLedger"
import { enableAccountsApiUpdate } from "../store/accountsSlice"
import deleteTransaction from "../services/accounts/deleteAccountTransaction"
import confirmAction from "../common/Toast/confirmAction"
import partyInvoiceOutStanding from "../services/accounts/partyInvoiceOutStanding"
import useHandleModal from "./useHandleModal"

const useAccountsHooks = () => {
    const dispatch = useDispatch()
    const { closeModal, openEmptyModal } = useHandleModal()
    const [updateAccounts, setUpdateAccounts] = useState(0)
    const [partyOutstanding, setPartyOutstanding] = useState([{
        "invoiceId": "",
        "displayId": "",
        "totalAmount": 0,
        "balanceAmount": 0
    }])
    const getPartyBillBsedOutStanding = ({ partyId }) => {
        return async ({ page, rowPerPage, keyword }) => {
            const result = await partyInvoiceOutStanding({ partyId })
            const data = result.data
            const count = data?.length;
            const dataToTable = data?.map((val) => {
                return {
                    invoiceId: val?.invoiceId,
                    paid: val?.paidDetails?.reduce((cum, val) => cum + val.amount, 0),
                    total: val?.payableDetails?.reduce((cum, val) => cum + val.amount, 0),
                    discount: val?.discount || 0.00
                }
            })
            console.log(dataToTable, 'outstanding Summary ')
            return { data: dataToTable, totalDataCount: count }

        }

    }

    const createEditInvoiceEntry = async ({ companyId, branchId, partyId, invoice, accountHead, date, autoNarration, narration, amount, _id }) => {
        try {

            const newEntry = { companyId, branchId, partyId, invoice, accountHead, date, autoNarration, narration, amount, _id }
            const result = await createInvoiceEntry(newEntry)
            setUpdateAccounts((prev) => prev + 1)
            return result

        } catch (error) {
            toast.error(error?.message)
        }
    }

    const createEditSalesEntry = async ({ type, companyId, prefix, branchId, partyId, invoice, accountHead, date, autoNarration, narration, amount, _id }) => {
        try {
            const newEntry = { type, companyId, branchId, prefix, partyId, invoice, accountHead, date, autoNarration, narration, amount, _id }
            const result = await createInvoiceEntry(newEntry)
            dispatch(enableAccountsApiUpdate())
            return result
        } catch (error) {
            toast.error(error?.message)
        }
    }
    const openPaymentScreen = () => {

    }
    const deleteAccountTransaction = async ({ transactionId
    }) => {
        
        const action = await confirmAction('Delete transaction ? ')
        
        if (action) {
            const result = await deleteTransaction({ transactionId })
            if (result.status)
                toast.success(result.message)
            else {
                toast.error(result.message)
            }
            dispatch(enableAccountsApiUpdate())


        }
    }
    const getinvoiceBasedTransactions = async ({ invoiceId
    }) => {
        const result = getInvoiceTransactions({ invoiceId })
        return result;
    }
    const getPartyTransactionDetails = async ({ partyId, fromDate, toDate, keyWord, page, perPage }) => {
        const result = await getPartyLedger({ partyId, fromDate, toDate, keyWord, page, perPage })
        return result;
    }
    const getPartyBillWiseOutStanding = async ({ partyId }) => {
        try {
            const result = await getPartyBillWiseSummary({ partyId })
            if (result.status) {
                setPartyOutstanding(result?.data?.filter((entry) => entry.balanceAmount > 0))
            }
            else {
                setPartyOutstanding([])
            }
        } catch (error) {

        }
    }
    const viewLedgerForm = ({ partyId }) => {
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({ element: 'ledger', data: partyId }))
    }

    const printVoucher = (receptEntry) => {
        dispatch(switchModal(true))
        dispatch(pushComponentToModal({ element: 'receipt', data: receptEntry }))
    }

    return { updateAccounts, viewLedgerForm, getPartyBillBsedOutStanding, createEditInvoiceEntry, printVoucher, getPartyTransactionDetails, getPartyBillWiseOutStanding, createEditSalesEntry, deleteAccountTransaction, getinvoiceBasedTransactions, partyOutstanding }
}


export default useAccountsHooks