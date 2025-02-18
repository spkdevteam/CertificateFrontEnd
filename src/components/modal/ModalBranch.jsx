import React from 'react'
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import useDarkmode from '../../Hooks/useDarkMode';
import profile from "../../assets/images/avatar/profile.jpg"
import Tooltip from '../ui/Tooltip';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { BsFillPencilFill } from "react-icons/bs";


function ModalBranch() {

    const [isDark] = useDarkmode()
    return (
        <div>
            <Modal
                title="Create New Branch"
                label="Open branch Modal"
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
                    Branch Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Branch Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="branchName"
                                type="text"
                                placeholder="Enter Branch Name"
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
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
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
                                placeholder="Enter Branch Contact "
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" md:col-span-2">
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

                <h4 class="font-medium text-lg mt-3 px-4 py-2 text-lightModalHeaderColor">
                    Corporate Details

                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden p-4">
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Incorporation Name <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="incorporationName"
                                type="text"
                                placeholder="Enter Incorporation Name"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
                    <div className=" ">
                        <label>
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                CIN Number <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="cinNumber"
                                type="text"
                                placeholder="Enter CIN Number"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>
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
                                GST Number<span className="text-red-500">*</span>
                            </p>
                            <input
                                name="gstNumber"
                                type="text"
                                placeholder="Enter GST Number"
                                className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                            />
                        </label>
                    </div>


                    <div className='flex flex-col flex-wrap relative'>
                        <label htmlFor="imageInput" className="cursor-pointer ">
                            <img src={profile} className=' w-24 h-24  object-cover border-[3px] border-[#ffffff] shadow-lg' alt="" />
                        </label>

                        <div className='border flex items-center justify-center w-6 h-6 rounded-[50%] bg-white shadow-lg absolute top-[-0.6rem] left-[5.2rem]'>
                            <Link to=""
                                title='Change Avatar'
                            >
                                <BsFillPencilFill className='text-xs text-[#99A1B7] hover:text-lightHoverBgBtn' />

                            </Link>
                        </div>
                        <div className='border flex items-center justify-center w-6 h-6 rounded-[50%] bg-white shadow-lg absolute bottom-[3.2rem] left-[5.1rem]'>
                            <Link to=""
                                title='Change Avatar'
                            >
                                <RxCross2  className='text-xs text-[#99A1B7] hover:text-lightHoverBgBtn' />

                            </Link>
                        </div>

                        <input
                            id="imageInput"
                            type="file"
                            className="hidden"
                            accept="image/*"
                        // onChange={(e) => {
                        //     handleAvatar(e);
                        // }}
                        />
                        <span style={{ color: "red", fontSize: "0.7em" }}>
                            {/* {<p className="text-red-600 text-xs pt-6 text-center">{formDataErr?.avatar}</p>} */}
                        </span>
                        <label
                            htmlFor="imageInput"
                            className="text-sm mt-5 w-24  text-center cursor-pointer"
                        >
                            Upload Patient Photo
                        </label>{" "}
                    </div>


                </div>

            </Modal>
        </div>

    )
}

export default ModalBranch