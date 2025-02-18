import React, { useEffect } from 'react';
import caseSheetService from '../../services/caseSheetService/caseSheet.service';

const medicalHistoryData = [
    { label: 'Allergies' },
    { label: 'Endocrinal' },
    { label: 'Blood Pressure' },
    { label: 'Bleeding Disorder' },
    { label: 'Fits/Faint/Epilepsy' },
    { label: 'Blood Sugar' },
    { label: 'Gastro Internal' },
    { label: 'Congenital Discover' },
    { label: 'HIV / HBV / Jaundice' },
    { label: 'Genito Urinal' },
    { label: 'Cardio Respiration' },
    { label: 'Medication' },
];


const MedicalHistory = () => {
    return (
        <>
            <div className='md:container md:mx-auto px-0  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
                <div className='flex flex-col border-[1px]  dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 py-10 h-full'>
                    <div className=" border-b-[1px]  dark:border-darkSecondary border-lightBorderColor py-5">
                        <h3 className=" flex flex-col items-start">
                            <span className="text-xl font-bold text-gray-800">Medical History</span>
                        </h3>
                    </div>
                    <div className='overflow-x-auto px-5'>
                        <table className="min-w-full mt-2   ">
                            <tbody className="bg-white dark:bg-darkAccent">
                                {
                                    medicalHistoryData && medicalHistoryData.length > 0 && medicalHistoryData.map((item, ind) => {
                                        return (
                                            <React.Fragment key={ind}>
                                                <tr className="  border-b border-dashed border-lighttableBorderColor">
                                                    <td className="  px-6 py-4 whitespace-nowrap text-left  text-lg  text-tableTextColor">{item.label}</td>
                                                    <td className=" px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">
                                                        <div className="flex items-center ">
                                                            <input
                                                                type="text"
                                                                // className="form-input bg-light-info border rounded "
                                                                className={`px-5 py-2  dark:bg-darkIconAndSearchBg bg-light rounded-lg outline-none`}
                                                                placeholder="Enter Note / Reading Value "
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className=' px-6 py-4 whitespace-nowrap text-center'>
                                                        <label className="flex gap-2 justify-center items-center">
                                                            <input className="form-checkbox scale-150" type="checkbox" name={`${item.label}-toc`} value="1" /> Positive
                                                        </label>
                                                    </td>
                                                    <td className=' px-6 py-4 whitespace-nowrap text-center'>
                                                        <label className="flex  gap-2 justify-center items-center">
                                                            <input className="form-checkbox scale-150" type="checkbox" name={`${item.label}-toc`} value="0" /> Negative
                                                        </label>
                                                    </td>
                                                    <td className=' px-6 py-4 whitespace-nowrap text-center'>
                                                        <label className="flex gap-2 justify-center items-center">
                                                            <input className="form-checkbox scale-150" type="checkbox" name={`${item.label}-toc`} value="" /> Unknown
                                                        </label>
                                                    </td>

                                                </tr>

                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>



                </div>
            </div>

        </>

    );
};

export default MedicalHistory;





// blackBox code

//  <div className="col-span-12 mb-5">
//     <div className="card card-flush h-auto">
//         <div className="card-header pt-7">
//             <h3 className="card-title flex flex-col items-start">
//                 <span className="card-label font-bold text-gray-800">Medical History</span>
//             </h3>
//         </div>

//         <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="card-body h-500px overflow-y-scroll pt-5 mt-2 w-full">
//                 {medicalHistoryData.map((item, index) => (
//                     <div key={index} className="mb-4">
//                         <div className="flex flex-col md:flex-row items-center">
//                             <div className="text-gray-700 font-bold text-sm mr-2 w-full md:w-1/3">
//                                 {item.label}
//                             </div>
//                             <div className="flex items-center mr-5 w-full md:w-1/4">
//                                 <input
//                                     type="text"
//                                     className="form-input bg-light-info border rounded w-full"
//                                     placeholder="Enter Note / Reading Value "
//                                 />
//                             </div>
//                             <div className="flex items-center w-full md:w-1/4 text-right">
//                                 <label className="inline-flex items-center">
//                                     <input className="form-check-input" type="checkbox" name={`${item.label}-toc`} value="1" /> Positive
//                                 </label>
//                             </div>
//                             <div className="flex items-center w-full md:w-1/4 text-right">
//                                 <label className="inline-flex items-center">
//                                     <input className="form-check-input" type="checkbox" name={`${item.label}-toc`} value="0" /> Negative
//                                 </label>
//                             </div>
//                             <div className="flex items-center w-full md:w-1/4 text-right">
//                                 <label className="inline-flex items-center">
//                                     <input className="form-check-input" type="checkbox" name={`${item.label}-toc`} value="" /> Unknown
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="border-t border-dashed my-3"></div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// </div> 









