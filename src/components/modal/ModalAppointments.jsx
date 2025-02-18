import React from 'react'
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import useDarkmode from '../../Hooks/useDarkMode';
import profile from "../../assets/images/avatar/profile.jpg"

function ModalAppointments() {

    const [isDark] = useDarkmode()
    return (
        <div>
            <Modal
                title="Create New Appointment
"
                label="Open Appointments Modal "
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
                    Personal Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                First Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="Enter First Name"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Last Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Enter Last Name"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Age (Yrs) <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="age"
                                type="text"
                                placeholder="Enter Age"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Gender  <span className="text-red-500">*</span>
                            </p>
                            <select name="gender" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value=""> Select</option>
                                <option value="male"> Male</option>
                                <option value="feMale">FeMale</option>
                                <option value="other"> Other</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Blood Group  <span className="text-red-500">*</span>
                            </p>
                            <select name="gender" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value="" > Select Blood Group</option>
                                <option value="a-(+ve)"> A (+ve)</option>
                                <option value="a-(-ve)">A (-ve)</option>
                                <option value="b-(+ve)">B (+ve)</option>
                                <option value="b-(-ve)">B (-ve)</option>
                                <option value="ab-(+ve)">AB (+ve)</option>
                                <option value="ab-(-ve)">AB (-ve)</option>
                                <option value="o-(+ve)">O (+ve)</option>
                                <option value="o-(-ve)">O (-ve)</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Mobile No <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="mobileNo"
                                type="text"
                                placeholder="Enter Mobile No"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                </div>
                <h4 class="font-medium text-lg mt-3 px-4 py-2 text-lightModalHeaderColor">
                    Appointment Details
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Appointment Date<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="appointmentDate"
                                type="date"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Start Time<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="startTime"
                                type="time"
                                placeholder=''
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                End Time<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="endTime"
                                type="time"
                                placeholder=''
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Duty Doctor  <span className="text-red-500">*</span>
                            </p>
                            <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>Select Duty Doctor</option>
                                <option value="drAnilGoud">Dr Anil Goud</option>
                                <option value="drArunVerma">Dr. Arun Verma</option>
                                <option value="drSKGhanty">Dr. S.K Ghanty</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Chair No  <span className="text-red-500">*</span>
                            </p>
                            <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>Select Chair No </option>
                                <option value="sdhHYDCH01">SDH-HYD-CH01</option>
                                <option value="sdhHYDCH02">SDH-HYD-CH02</option>
                                <option value="sdhHYDCH03">SDH-HYD-CH03</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>


                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Dental Assistant<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="dentalAssistant"
                                type="text"
                                placeholder="Enter Dental Assistant"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>


                </div>

                <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                    Medical Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Chief Complaints <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="chiefComplaints"
                                type="text"
                                placeholder="+ Add New Chief Complaints"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Medical History <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="medicalHistory"
                                type="text"
                                placeholder="+ Add New Medical History"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                </div>
                <h4 class="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                    Other Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Patient Group <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="patientGroup"
                                type="text"
                                placeholder=""
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Refered By  <span className="text-red-500">*</span>
                            </p>
                            <select name="branch" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>Select Refered by</option>
                                <option value="DirectWalkIn">Direct Walk-in</option>
                                <option value="otherDentist">Other Dentist</option>
                                <option value="friends/collegue">Friend / Colleague</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                </div>

            </Modal>
        </div>

    )
}

export default ModalAppointments