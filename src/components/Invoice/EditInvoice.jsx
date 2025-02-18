import { CloseButton } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import SPKBTNCancel from '../../common/Button/SPKBTNCancel'
import SPKBTNSave from '../../common/Button/SPKBTNSave'
import HandleInvoice from './HandleInvoice'
import SpkDataTable from '../../common/DataTable/SpkDataTable'
import { useLocation } from 'react-router-dom'
import useInvoiceHooks from '../../Hooks/useInvoiceHooks'
import titleCaseWord from '../../helper/TitleCaseWord'
import BillFooter from './BillFooter'
import { Tooltip } from '@material-tailwind/react'
import Icons from '../ui/Icon'
import useDynamicIcons from '../../Hooks/useDynamicIcons'
import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit'
import confirmAction from '../../common/Toast/confirmAction'
import { ToastContainer } from 'react-toastify'
import useActivePatientSlice from '../../Hooks/useActivePatientSlice'
import usePaymentHooks from '../../Hooks/usePaymentModule'
import useHandleModal from '../../Hooks/useHandleModal'
import SPKBTNPrint from '../../common/Button/SPKBTNPrint'
import SPKButtonPayment from '../../common/Button/SPKButtonPayment'
import billSummary from '../../constant/invoiceTemplate'
import { SPKBTNNTDelete } from '../../common/Button/noTextButton/SPKBTNNTDelete'
import useAccountsHooks from '../../Hooks/useAccountsHooks'



const emptyFormData = {
  itemName: null,
  _id: null,
  hsnSacCode: null,
  quantity: 0,
  discount: 0,
  unitPrice: 0,
  taxableValue: 0,
  tax: 0,
  cgst: 0,
  sgst: 0,
  igst: 0,
  total: 0
}

