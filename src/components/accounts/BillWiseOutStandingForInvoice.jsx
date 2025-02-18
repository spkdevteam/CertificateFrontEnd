import { useEffect, useState } from "react"
import SpkDataTable from "../../common/DataTable/SpkDataTable"
import useAccountsHooks from "../../Hooks/useAccountsHooks"
import titleCaseWord from "../../helper/TitleCaseWord"
import sliceFromDisplayId from "../../helper/sliceFromDisplayId"
import SPKHTMLDataTable from "../../common/DataTable/SPKHTMLDataTable"

const BillWiseOutStandingForInvoice = ({ patientId }) => {
    const { getPartyBillBsedOutStanding } = useAccountsHooks()
    const [updateTable, setUpdatetable] = useState(0)
    useEffect(() => {
        setUpdatetable(prev => prev + 1)
    }, [])
    useEffect(() => {
        console.log(patientId, 'console.log(patientId)')
    }, [patientId])
    const coloumns = [
        {
            name: "invoice",
            selector: (row) => sliceFromDisplayId(row?.invoiceId),
            style: {


            },
            left: true, // Center aligns the column

        },
        {
            name: "Total  ",
            selector: (row) => parseFloat(row?.total).toFixed(2),
            right: true, // Center aligns the column

        },
        {
            name: "Discount ",
            selector: (row) => parseFloat(row?.discount).toFixed(2),
            right: true, // Center aligns the column

        },
        {
            name: "Net Amount",
            selector: (row) => parseFloat(row?.total-row?.discount).toFixed(2),
            right: true, // Center aligns the column

        },
        {
            name: "Paid  ",
            selector: (row) => parseFloat(row?.paid).toFixed(2),
            right: true, // Center aligns the column

        },
        {
            name: "Balance ",
            selector: (row) => parseFloat(row?.total-row?.paid).toFixed(2),
            right: true, // Center aligns the column

        }



    ];

    return (
        <div className="w-full  mx-auto text-xs    border    pt-4 ">
            <h2 className="text-xl font-bold mb-4">Previous Balance & Payments Details</h2>
            <div className="overflow-x-auto">
                <SPKHTMLDataTable showSummary={true} subHeader={false} pagination={false} updateTable={updateTable} columns={coloumns} onChangePage={getPartyBillBsedOutStanding({ partyId: patientId })} />
            </div>
            <h3 className="mt-6 font-bold">Terms & Conditions:</h3>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>All disputes are subject to Hyderabad Jurisdiction.</li>
        <li>Payment should be made within 7 days from the date of invoice, Interest @ 12% will be charged on all invoices after the due date.</li>
        <li>We declare that this invoice shows the actual amount of products or services described and that all particulars are true and correct.</li>
      </ul>
      
      <p className="mt-6 font-bold text-right">For <span className="text-blue-600">Kosmo Dental Clinic</span></p>
      <p className="text-right italic">Authorized Signature</p>
    
        </div>
    )
}

export default BillWiseOutStandingForInvoice