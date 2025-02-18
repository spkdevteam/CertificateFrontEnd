import { useEffect, useState } from "react";
import SPKBTNCancel from "../../common/Button/SPKBTNCancel";
import SPKBTNSave from "../../common/Button/SPKBTNSave";
import { Select } from "@headlessui/react";
import SPKButtonPayment from "../../common/Button/SPKButtonPayment";
import SPKBTNPrint from "../../common/Button/SPKBTNPrint";
import SPKBTNLoading from "../../common/Button/SPKBTNLoading";
import useAccountsHooks from "../../Hooks/useAccountsHooks";
import useActivePatientSlice from "../../Hooks/useActivePatientSlice";

const SPKCMPPayment = ({ handlePayment = () => alert('no functionality assigned'), includePrevious, outStanding = [], formData, handleChange = () => { }, close }) => {
    const [savePayment, setSavePayment] = useState('Save');
    const { activePatient, activeBranch } = useActivePatientSlice();
    const { printVoucher } = useAccountsHooks();

    useEffect(() => {
        if (formData?.saveStatus) {
            setSavePayment('print');
        } else {
            setSavePayment('save');
        }
    }, [formData?.saveStatus]);

    return (
        <div className="w-full h-full flex flex-col text-sm ">
            <div className={`${includePrevious ? '' : 'w-full'} text-xs h-full overflow-scroll rounded-md shadow-lg border border-gray-600 border-opacity-30 p-4`}>
                <h2 className="font-bold mb-6 text-start">Payment Details</h2>
                <div className="w-full mb-2">
                   <div  className="w-full flex justify-between  ">
                   <label className="block  font-medium text-gray-700 mb-1">
                        Amount 
                    </label>
                    {formData?.estimateTotal ? <h1 className="font-medium">Estimated Total  {formData?.estimateTotal || ''}/-</h1>:''}
                   </div>
                    <input
                        type="text"
                        placeholder="Enter amount"
                        value={formData?.amount}
                        name="amount"
                        onChange={(e) => handleChange(e)}
                        className="w-full p-3 bg-white bg-opacity-5 outline-none rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="w-full mb-2">
                    <label className="block font-medium text-gray-700 mb-1">Payment Mode</label>
                    <select
                        placeholder="Select The Payment"
                        name="accountHead"
                        value={formData?.accountHead}
                        onChange={(e) => handleChange(e)}
                        className="w-full outline-none p-3 bg-white bg-opacity-5 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option className="bg-white dark:bg-darkSecondary outline-none" value="cash">Cash</option>
                        <option className="bg-white dark:bg-darkSecondary outline-none" value="card">Card</option>
                        <option className="bg-white dark:bg-darkSecondary outline-none" value="upi">UPI</option>
                    </select>
                </div>
                <div className="w-full mb-2">
                    <label className="block font-medium text-gray-700 mb-1">Reference number</label>
                    <input
                        type="text"
                        placeholder="Reference Number"
                        value={formData?.transactionReferance}
                        name="transactionReferance"
                        onChange={(e) => handleChange(e)}
                        className="w-full p-3 bg-white bg-opacity-5 outline-none rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="w-full mb-2">
                    <label className="block font-medium text-gray-700 mb-1">Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        value={formData?.narration}
                        name="narration"
                        onChange={(e) => handleChange(e)}
                        className="w-full p-3 bg-white bg-opacity-5 outline-none rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="w-full gap-4 mt-4 flex flex-col sm:flex-row justify-end">
                    <SPKBTNCancel onClick={() => close()} text='Close' />
                    {
                        savePayment === 'print' ?
                            <SPKBTNPrint onClick={() => printVoucher({ element: 'receipt', data: { data: formData, patient: activePatient, branch: activeBranch, due: outStanding } })} text='View' /> :
                            savePayment === 'save' ?
                                <SPKButtonPayment text='Pay' onClick={() => { handlePayment(); setSavePayment('pending') }} /> :
                                <SPKBTNLoading text='' />
                    }
                </div>
            </div>
        </div>
    );
}

export default SPKCMPPayment;