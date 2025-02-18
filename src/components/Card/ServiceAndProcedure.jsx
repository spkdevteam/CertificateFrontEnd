import React from 'react'
import ToothTaggify from '../Taggify/ToothTaggify'

function ServiceAndProcedure() {

    const departments = [
        { value: "endodontics", label: "Endodontics" },
        { value: "testDepartment", label: "Test Department" },
        { value: "testDepartment1", label: "Test Department 1" },
        { value: "testDepartment2", label: "Test Department 2" },
        { value: "testDepartment3", label: "Test Department 3" },
    ];

    const Service = [
        { value: "rootCanalTreatment", label: "Root Canal Treatment" },
        { value: "toothAlingment", label: "Tooth Alingment" },
        { value: "cavityFillup", label: "Cavity Fillup" },
        { value: "teethCleaning", label: "Teeth Cleaning" },
        { value: "toothWhitening", label: "Tooth Whitening" },
    ];

    return (
        <>
            <div className='md:container md:mx-auto px-0 md:px-8 pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
                <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-3 h-96 shadow-lg'>
                    <div className='py-5 px-3'>
                        <h2 className='text-2xl font-semibold text-lightTextHeading'>Services</h2>
                    </div>
                    <div className='overflow-x-auto overflow-y-hidden'>
                        <table className='min-w-full table-auto'>
                            <thead>
                                <tr>
                                    <th className=' px-4  w-1/6 h-16 font-medium text-start'>Tooth</th>
                                    <th className=' px-4  w-1/6 h-16 font-medium text-start'>Department</th>
                                    <th className=' px-4  w-1/6 h-16 font-medium text-start'>Service</th>
                                    <th className=' px-4  w-1/6 h-16 font-medium text-start'>Rate</th>
                                    <th className=' px-4  w-1/6 h-16 font-medium text-start'>Qty</th>
                                    <th className=' px-4 w-1/6 h-16 font-medium text-start'>Sub Total</th>
                                </tr>
                            </thead>
                            <tbody className='h-auto'>
                                {/* -----To vertically align the content of a cell in a table-- tbody me heght dene se row center me hu jaata ha isilye align top use keye h */}
                                <tr className='align-top'>
                                    <td className='px-3 w-1/6 h-16 text-center relative'>
                                        <div className='w-44 '>
                                            <ToothTaggify />

                                        </div>
                                    </td>
                                    <td className=' px-3 w-1/6 h-16 text-start'>
                                        <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                            <option ></option>
                                            {
                                                departments && departments.length > 0 && departments.map((item, ind) => {
                                                    return (
                                                        <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td className='px-3 w-1/6 h-16 text-center'>
                                        <select name="" className="form-control w-44 outline-none  rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white">
                                            <option ></option>
                                            {
                                                Service && Service.length > 0 && Service.map((item, ind) => {
                                                    return (
                                                        <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td className='px-3 w-1/6 h-16 text-start'>
                                        <input
                                            name="age"
                                            type="text"
                                            placeholder="0.00"
                                            className="form-control outline-none w-40  rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </td>
                                    <td className='px-3 w-1/6 h-16 text-start'>
                                        <input
                                            name="age"
                                            type="text"
                                            placeholder="0.00"
                                            className="form-control outline-none  w-40 rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </td>
                                    <td className='px-3 w-1/6 h-16 text-start'>
                                        <input
                                            name="age"
                                            type="text"
                                            placeholder="0.00"
                                            className="form-control outline-none w-40  rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </td>
                                </tr>

                            </tbody>
                            <tfoot>
                                <tr className='align-top'>
                                    <td colSpan="4" className="pr-4 py-2 w-1/6 h-16 text-end ">
                                        Discount:
                                    </td>
                                    <td colSpan="2" className="px-6 w-1/6 h-16 text-end ">
                                        <input
                                            name="age"
                                            type="text"
                                            placeholder="0.00"
                                            className="form-control outline-none w-96  rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </td>
                                </tr>
                                <tr className='align-top'>
                                    <td colSpan="4" className="pr-4 py-2 w-1/6 h-16 text-end font-semibold ">
                                        Grand Total:
                                    </td>
                                    <td colSpan="2" className="px-6 w-1/6 h-16 text-end ">
                                        <input
                                            name="age"
                                            type="text"
                                            placeholder="0.00"
                                            className="form-control outline-none w-96  rounded-md px-4 py-2 text-end border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                        />
                                    </td>
                                </tr>

                            </tfoot>
                        </table>
                    </div>
                    <div className="flex flex-wrap items-center px-6 pb-4">
                        <div className="w-full text-right">
                            <button
                                className="btn btn-sm bg-lightBgBtn   hover:bg-lightHoverBgBtn mt-1 md:mt-2 px-4 py-2 rounded text-lightBtntext hover:text-white"
                                
                            >
                                Submit & Add More
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ServiceAndProcedure

// < div className = 'overflow-x-auto' >
//     < table className='min-w-full bg-green-600' >
//         <thead>
//             <tr>
//                 <th className='bg-green-300 w-1/6 h-16 text-center'>Tooth</th>
//                 <th className='bg-red-300 w-1/6 h-16 text-center'>Department</th>
//                 <th className='bg-blue-gray-300 w-1/6 h-16 text-center'>Service</th>
//                 <th className='bg-orange-400 w-1/6 h-16 text-center'>Rate</th>
//                 <th className='w-1/6 h-16 text-center'>Qty</th>
//                 <th className='w-1/6 h-16 text-center'>Sub Total</th>
//             </tr>
//         </thead>
//         <tbody className=''>
//             <tr className=''>
//                 <td className='w-1/6 h-16 text-center relative'>
//                     <ToothTaggify />
//                 </td>
//                 <td className='w-1/6 h-16 text-center'>Endodontics</td>
//                 <td className='w-1/6 h-16 text-center'>Root Canal Treatment</td>
//                 <td className='w-1/6 h-16 text-center'>$150</td>
//                 <td className='w-1/6 h-16 text-center'>1</td>
//                 <td className='w-1/6 h-16 text-center'>$150</td>
//             </tr>
//             <tr className=''>
//                 <td className='w-1/6 h-16 text-center'>12</td>
//                 <td className='w-1/6 h-16 text-center'>Orthodontics</td>
//                 <td className='w-1/6 h-16 text-center'>Tooth Alignment</td>
//                 <td className='w-1/6 h-16 text-center'>$200</td>
//                 <td className='w-1/6 h-16 text-center'>2</td>
//                 <td className='w-1/6 h-16 text-center'>$400</td>
//             </tr>
//             <tr className=''>
//                 <td className='w-1/6 h-16 text-center'>13</td>
//                 <td className='w-1/6 h-16 text-center'>General Dentistry</td>
//                 <td className='w-1/6 h-16 text-center'>Teeth Cleaning</td>
//                 <td className='w-1/6 h-16 text-center'>$80</td>
//                 <td className='w-1/6 h-16 text-center'>1</td>
//                 <td className='w-1/6 h-16 text-center'>$80</td>
//             </tr>
//         </tbody>

//     </table >





//                 </div >


