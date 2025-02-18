import React from 'react'
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import useDarkmode from '../../Hooks/useDarkMode';

function ModalAllProcedure() {

    const [isDark] = useDarkmode()
    return (
        <div>
            <Modal
                title="Create New Procedure"
                label="Open Procedure Modal"
                labelClass="btn-outline-dark"
                uncontrol
                className="max-w-4xl"
                scrollContent
                footerContent={
                    <div className="flex gap-2">
                        <Button
                            text="Cancel"
                            // className="border bg-red-300 rounded px-5 py-2"
                            className="bg-lightmodalBgBtn text-lightmodalbtnText hover:bg-lightmodalBgBtnHover hover:text-white  px-4 py-2 rounded"
                            onClick={() => {
                                alert("Cancelled");
                            }}
                        />
                        <Button
                            text="Accept"
                            // className="border bg-blue-gray-300 rounded px-5 py-2"
                            className={` ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                            onClick={() => {
                                alert("Accepted");
                            }}
                        />

                    </div>

                }
            >
                <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                Treatment Procedure Details

                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Department  <span className="text-red-500">*</span>
                            </p>
                            <select name="department" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>Select Department</option>
                                <option value="department1"> Department 1</option>
                                <option value="department2">Department 2</option>
                                <option value="department3">Department 3</option>
                                <option value="department4"> Department 4</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Service  <span className="text-red-500">*</span>
                            </p>
                            <select name="service" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>--Select Branch--</option>
                                <option value="service1"> Service 1</option>
                                <option value="service2">Service 2</option>
                                <option value="service3">Service 3</option>
                                <option value="service4">Service 4</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Procedure  Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="procedureName"
                                type="text"
                                placeholder="Enter Procedure  Name"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className="col-span-3">
                        <label style={{ marginBottom: "4px" }}>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Description <span className="text-red-500">*</span>
                            </p>
                        </label>
                        <textarea
                            className={` form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                            placeholder="Enter Description Here"
                            // value={note}
                            rows={3}

                        // onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>



                </div>





            </Modal>
        </div>

    )
}

export default ModalAllProcedure