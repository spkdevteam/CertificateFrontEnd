import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SPKFormClose } from "../../common/Button/SPKFormClose";
import useHandleModal from "../../Hooks/useHandleModal";
import { useSelector } from "react-redux";
import numberToWords from "../../helper/n2W";
import SPKBTNPrint from "../../common/Button/SPKBTNPrint";

const SPKPaymentReceipt = () => {
  const { closeModal } = useHandleModal()
  const { data: receipt, patient, branch, due } = useSelector((state) => state?.modalSlice?.data?.data)

  useEffect(() => {
    console.log(due, 'receipt')
  }, [receipt])



  return (
    <div className="min-h-1/2 m-auto rounded-md bg-white flex-col   dark:bg-darkSecondary dark:text-white   items-center justify-center  p-5 ">
      <div className="h-10 w-full font-semibold    flex justify-between ">
        Print Receipt
        <SPKFormClose onClick={closeModal} />
      </div>
      <div className="max-w-2xl mx-auto border border-gray-300 p-6 shadow-lg rounded-md  ">
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <div>
            <h2 className="text-xl font-bold">MONEY RECEIPT</h2>
            <p className="text-sm">📞 {branch?.contactNumber} | ✉ {branch?.emailContact}</p>
          </div>
          <div className="text-right">
            <h3 className="font-bold">{branch?.name}</h3>
            <p className="text-xs">{branch?.incorporationName}</p>
            <p className="text-xs">{branch?.address}{branch?.city} </p>
            <p className="text-xs">{branch?.state},{branch?.country}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p>NO: {`  ${receipt?.transactionId}`} </p>
          </div>
          <div className="text-right">
            <p>Date: {`  ${receipt?.date?.split('T')[0]?.split('-').reverse().join('-')}`}</p>
          </div>
        </div>

        <div className="mt-4 text-sm">
          <p>Received with thanks from {patient?.firstName} {patient?.lastName} ({patient?.displayId})</p>
          <p className="mt-2">Amount  {`__${receipt?.amount}/-`}</p>
          <p className="mt-2"> In words {`__${numberToWords(receipt?.amount)} Only`} </p>
          <p className="mt-2">For invoices {`__${receipt?.invoice?.map((inv) => inv.displayId.slice(inv.displayId.length - 14))}`}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <p>ACCT. ________________ PAID ________________ DUE ________________</p>
          </div>
          <div className="text-right">
            <p>Branch ________________</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center text-sm">
          <p>Amount = ____________</p>
          <div>
            <p>Received by ____________________</p>
            <p className="mt-2">Authorized Signature ____________________</p>
          </div>
        </div>
      </div>
     <div className="w-full justify-end flex p-2">
      <SPKBTNPrint text="Print" />
     </div>
      
    </div>
  );
};

export default SPKPaymentReceipt;
