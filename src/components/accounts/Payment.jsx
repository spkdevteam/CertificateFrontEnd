import { useEffect, useState } from "react";
import useHandleModal from "../../Hooks/useHandleModal";
import { SPKFormClose } from "../../common/Button/SPKFormClose";
import RadioButton from "../../common/radioButton/RadioButton";
import SPKCMPTransactions from "./SPKCMPTransactions";
import useActivePatientSlice from "../../Hooks/useActivePatientSlice";
import confirmAction from "../../common/Toast/confirmAction";
import SPKBTNSave from "../../common/Button/SPKBTNSave";
import SPKBTNInsert from "../../common/Button/SPKBTNInsert";
import SPKBTNCancel from "../../common/Button/SPKBTNCancel";
import SPKCMPPayment from "./SPKCMPPayment";
import useBranchHook from "../../Hooks/useBranchBook";
import PatientSearch from "./PatientSearch";
import { useDispatch, useSelector } from "react-redux";
import { form } from "framer-motion/client";
import useAccountsHooks from "../../Hooks/useAccountsHooks";
import usePaymentHooks from "../../Hooks/usePaymentModule";
import useInvoiceHooks from "../../Hooks/useInvoiceHooks";
import toast from "react-hot-toast";
import { disableAccountsUpdate } from "../../store/accountsSlice";




