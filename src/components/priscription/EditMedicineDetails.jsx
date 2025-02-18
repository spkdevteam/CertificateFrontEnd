import { useEffect, useState } from "react";
import medicineFrequencies from "../../constant/constant";
import medicineInstruction from "../../constant/medicineInstructions";
import SPKBTNSave from "../../common/Button/SPKBTNSave";

const EditMedicineDetails = ({ selectedMedicine, handleSubmitService, }) => {
    const [formData, setFormData] = useState({})
    const [activeFocus, setActivefocus] = useState('')
    useEffect(() => {
        setFormData(selectedMedicine)
    }, [selectedMedicine])

    const handleChange = (e) => {

        const { name, value } = e.target
        const pattern = medicineFrequencies?.filter((item) => item.pattern == value)[0]

        setFormData((prev) => ({
            ...prev,
            [name]: ['dosage', 'duration'].includes(name) && !isNaN(parseInt(value)) ? parseInt(value) : !['dosage', 'duration'].includes(name) ? value: prev[name],
            timing: name == 'freequency' ? pattern?.have : prev.timing
        }))
    }

    return (
        <>
            <table className="min-w-full table-auto border-collapse border   border-opacity-45 border-gray-500">
                <thead className=" ">
                    <tr>
                        <th className="w-3/12 px-4 py-2 text-left font-medium   bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Drug Name <span className="text-red-500">*</span>
                        </th>
                        <th className="w-2/12 px-4 py-2 text-left font-medium  bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Dosage <span className="text-red-500">*</span>
                        </th>
                        <th className="w-2/12 px-4 py-2 text-left font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Frequency <span className="text-red-500">*</span>
                        </th>
                        <th className="w-2/12 px-4 py-2 text-left font-medium    bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Instruction
                        </th>
                        <th className="w-2/12 px-4 py-2 text-right font-medium   bg-transparent outline-none focus:outline-none border-opacity-45 border-cyan-900">
                            Duration (days) <span className="text-red-500">*</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" ">
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500 ">
                            <input
                                value={formData?.drugName}
                                onChange={(e) => handleChange(e)}
                                name="drugName"
                                className="w-full px-2 bg-lightBgInputColor dark:bg-darkIconAndSearchBg py-1 border rounded-md   outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border   border-opacity-45 border-gray-500 ">
                            <input
                                value={formData.dosage}
                                onChange={(e) => handleChange(e)}
                                name="dosage"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500">
                            <select
                                value={formData.freequency}
                                onChange={(e) => handleChange(e)}
                                name="freequency"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            >
                                
                                {medicineFrequencies?.map((option, idx) => (
                                    <option key={idx} value={option.pattern}>
                                        {option.pattern} {option.have}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="px-4 py-2 border h-10 relative border-opacity-45 border-gray-500">
                            {/* Input Field */}
                            <input
                                value={formData.instruction}
                                onClick={() => setActivefocus('instruction')}
                                onChange={(e) => handleChange(e)}
                                name="instruction"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />

                            {/* Dropdown List */}
                            {activeFocus === 'instruction' && medicineInstruction?.length > 0 && (
                                <ul className="absolute left-0 top-full mt-1 w-full bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 shadow-lg rounded-md z-50">
                                    {medicineInstruction.map((inst, index) => (
                                        <li key={index}
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, instruction: inst }));
                                                setActivefocus('');
                                            }}
                                            className="px-2 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            {inst}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </td>

                        <td className="px-4 py-2 border  border-opacity-45 border-gray-500  text-right">
                            <input

                                value={formData.duration}
                                onChange={handleChange}
                                name="duration"
                                placeholder="in days"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg  outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className=' '>
                        <td colSpan="1" className="px-4 py-2  first-line:-b border-gray-300">
                            Medication Note:
                        </td>
                        <td colSpan="43" className="px-4 py-2  -b border-gray-300">
                            <textarea
                                value={formData.note}
                                onChange={handleChange}
                                name="note"
                                autoComplete="off"
                                className="w-full px-2 py-1 border rounded-md bg-lightBgInputColor dark:bg-darkIconAndSearchBg outline-none focus:outline-none border-opacity-45 border-gray-500"
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="flex flex-wrap items-center px-4 pb-4">

                <div className="w-full flex justify-end">
                    <SPKBTNSave onClick={() => handleSubmitService(formData)} text='Submit & Add More' />
                </div>
            </div>
        </>

    )
}

export default EditMedicineDetails