function EditInvoice() {
  const { activePatient, getBranchDetails } = useActivePatientSlice()
  const { createEditSalesEntry } = useAccountsHooks()
  const { openPaymentScreen } = useHandleModal()
  const getMyIcon = useDynamicIcons()
  const EditIcon = getMyIcon('SPKEdit')
  const { fetchBillDetails,
    updateItemsToKart,
    CraetTemInvoice,
    handleSaveInvoice,
    deleteItemFromKartHook,
    openInvoiceList,
    handleViewinvoiceInvoice } = useInvoiceHooks()
  const location = useLocation();
  const { state } = location || {};

  const [editMedicine, setEditMedicine] = useState({
    itemName: '',
    hsnSacCode: '',
    quantity: 0,
    discount: 0,
    unitPrice: 0,
    taxableValue: 0,
    tax: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    total: 0
  })
  const [updateTable, setUpdateTable] = useState(0)
  const [invoice_id, setInvoice_id] = useState('')
  const [print, setPrint] = useState(true)
  const [formData, setFormData] = useState({})



  const getInvoiceDetails = async () => {
    const activeBranch = await getBranchDetails()
    const newData = {
      invoiceDetails: {
        displayId: null,
        invoiceDate: new Date()?.toISOString(),
        _id: null
      },
      supplierDetails: {
        name: activeBranch?.name,
        incorporationName: activeBranch?.lastName,
        gstin: activeBranch?.gstNumber,
        address: `${activeBranch?.address} ${activeBranch?.city} ${activeBranch?.state} ${activeBranch?.country}`,
        email: activeBranch?.emailContact,
        phone: activeBranch?.contactNumber,
        _id: activeBranch?._id,
        displayId: activeBranch?.displayId
      },
      recipientDetails: {
        name: activePatient?.firstName,
        lastName: activePatient?.lastName,
        gstin: activePatient?.gstin,
        address: activePatient?.address,
        email: activePatient?.email,
        phone: activePatient?.phone,
        _id: activePatient?._id,
        displayId: activePatient?.displayId
      },
      placeOfSupply: activeBranch?.placeofSupply,
      stateCode: activeBranch?.stateCode,
      reverseCharge: false,
      taxDetails: {
        totalTaxableValue: 0,
        totalCGST: 0,
        totalSGST: 0,
        totalIGST: 0,
        totalCess: 0
      },
      totalAmount: {
        totalValue: 0,
        inWords: "Zero Only"
      },
      netAmount: {
        totalValue: 0,
        inWords: "Zero Only"
      },
      itemKart: [],
      discount: 0,
      signature: null,
      createdBy: null,
      _id: state?._id
    }

    const result = await CraetTemInvoice({ invoiceDetails: newData })
    if (result?.status) {
      setInvoice_id(result?.data?.invoiceDetails?._id)
      setFormData(result?.data)
    }
  }

  const updateTablenew = async ({ page = 1, rowPerPage = 100, keyword = '' }) => {
    const currentData = formData?.itemKart
    const totalDataCount = currentData?.length
    console.log(formData,'<>>>>>>>>>>>>>>>><<<<<<<<<<<<<')
    return { data: currentData, totalDataCount: totalDataCount }
  }
  const handleDeleteItem = async (row) => {
    console.log({ invoiceId: formData?._id, billKartId: row?._id }, '{invoiceId:formData?._id,billKartId:row?._id}')
    const data = await deleteItemFromKartHook({ invoiceId: formData?._id, billKartId: row?._id })


    if (data.success) {
      setFormData(data?.updatedInvoice)
      setUpdateTable(prev => prev + 1)
    }
  }

  useEffect(() => {
    setUpdateTable(prev => prev + 1)
 console.log('lllllllllll')
  }, [formData])


  useEffect(() => {
    //  initialiseForm()
    if (state?._id) {
      setInvoice_id(state?._id)
console.log(state,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
      setFormData(state)
    }
    else {
      getInvoiceDetails()
    }
  }, [state?._id])


  const updateBillItems = async (billedItem) => {
    setPrint(false)

    const result = await updateItemsToKart({ invoice_id: formData?._id, BilledItemDetails: billedItem })
    if (result?.status) {
      setUpdateTable(updateTable + 1)
      setFormData(result?.data)
      setEditMedicine({
        itemName: '',
        _id: '',
        hsnSacCode: '',
        quantity: 0,
        discount: 0,
        unitPrice: 0,
        taxableValue: 0,
        tax: 0,
        cgst: 0,
        sgst: 0,
        igst: 0,
        total: 0
      })
    }
    else {
      toast.error(result?.message)
    }
  }

  const coloumns = [
    {
      name: "Item",
      selector: (row) => titleCaseWord(row?.itemName),
      sortable: true,

      left: true, // Center aligns the column

    },
    {
      name: "HSN SAC",
      selector: (row) => row?.hsnSacCode? row?.hsnSacCode?.toUpperCase():'' ,
      sortable: true,

      left: true,
    },
    {
      name: "Rate",
      selector: (row) => parseFloat(row?.unitPrice)?.toFixed(2),
      sortable: true,

      right: true,
    },
    {
      name: "Qty",
      selector: (row) => parseFloat(row?.quantity)?.toFixed(2),
      sortable: true,

      center: true,
    },
    {
      name: "Disc",
      selector: (row) => parseFloat(row?.discount)?.toFixed(2),
      sortable: true,

      right: true,
    },
    {
      name: "GST",
      selector: (row) => parseFloat(row?.cgst + row?.sgst + row?.igst)?.toFixed(2),
      sortable: true,

      right: true,
    },
    {
      name: "Amount",
      selector: (row) => parseFloat(row?.total)?.toFixed(2),
      sortable: true,

      right: true,
    },
    {
      name: "Actions",
      selector: (row) => {
        return (
          <div className="flex justify-center items-center gap-2">
            <Tooltip content="Edit" placement="top" arrow animation="shift-away">
              <>
                <SPKBTNEdit onClick={() => { console.log('XXXXXXXXXXXXXX'); setEditMedicine(row) }} width="w-10" />
                <SPKBTNNTDelete onClick={() => { handleDeleteItem(row) }} width="w-10" />

              </>
            </Tooltip>
          </div>
        );
      },
      sortable: false,

      center: true,
    },
  ];


  const onSave = async () => {
    const userConfirmed = await confirmAction("Save the invoice?");

    if (userConfirmed) {
      const newData = formData
      newData.discount = formData?.itemKart?.reduce((cum, item) => cum + (item.discount || 0), 0)


      const result = await handleSaveInvoice({ billSummary: formData })
      if (!result?.status) toast.error(result?.message)
      else {
        setFormData(result?.data?.result)
        const savedInvoice = result?.data?.result
        const PaymentEntry = {
          prefix:savedInvoice?.supplierDetails?.displayId?.split('-')?.slice(0,3)?.join('-'),
          companyId: savedInvoice?.supplierDetails?._id || '',
          branchId: savedInvoice?.supplierDetails?._id || '',
          partyId: savedInvoice?.recipientDetails?._id || '',
          invoice: [{
            invoiceId: savedInvoice?._id,
            displayId: savedInvoice?.invoiceDetails?.displayId,
            amount: savedInvoice?.totalAmount?.totalValue
          }],
          type:'credit',
          accountHead: 'Sales',
          b2bDetails: [
  
          ],
          date: new Date()?.toISOString(),
          autoNarration: 'savedInvoice?.invoiceDetails?.displayId',
          narration: savedInvoice?.invoiceDetails?.displayId,
          amount: savedInvoice?.totalAmount?.totalValue,
        }
   
      
 
      console.log(result, 'result from payment ')
      const accountsEntry = await createEditSalesEntry(PaymentEntry)
      console.log(accountsEntry, 'accountsEntry')
      if (result.status) {
        setPrint(true)

        const acceptPayment = await confirmAction("Make payment now ??");

        if (acceptPayment) {
          openPaymentScreen({ billSummary: formData })
        }
      }
    }

    } else {

    }
     
  };

  return (
    <>
      <Toaster />
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2   -translate-y-1/2 z-[9999] max-w-max"
      />
      <div className='md:container rounded-md border-[1px] relative text-sm  dark:border-darkSecondary border-lightBorderColor md:mx-auto min-h-[100vh]   flex flex-col w-full justify-start    dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
        <div className='w-full font-semibold bo rder  py-5 flex justify-between   rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
          <p>{`${state?.invoiceDetails?.displayId ? 'Edit' : 'New'}`}  Invoice </p>
          <p className='text-cyan-800'>{`${state?.invoiceDetails?.displayId ? state?.invoiceDetails?.displayId : ''}`}   </p>
        </div>
        <div className='w-full flex justify-end  gap-4 bo rder-[1px]   dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
          <HandleInvoice medicince={editMedicine} saveItem={updateBillItems} />
        </div>
        <div className='w-full flex justify-end    rounded-lg md:mx-auto px-0 md:px-8 h-auto  '>
          <div className='border-[1px]  w-full dark:border-darkSecondary border-lightBorderColor'>
            <SpkDataTable showSummary={true} header={false} onChangePage={updateTablenew} subHeaderComponent={<></>} pagination={false} updateTable={updateTable} columns={coloumns} />
          </div>
        </div>
        <div className=' '>
          <div className='w-full flex justify-end gap-4 bor der-[1px]   dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
            {/* <BillFooter billsummary={formData} /> */}
          </div>
          <div className='w-full flex justify-end gap-4 b order-[1px] py-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
            <SPKBTNCancel onClick={() => openInvoiceList()} />
            {!print ? <SPKBTNSave onClick={onSave} /> :
              <> <SPKButtonPayment onClick={() => openPaymentScreen({ billSummary: formData })} text='Payment' />
                <SPKBTNPrint onClick={() => { console.log(formData, 'going to print'); handleViewinvoiceInvoice(formData) }} text='Print ' /> </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditInvoice
