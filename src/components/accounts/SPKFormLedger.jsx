import { useEffect, useState } from "react"
import { SPKFormClose } from "../../common/Button/SPKFormClose"
import SpkDataTable from "../../common/DataTable/SpkDataTable"
import useAccountsHooks from "../../Hooks/useAccountsHooks"
import useActivePatientSlice from "../../Hooks/useActivePatientSlice"
import AppointmentSubheader from "../subHeaders/AppointmentSubheader"
import SubHeaderWIthKeyWordFromDateToDate from "../subHeaders/SubHeaderWIthKeyWordFromDateToDate"
import titleCaseWord from "../../helper/TitleCaseWord"
import useHandleModal from "../../Hooks/useHandleModal"
import { Tooltip } from "@mui/material"
import SPKBTNThemedDelete from "../../common/Button/OutlineThemeButton/SPKBTNThemedDelete"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"

const SPKFormLedger = () => {
    const [filterData, setFilterData] = useState({ fromDate: new Date()?.toISOString()?.split('T')[0], toDate: new Date()?.toISOString()?.split('T')[0], keyWord: '' })
    const { activePatient, activeBranch } = useActivePatientSlice()
    const { getPartyTransactionDetails,deleteAccountTransaction } = useAccountsHooks()
    const updateAccounts = useSelector((state)=>state.accounts.updateAccounts)
    const dispatch = useDispatch()
    const [updateTable, setUpdateTable] = useState(0)
    const { closeModal } = useHandleModal()
    const [selectedColumns, setSeletedColumn] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFilterData((prev) => ({
            ...prev,
            [name]: value
        }))
        setUpdateTable(prev => prev + 1)
    }
    useEffect(()=>{
        setUpdateTable(prev => prev + 1)
    },[updateAccounts])

    const tableDataFunction = async ({ page, rowPerPage, keyWord = filterData.keyWord }) => {
        const result = await getPartyTransactionDetails({ fromDate: filterData.fromDate, toDate: filterData.toDate, keyWord: filterData.keyWord, page: page, perPage: rowPerPage, partyId: activePatient._id, })
        const { data, totalDataCount } = result?.data
        return { data, totalDataCount }
    }
    const columns = [
        {
            name: "Date",
            selector: (row) => row?.date?.split('T')[0]?.split('-').reverse().join('-'),
            style: {
                // Add left border
            },
            left: true,
            width: '10rem' // Center aligns the column
        },
        {
            name: "Transaction",
            selector: (row) => row?.transactionId?.slice(row?.transactionId?.length - 7),
            style: {
                // Add left border
            },
            left: true,
            width: '15rem' // Center aligns the column
        }
        ,
        {
            name: "Description",
            selector: (row) => row?.invoice?.length 
            ? row.invoice
                .filter((inv) => inv.amount)
                .map((inv) => {
                  const action =
                  row?.type === 'credit' ? 'Invoice Created' :
                  row?.type === 'debit' ? 'Invoice Payment' :
                    '';
          
                  return [
                    action,
                    inv?.displayId?.slice(-14), // Extracts last 14 characters
                    parseFloat(inv?.amount)?.toFixed(2)
                  ].join(': ');
                })
                .join(' | ')
            : '',
            style: {
                // Add left border
            },
            left: true, // Center aligns the column
        }, {
            name: "Bill Amount",
            selector: (row) => row?.type == 'credit' ? parseFloat(row?.amount).toFixed(2) : '',
            style: {
                // Add left border
            },
            right: true,
            width: '10rem'// Center aligns the column
        }, {
            name: "PaidAmount",
            selector: (row) => row?.type == 'debit' ? parseFloat(row?.amount).toFixed(2) : "",
            style: {
                // Add right border
            },
            width: '10rem',
            right: true, // Center aligns the column
        }, {
            name: "Balance",
            selector: (row) => parseFloat(row?.balance).toFixed(2),
            style: {
                // Add right border
            },
            right: true, // Center aligns the 
            width: '15rem'
        },
        {
            name: "",
            width: "5rem",
            selector: (row) => {
                return (
                    <div className="flex text-lg gap-2 h-full rtl:space-x-reverse relative  ">
                        <Tooltip
                            content="View"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                             {row.type =='debit'? <SPKBTNThemedDelete onClick={()=>deleteAccountTransaction({transactionId:row.transactionId})} />:''}
                        </Tooltip>
                        

                    </div>
                );
            },
        },
    ]
    useEffect(()=>{
       
    },[selectedColumns])
    


    return (
        <div className="w-full border p-4 text-xs bg-white dark:bg-darkSecondary h-screen rounded-2xl overflow-scroll">
            <ToastContainer   />
            <div className="w-full flex text-sm  justify-between">
                <p>Account Ledger</p>
                <SPKFormClose onClick={closeModal} />
            </div>
            <div className="w-full flex text-sm p-4  justify-between">
                <div>
                    <h1 className="mb-1  " >{activePatient.firstName}</h1>
                    <h1 className="mb-1  " >{activePatient.displayId}</h1>
                    <h1 className="mb-1  " >{activePatient.address}</h1>
                    <h1 className="mb-1  " >{activePatient.email}</h1>
                    <h1 className="mb-1  " >{activePatient.phone}</h1>
                </div>
                <div>
                    <h1 className="mb-1 text-right  " >{activeBranch.name}</h1>
                    <h1 className="mb-1 text-right  " >{activeBranch.displayId}</h1>
                    <h1 className="mb-1 text-right  " >{activeBranch.address}</h1>
                    <h1 className="mb-1 text-right  " >{activeBranch.emailContact}</h1>
                    <h1 className="mb-1 text-right  " >{activeBranch.phoneContact}</h1>
                </div>
            </div>
            <div className="w-full flex text-sm p-4 justify-between">

                <SpkDataTable updateTable={updateTable}
                    columns={columns?.filter((col) => !selectedColumns?.includes(col.name))}
                    subHeaderComponent={<SubHeaderWIthKeyWordFromDateToDate
                        changeColoumn={setSeletedColumn}
                        coloumns={columns}
                        filterData={filterData}
                        handleFilterData={handleChange} />}
                    onChangePage={tableDataFunction}
                    subHeader={true} />
            </div>

        </div>
    )
}

export default SPKFormLedger