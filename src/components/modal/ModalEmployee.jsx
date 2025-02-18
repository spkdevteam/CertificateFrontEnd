import React from 'react'
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import useDarkmode from '../../Hooks/useDarkMode';
import profile from "../../assets/images/avatar/profile.jpg"

function ModalEmployee() {

    const [isDark] = useDarkmode()
    return (
        <div>
            <Modal
                title="Create New Employee"
                label="Open Employee Modal "
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
                <h4 class="font-semibold  text-lg  px-4 py-2 text-lightModalHeaderColor">
                    Personal Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Branch  <span className="text-red-500">*</span>
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
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Job Role  <span className="text-red-500">*</span>
                            </p>
                            <select name="jobRole" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            >
                                <option>--Select Job Role--</option>
                                <option>Chief Doctor</option>
                                    <option value="dutyDoctor">Duty Doctor</option>
                                    <option value="dentalAssistant">Dental Assistant</option>
                                    <option value="fellowMember">Fellow Member</option>
                                    <option value="frontDeskOfficer">Front Desk Officer</option>
                                    <option value="dentalTechnician">Dental Technician</option>
                                    <option value="storeManager">Store Manager</option>
                                    <option value="floorManager">Floor Manager</option>
                                    <option value="accountManager">Account Manager</option>
                                    <option value="assistantManager">Assistant Manager</option>
                                    <option value="manager">Manager</option>
                                    <option value="specialistDoctor">Specialist Doctor</option>
                                    <option value="financeManager">Finance Manager</option>
                                    <option value="consultant">Consultant</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Full Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Enter Full Name"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Email <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter Email"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Contact <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="contact"
                                type="text"
                                placeholder="Enter Branch Contact"
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
                    
                   
                    <div className=" col-span-2">
                        <label >
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Address <span className="text-red-500">*</span>
                            </p>
                        </label>
                        <textarea
                            className={` form-control outline-none w-[100%]  rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                            placeholder="Enter Address"
                            // value={note}
                            rows={1}

                        // onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Zip/ Postal code <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="age"
                                type="text"
                                placeholder="Enter Zip Code"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>

                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Country  <span className="text-red-500">*</span>
                            </p>
                            <select name="country" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value=""> Select Country</option>
                                <option value="india"> India</option>
                                <option value="australia">Australia</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                State  <span className="text-red-500">*</span>
                            </p>
                            <select name="state" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value=""> Select Country</option>
                                <option value="westBengal"> West Bengal</option>
                                <option value="telangana">Telangana</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                City  <span className="text-red-500">*</span>
                            </p>
                            <select name="city" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value=""> Select Country</option>
                                <option value="hyderabad"> Hyderabad</option>
                                <option value="asansol">Asansol</option>
                            </select>
                            {/* {<p className="text-red-600  text-xs">{formDataErr.gender}</p>} */}
                        </label>
                    </div>


                </div>

                <h4 class=" font-semibold text-lg mt-3 px-4 py-2 text-lightModalHeaderColor">
                    Corporate Details

                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                   
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                PAN Number <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="panNumber"
                                type="text"
                                placeholder="Enter PAN Number"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Aadhaar Number<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="aadhaarNumber"
                                type="text"
                                placeholder="Enter Aadhaar Number"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            Emergency Contact <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="emergencyContact"
                                type="text"
                                placeholder="Enter Emergency Contact"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
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

                </div>

            </Modal>
        </div>

    )
}

export default ModalEmployee