const Payment = () => {
    const { closeModal } = useHandleModal()
    const [includePrevious, setIncludePrevious] = useState()
    const { activePatient, activeBranch } = useActivePatientSlice()
    const { createEditSalesEntry, partyOutstanding, getPartyBillWiseOutStanding, getPartyTransactionDetails } = useAccountsHooks()
    const [transactions, setTransactions] = useState([])
    const { getAccounttransactions } = usePaymentHooks()
    const [defaultinvoice, setdefaultInvoice] = useState([])
    const [selectedInvoice, setSelectedinvoices] = useState([])
    const { handleViewinvoiceInvoice } = useInvoiceHooks()
    const billSummary = useSelector((state) => state?.modalSlice?.data?.billSummary)
    const updateAccounts = useSelector((state)=>state.accounts.updateAccounts)
    const dispatch = useDispatch()

      useEffect(() => {
            if(updateAccounts)  loadPartyLedger()
              dispatch(disableAccountsUpdate())
        },[updateAccounts] )


    const [formData, setFormData] = useState({
        companyId: billSummary?.supplierDetails?._id || '',
        branchId: billSummary?.supplierDetails?._id || '',
        partyId: billSummary?.recipientDetails?._id || '',
        invoice: [{
            invoice_id: billSummary?._id,
            displayId: billSummary?.invoiceDetails?.displayId,
            amount: billSummary?.totalAmount?.totalValue
        }],

        accountHead: 'Receipt',
        b2bDetails: [

        ],
        date: new Date()?.toISOString(),
        autoNarration: '',
        narration: '',
        amount: 0.00,
        type: 'debit',
        saveStatus: false

    })

    useEffect(() => {

        console.log(formData.invoice, 'am formdtata ')
    }, [formData])

    const handlePayment = async () => {
        const newEntry = formData;
        newEntry.type = 'debit'
        // const confirmPayment = await confirmAction('Save Payment ?')
        // if (confirmPayment) {

        const result = await createEditSalesEntry(formData)
        if (result.status) {
            console.log(result?.data?.debit, 'result?.data?.debit')
            const tempResult = JSON.parse(JSON.stringify(result?.data?.debit)) || {}
            tempResult.saveStatus = true
            setFormData(tempResult)
            toast.success(result.message)
            console.log(result)
            getPartyBillWiseOutStanding({ partyId: billSummary?.recipientDetails?._id })
        }
        else {
            toast.error(result.message)
        }
        // }
        // You can integrate a payment gateway API here
    };

    const initializeComponent = async () => {
        const temp = partyOutstanding?.filter((inv) => inv.invoiceId == billSummary?._id).map((val) => ({
            invoiceId: val?.invoiceId,
            displayId: val?.displayId,
            amount: val?.balanceAmount
        }))
        setFormData({
            prefix: billSummary?.supplierDetails?.displayId?.split('-')?.slice(0, 3)?.join('-'),
            companyId: billSummary?.supplierDetails?._id || '',
            branchId: billSummary?.supplierDetails?._id || '',
            partyId: billSummary?.recipientDetails?._id || '',
            invoice: temp,

            accountHead: 'Cash',
            b2bDetails: [

            ],
            date: new Date()?.toISOString(),
            autoNarration: billSummary?.invoiceDetails?.displayId,
            narration: billSummary?.invoiceDetails?.displayId,
            amount: temp.reduce((cum, val) => cum + val.amount, 0),
        })
    }
    const loadPartyLedger = async () => {
        console.log({
            partyId: billSummary?.recipientDetails?._id,
            fromDate: new Date(new Date().setDate(1))?.toISOString(),
            toDate: new Date(new Date().setMonth(new Date().getMonth() + 1, 0)).toISOString(),
            keyWord: '',
            page: 0, perPage: 1000
        })
        const result = await getPartyTransactionDetails({ partyId: billSummary?.recipientDetails?._id, fromDate: new Date(new Date().setDate(1))?.toISOString()?.split('T')[0], toDate: new Date(new Date().setMonth(new Date().getMonth() + 1, 0)).toISOString()?.split('T')[0], keyWord: '', page: 0, perPage: 1000 })
        console.log(result.data.data)
        setTransactions(result.data.data)
    }

    useEffect(() => {
       
        initializeComponent()
        getPartyBillWiseOutStanding({ partyId: billSummary?.recipientDetails?._id })
        setdefaultInvoice([{ id: billSummary?._id }])
        loadPartyLedger()
    }, [billSummary])

    useEffect(() => {
        console.log('hello this is initial load ')
        if (!includePrevious) {
            const value = defaultinvoice.map((item) => ({ id: item.id }))
            const name = 'invoice'
            handleChange({ target: { name, value } })
        }

    }, [includePrevious])

    const handleChange = async (e) => {
        let { name, value } = e.target;
        if (name == 'amount') value = parseInt(value)
        console.log(name, value, 'name,value')
        let amount = formData.amount || 0; // Ensure amount is always a valid number

        if (name === 'invoice' || name === 'amount') {
            let selectedBills = JSON.parse(JSON.stringify(formData.invoice)) || []; // Preserve selected invoices
            let remainingAmount = name === 'amount' ? value : amount; // Use new amount if updated
            // Get the selected invoices from partyOutstanding based on user selection
            console.log(selectedBills, 'selectedBills', value)
            const invoiceList =
                partyOutstanding?.filter((invoice) => (name === 'invoice' ? value : selectedBills?.map((i) => ({ id: i.invoiceId })))?.map((item) => item?.id)?.includes(invoice?.invoiceId)

                );
            console.log(invoiceList, 'invoiceList')
            // Calculate estimate total from selected invoices
            const estimateTotal = invoiceList?.reduce((cum, bill) => cum + (bill.balanceAmount || 0), 0);

            // Distribute the amount across invoices
            const invoices = invoiceList.map((item) => {
                let allocatedAmount = Math.min(remainingAmount, item?.balanceAmount); // Allocate minimum required
                remainingAmount -= allocatedAmount; // Deduct from remaining balance

                return {
                    invoiceId: item?.invoiceId,
                    displayId: item?.displayId,
                    amount: allocatedAmount,
                };
            });

            // If there's remaining amount, add it as an "advance"
            if (remainingAmount > 0) {
                invoices.push({
                    invoiceId: 'advance',
                    amount: remainingAmount,
                });
            }
            console.log(invoices, 'invoices')
            setFormData((prev) => ({
                ...prev,
                invoice: invoices, // Update invoice only if invoice changes
                amount: name === 'amount' ? value : prev.amount, // Update amount only if amount changes
                saveStatus: false,
                estimateTotal: estimateTotal,
            }));
        } else {
            // Handle other fields normally
            setFormData((prev) => ({
                ...prev,
                [name]: value,
                saveStatus: false,
            }));
        }
    };

    useEffect(() => {
        setTransactions(getAccounttransactions({ company_id: formData?.companyId, party_id: formData?.partyId, fromDate: new Date()?.toISOString(), toDate: new Date()?.toISOString() }))
    }, [])
    useEffect(() => {
        initializeComponent()
    }, [partyOutstanding])







    return (
        <div className="min-h-1/2 m-auto rounded-md   h-[70v] bg-white flex-col xl:w-10/12 dark:bg-darkSecondary dark:text-white   items-center justify-center  p-5 ">
            <div className="h-[5%] w-full font-semibold mb-4   flex justify-between ">
                Payment
                <SPKFormClose onClick={closeModal} />
            </div>
            <div className="flex max-h-[90%] min-h-[70%]  gap-4   w-full  overflow-scroll p-5   border rounded-md border-gray-600 border-opacity-30  flex-col md:flex-row ">
                <PatientSearch includePrevious={includePrevious} outStanding={partyOutstanding} setIncludePrevious={setIncludePrevious} formData={formData} handleChange={handleChange} />
                <div className="md:w-8/12 w-full flex-col md:flex-row flex  p-  gap-4 ">
                    <SPKCMPPayment handlePayment={handlePayment} close={closeModal} outStanding={partyOutstanding} includePrevious={includePrevious} formData={formData} handleChange={handleChange} />
                    {
                        includePrevious ?
                            <div className={` ${includePrevious ? 'w-10/12' : 'w-full'}  rounded-md shadow-lg border-gray-600 border-opacity-30  border  p-4       `}>
                                <SPKCMPTransactions transactions={transactions} company_id={activePatient?._id} party_id={activeBranch?._id} fromDate={new Date()?.toISOString()} toDate={new Date()?.toISOString()} />
                            </div>
                            : ''
                    }
                </div>
            </div>
        </div>
    );


}

export default Payment