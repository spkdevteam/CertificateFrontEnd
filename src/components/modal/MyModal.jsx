import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import NewBooking from "../Appointment/booking/NewBooking";
import { useSelect } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import CreatePriscription from "../priscription/CreatePriscription";
import { switchModal } from "../../store/handleModal";
import Loading from "./Loading";
import ViewInvoice from "../Invoice/ViewInvoice";
import SerachPatient from "../patient/SerachPatient";
import useInvoiceHooks from "../../Hooks/useInvoiceHooks";
import Payment from "../accounts/Payment";
import SPKPaymentReceipt from "../accounts/SPKPaymentReceipt";
import SPKFormLedger from "../accounts/SPKFormLedger";
import { ToastContainer } from "react-toastify";
import { div } from "framer-motion/client";

export default function MyModal({ onClose }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = useSelector((state) => state.modalSlice.showModal)
  const DisplayPage = useSelector((state) => state.modalSlice.Component)
  const [data, setData] = useState()
  const dispatch = useDispatch()
  const { createInvoice } = useInvoiceHooks()


  useEffect(() => {
    // setElement(DisplayPage?.element)
    // setData(DisplayPage?.data)
    console.log(DisplayPage)
  }, [DisplayPage])


  function closeModal() {
    dispatch((switchModal(false)));
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full    items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col items-center backdrop-opacity-90 justify-center backdrop-blur-sm            h-full    transform overflow-hidden rounded-2xl bg-white  bg-opacity-5      text-left align-middle shadow-xl transition-all">

                  <div  className="w-full  flex flex-col justify-start items-center h-full    ">
                    {DisplayPage == 'NewBooking' ? <div className="bg-white " ><NewBooking data={data} /></div> :
                      DisplayPage == 'NewPrescription' ? <CreatePriscription data={data} /> :
                        DisplayPage == 'PaientForInvoice' ? <SerachPatient create={createInvoice} /> :
                          DisplayPage == 'Loading' ? <Loading data={data} /> :
                            DisplayPage == 'paymentInterface' ? <Payment data={data} /> :
                              DisplayPage == 'receipt' ? <SPKPaymentReceipt data={data} /> :
                                DisplayPage == 'ledger' ? <SPKFormLedger /> :
                                  DisplayPage == 'Empty' ? <div onClick={()=>closeModal()} className="min-h-1/2 m-auto rounded-md    bg-white flex-col xl:w-10/12 dark:bg-darkSecondary dark:text-white   items-center justify-center  p-5 ">
                                    <div className="h-[5%] w-full font-semibold mb-4   flex justify-between "> <ToastContainer />  </div>  </div> :

                                    DisplayPage == 'invoiceView' ? <ViewInvoice data={data} /> : ''}


                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
