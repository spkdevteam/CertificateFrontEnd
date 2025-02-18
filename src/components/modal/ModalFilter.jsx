import React from 'react'
import useDarkmode from '../../Hooks/useDarkMode'

function ModalFilter() {
    const [isDark] = useDarkmode()
    return (
        < div className='grid grid-cols-1'>
            <div className=" w-[20rem] h-[100%] shadow-lg border border-lightborderInputColor dark:border-darkSecondary rounded-lg bg-white dark:bg-darkAccent">
                {/* Header */}
                <div className="px-7 py-4">
                    <div className={`text-lg ${isDark ? "text-white" : "text-black"} font-bold`}>Filter</div>
                </div>
                {/* Separator */}
                <div className="border-t border-lightborderInputColor dark:border-darkSecondary"></div>
                {/* Content */}
                <div className="px-7 py-5">
                    {/* Input group */}
                    <div className="mb-5 ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Column Name:  <span className="text-red-500">*</span>
                            </p>
                            <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>--Select Branch--</option>
                                <option value="sreeDentalHospital"> Sree Dental Hospital</option>
                                <option value="asianDentalClinic">Asian Dental Clinic</option>
                                <option value="kosmoDentalClinic"> Kosmo Dental Clinic</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    {/* Input group */}
                    <div className="mb-5 ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Column Name:  <span className="text-red-500">*</span>
                            </p>
                            <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>--Select Branch--</option>
                                <option value="sreeDentalHospital"> Sree Dental Hospital</option>
                                <option value="asianDentalClinic">Asian Dental Clinic</option>
                                <option value="kosmoDentalClinic"> Kosmo Dental Clinic</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                   
                    {/* Actions */}
                    <div className="flex justify-end">
                        <button
                            type="reset"
                            className="bg-lightmodalBgBtn text-lightmodalbtnText hover:bg-lightmodalBgBtnHover dark:bg-darkbgResetClr dark:text-darkTextResetClr font-semibold me-2 hover:text-white  px-4 py-2 rounded"
                            data-kt-menu-dismiss="true"
                            data-kt-user-table-filter="reset"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className={` ${isDark ? "bg-darkBtn  text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} font-semibold px-4 py-2 rounded`}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ModalFilter