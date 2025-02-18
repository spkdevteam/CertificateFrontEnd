import React, { useEffect, useState } from 'react'
import medicineFrequencies from '../../constant/constant'
import medicineInstruction from '../../constant/medicineInstructions'
import SPKBTNSave from '../../common/Button/SPKBTNSave'
import SPKBTNInsert from '../../common/Button/SPKBTNInsert'
import taxPercentage from '../../constant/taxPercentage'
import validateMandatoryFields from '../../helper/validateObject'
import toast from 'react-hot-toast'
import { SPKBTNSubmitAndAdd } from '../../common/Button/SPKBTNSubmitAndAdd'

const emptyFormData = {
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
}
const mandatoryField = [  'itemName', 'quantity' , 'unitPrice' , 'taxableValue' ,  'total',]
function HandleInvoice({ medicince, saveItem = () => { alert('no operations assigned ') } }) {
    const [formData, setFormData] = useState({emptyFormData})
    const [activeFocus, setActivefocus] = useState('')

    useEffect(() => {
        
        setFormData(medicince)

    }, [medicince])

useEffect(()=>{
    
},[formData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        let tempItem = {};

        if (name === 'discount' || name === 'unitPrice' || name === 'quantity' || name === 'tax') {
            const tempVal = value
            tempItem = {
                ...formData,
                [name]: isNaN(parseInt(value)) ? 0 : parseInt(value)
            };
        } else {
            tempItem = {
                ...formData,
                [name]: value
            };
        }

        const { discount = 0, unitPrice = 0, quantity = 0, tax = 0 } = tempItem;
        const taxableValue = (unitPrice * quantity) - discount;
        const gst = taxableValue * (tax / 100);


        tempItem = {
            ...tempItem,
            taxableValue: taxableValue,
            cgst: gst / 2,
            sgst: gst / 2,
            total: taxableValue + gst
        };

        

        // Update the form data state
        setFormData((prev) => ({
            ...prev,
            ...tempItem
        }));
    };

    const handleSave = () => {
        const missingFields = mandatoryField.filter((field) => !formData[field]);
        if (missingFields.length > 0) {
            toast.error(`${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} empty`);
            return;
        }
        try {
            saveItem(formData);
            toast.success('Item saved successfully!');
        } catch (err) {
            console.error('Error saving item:', err);
            toast.error('Failed to save item');
        }
    };
    return (
        <div className='w-full h-full '>
            <table className="min-w-full table-auto border-collapse border   border-opacity-45 border-gray-500">
                <thead className=" ">
                    <tr>
                        <th className="w-3/12 px-4 py-2 text-left text-sm font-medium   bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Service   <span className="text-red-500">*</span>
                        </th>
                        <th className="w-2/12 px-4 py-2 text-left text-sm font-medium  bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            HSN SAC 
                        </th>
                        <th className="w-2/12 px-4 py-2 text-left text-sm font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Unit Cost   <span className="text-red-500">*</span>
                        </th>
                        <th className="w-1/12 px-4 py-2 text-left text-sm font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Qty <span className="text-red-500">*</span>
                        </th>
                        <th className="w-1/12 px-4 py-2 text-left text-sm font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Discount 
                        </th>


                        <th className="w-1/12 px-4 py-2 text-left text-sm font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            tax
                        </th>
                        <th className="w-2/12 px-4 py-2 text-right font-medium   bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Total <span className="text-red-500">*</span>
                        </th>
                         
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-xs ">
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.itemName}
                                onChange={(e) => handleChange(e)}
                                name="itemName"
                                placeholder='item / service name'
                                className="w-full px-2 bg-lightBgInputColor dark:bg-darkIconAndSearchBg py-1 border rounded-md   outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.hsnSacCode}
                                onChange={(e) => handleChange(e)}
                                name="hsnSacCode"
                                placeholder='HSN SAC'
                                className="w-full px-2 bg-lightBgInputColor uppercase dark:bg-darkIconAndSearchBg py-1 border rounded-md   outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border   border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.unitPrice}
                                onChange={(e) => handleChange(e)}
                                name="unitPrice"
                                placeholder='0.00'
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border   border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.quantity}
                                onChange={(e) => handleChange(e)}
                                name="quantity"
                                placeholder='1'
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.discount}
                                onClick={() => setActivefocus('instruction')}
                                onChange={(e) => handleChange(e)}
                                name="discount"
                                placeholder='0.00'
                                className="w-full px-2 py-1 border relative rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500 "
                            />

                            {/* <div hidden={!(activeFocus == 'instruction')} className='absolute'>
                                {
                                    medicineInstruction?.map((inst, index) => (<li key={index} onClick={() => { setFormData(prev => ({ ...prev, instruction: inst })); setActivefocus('') }} className='h-10 bg-white bg-opacity-50 cursor-pointer '>{inst} </li>))
                                }

                            </div> */}

                        </td>
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500">
                            <select
                                value={formData?.tax}
                                onChange={(e) => handleChange(e)}
                                name="tax"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            >
                               
                                {taxPercentage?.map((option, idx) => (
                                    <option key={idx} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500  text-right">
                            <input

                                value={formData?.total}
                                onChange={handleChange}
                                name="total"
                                readOnly={true}
                                placeholder="0.00"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg  outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        
                    </tr>
                    <tr className='h-10 w-full   '>
                    <td colSpan={8}  className="px-4 justify-end   py-2 border  border-opacity-45 border-gray-500  text-right">
                            <div className='w-full  flex justify-end items-center'>
                                <SPKBTNSave onClick={() => handleSave()} text='Submit & Add ' />
                             

                            </div>
                        </td>
                    </tr>
                </tbody>
                {/* <tfoot>
                    <tr className=' '>
                        <td colSpan="1" className="px-4 py-2  first-line:-b border-gray-300">
                            Medication Note:
                        </td>
                        <td colSpan="43" className="px-4 py-2  -b border-gray-300">
                            <textarea
                                value={formData?.note}
                                onChange={handleChange}
                                name="note"
                                autoComplete="off"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    )
}

export default HandleInvoice
