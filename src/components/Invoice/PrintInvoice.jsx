import { CloseButton } from '@headlessui/react'
import React, { useEffect, useRef, useState } from 'react'
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
import BillHeader from './BillHeader'
import AccountSummary from './AccountSummary'
import generatePDF from 'react-to-pdf'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import BillHeaderServiceSector from './billHeader/HeaderForKosmo'
import BillHeaderKosmo from './billHeader/HeaderForKosmo'
import BillWiseOutStandingForInvoice from '../accounts/BillWiseOutStandingForInvoice'
import { wrap } from 'framer-motion'
import SPKHTMLDataTable from '../../common/DataTable/SPKHTMLDataTable'



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

function PrintInvoice() {
  const { activePatient, getBranchDetails } = useActivePatientSlice()
  const isDark = false
  const { openPaymentScreen } = useHandleModal()
  const getMyIcon = useDynamicIcons()
  const EditIcon = getMyIcon('SPKEdit')
  const { handleEditInvoice,
    fetchBillDetails,
    updateItemsToKart,
    CraetTemInvoice,
    handleSaveInvoice,
    deleteItemFromKartHook,
    openInvoiceList } = useInvoiceHooks()
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
  const [print, setPrint] = useState(false)
  const [formData, setFormData] = useState({})
  const printRef = useRef()
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const { closeModal } = useHandleModal()

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
    console.log(formData, 'formDataformDataformDataformData')
  }, [formData])

  useEffect(() => {
    closeModal()
  }, [])

  useEffect(() => {
    //  initialiseForm()
    if (state?._id) {
      setInvoice_id(state?._id)

      setFormData(state)
    }
    else {
      getInvoiceDetails()
    }
  }, [state?._id])


  const updateBillItems = async (billedItem) => {
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
      style: {

        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      left: true, // Center aligns the column
      wrap: true

    },
    {
      name: "HSN SAC",
      selector: (row) => row?.hsnSacCode ? row?.hsnSacCode?.toUpperCase() : '',
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      wrap: true,
      left: true,
    },
    {
      name: "Rate",
      selector: (row) => parseFloat(row?.unitPrice)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },

      right: true,
    },
    {
      name: "Qty",
      selector: (row) => parseFloat(row?.quantity)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },

      center: true,
    },

    {
      name: "Disc",
      selector: (row) => parseFloat(row?.discount)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      total: true,
      right: true,
    },
    {
      name: "Taxable Value",
      selector: (row) => parseFloat(row?.quantity)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      total: true,

      center: true,
    },
    {
      name: "GST%",
      selector: (row) => parseFloat(row?.cgst + row?.sgst + row?.igst)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },

      right: true,
    },
    {
      name: "GST",
      selector: (row) => parseFloat(row?.cgst + row?.sgst + row?.igst)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      total: true,

      right: true,
    },
    {
      name: "Amount",
      selector: (row) => parseFloat(row?.total)?.toFixed(2),
      style: {
        Left: "1px solid rgb(0, 0, 0)",
        Bottom: "1px dashed rgb(0, 0, 0)", // Add left  
      },
      total: true,
      right: true,
    },

  ];


  const onSave = async () => {
    const userConfirmed = await confirmAction("Save the invoice?");

    if (userConfirmed) {

      const result = await handleSaveInvoice({ billSummary: formData })
      if (result.status) {
        setPrint(true)

        const acceptPayment = await confirmAction("Make payment now ??");

        if (acceptPayment) {
          openPaymentScreen({ billSummary: formData })
        }
      }

    } else {

    }
  };

  const handlePrintView = () => {

    generatePDF(printRef, {
      filename: `${state?.invoiceDetails?.displayId}.pdf`,
      pageSize: 'A4',
      margin: { top: 0, bottom: 40, left: 20, right: 20 } // Set margins
    });
  }

  return (
    <>
      <Toaster />
      <ToastContainer
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 h-[100vh]  -translate-y-1/2 z-[9999] max-w-max"
      />
      <div ref={printRef} className=' w-full text-black  overflow-visible   bg-white p-5   md:container rounded-md  -[1px] dark: -darkSecondary px-8      -lightBorderColor md:mx-auto     flex flex-col  justify-between     rounded-b-3xl  '>
        <div className='w-full font-semibold bo rder  py-5 flex justify-between   rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
          <p>{`${state?.invoiceDetails?.displayId ? 'View' : 'View '}`}  Invoice </p>
          <p className='text-cyan-800'>{`${state?.invoiceDetails?.displayId ? state?.invoiceDetails?.displayId : ''}`}   </p>
        </div>
        <div className='w-full flex justify-end gap-4 bor der-[1px]     md:mx-auto  h-auto'>
          <div className='   -black   w-full flex'>
            <BillHeaderKosmo billsummary={formData} />
          </div>
        </div>
        {/* <div className='w-full flex justify-end  gap-4 bo rder-[1px]   dark: -darkSecondary  -lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
          <HandleInvoice medicince={editMedicine} saveItem={updateBillItems} />
        </div> */}
        <div className='w-full flex justify-end   -e  -s    -black  rounded-lg md:mx-auto    h-full  '>

          <SPKHTMLDataTable showSummary={true} isDark={isDark} header={false} onChangePage={updateTablenew} subHeaderComponent={<></>} pagination={false} updateTable={updateTable} columns={coloumns} />

        </div>
        <div className='w-full flex justify-end gap-4   md:mx-auto       h-auto'>
          {/* <BillFooter billsummary={formData} /> */}
        </div>
        <div className='w-full flex flex-col justify-end gap-4    -black     md:mx-auto   h-auto'>
          {/* <AccountSummary billsummary={formData} /> */}
          <BillWiseOutStandingForInvoice patientId={formData?.recipientDetails?._id} />
        </div>
        <div className='w-full flex justify-end  print: print:hidden    gap-4 b order-[1px] py-5 dark: -darkSecondary  -lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
          <SPKBTNCancel onClick={() => openInvoiceList()} />
          <SPKBTNEdit text='Edit' width='w-24' onClick={() => handleEditInvoice(formData)} />
          {!print ? <SPKBTNPrint width={'w-24'} text='Print' onClick={() => handlePrintView()} /> : <> <SPKButtonPayment onClick={() => openPaymentScreen({ billSummary: formData })} text='Payment' />
            <SPKBTNPrint onClick={() => handlePrintView()} text='Print ' /> </>}

        </div>
      </div>
    </>
  )
}

export default PrintInvoice
