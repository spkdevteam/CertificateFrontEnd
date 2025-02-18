import React from 'react'
import logo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"


function Invoice() {
    return (
        <>
            <div className='md:container md:mx-auto px-5 md:px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
                <div className='border-[1px] py-5 dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
                    <div className="flex flex-wrap justify-between w-[100%] ">
                        <div className="px-3 md:px-0">
                            <div className="mb-10">
                                <div className="font-semibold text-gray-700 text-sm">
                                    Invoice No:{" "}
                                    <span className="text-lightBtntext text-base">PR-678E12</span>
                                </div>
                                <div className=" font-semibold text-gray-700 text-sm">
                                    Case ID: <span className="text-lightBtntext text-base">CR-12E71C</span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="font-bold text-lightBtntext text-lg ">Dr. Anil Goud</div>
                                <div className="font-semibold text-gray-700 text-sm ">
                                    MBBS, PGT (Diploma), FCPS
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="font-bold text-lightBtntext text-lg">Chief Dental Supervisor</div>
                            </div>
                        </div>

                        <div className="px-3 md:px-0">
                            <div className="mb-4 flex justify-end ">
                                <img
                                    className="h-12 lg:h-14 "
                                    alt="Logo"
                                    src={logo}
                                />
                            </div>
                            <div className="text-right flex flex-col space-y-2">
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Address:</strong> <span className='text-gray-800 text-base'> Healthcare World, Shristinagar, KSTP, Asansol-713302, W.B, India</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Contact:</strong><span className='text-gray-800 text-base'>+91-3412 556644, +91-9800 444000</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-base ">Email:</strong> <span className='text-gray-800 text-base'> healthcareworld@kosmo.com</span>
                                </div>
                                <div >
                                    <strong className="font-semibold text-gray-700 text-sm ">Website:</strong> <span className='text-gray-800 text-base'>www.healthcareworld.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-y-2 border-dashed border-lightBtntext py-4 justify-between items-center mt-5 w-[100%]">
                        <div className="">
                            <div className=" flex flex-row flex-wrap gap-3">
                                <div className="font-semibold text-gray-700 text-base ">
                                    Patient:{" "}
                                    <span className="text-gray-900  ">Rahul Verma</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base ">
                                    Gender:{" "}
                                    <span className="text-gray-900  ">Male</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base ">
                                    Blood Group:{" "}
                                    <span className="text-gray-900  ">AB (+ve)</span>
                                </div>
                                <div className="font-semibold text-gray-700 text-base">
                                    Age:{" "}
                                    <span className="text-gray-900  ">32 Yrs</span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className=" flex flex-row flex-wrap gap-3">
                                <div className="text-gray-700 text-base font-semibold ">
                                    Date:{" "}
                                    <span className="text-gray-800 ">07 September, 2024</span>
                                </div>
                                <div className="text-gray-700 font-semibold text-base">
                                    Time:{" "}
                                    <span className="text-gray-800 ">10:30 am</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-x-auto '>
                        <table className="w-[100%] mt-7">
                            <thead className="bg-[#C9FEFF] dark:bg-darkBtn dark:text-white">
                                <tr className='border-b border-dashed border-lighttableBorderColor'>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                        Qty/hrs
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                        Unit Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                        Tax
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                        Amount (INR)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-darkAccent">
                                {/** Example rows */}
                                <tr className="border-b border-dashed border-lighttableBorderColor">
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Website Development (Starter Plan)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">1.00</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">7,499.00</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">GST: 18%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">7,499.00</td>
                                </tr>
                                <tr className="border-b border-dashed border-lighttableBorderColor" colSpan={4}>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">
                                        <ul className=" ">
                                            <li>Up to 7 Pages Static Website</li>
                                            <li>Free Domain (.in / .co.in)</li>
                                            <li>Free SSL Certification</li>
                                            <li>Free 3 Business Mail (Webmail)</li>
                                            <li>Free 1 Year SSD Hosting</li>
                                            <li>Mobile & SEO Friendly Design</li>
                                            <li>Unmetered Bandwidth / Space</li>
                                            <li>24/7 Support (Ticket / Chat)</li>
                                            <li>Social Media Integration</li>
                                            <li>Annual Renewal at ₹ 4999/-</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor" colSpan={3}></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-lg text-tableTextColor">Sub Total</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-lg text-tableTextColor">7,499.00</td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor" colSpan={3}></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-lg text-tableTextColor">GST: 18%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-lg text-tableTextColor">1349.82</td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor" colSpan={3}></td>
                                    <td className="px-6 w-28  py-4 whitespace-nowrap text-center font-bold text-lg text-lightBtntext rounded bg-lightBgBtn">Total</td>
                                    <td className="px-6 w-48 py-4 whitespace-nowrap text-center font-semibold text-lg text-lightBtntext rounded bg-lightBgBtn">8848.82 INR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
{/* 
                    <div className='w-[100%] mt-10'>
                        <h3>Terms and Condition</h3>
                        <ul className='mt-2'>
                            <li className='text-sm text-tableTextColor list-disc '>A Proposal / Estimate is the total estimation of project cost which is mutually described by the client to our executive. The proposal / Estimate shouldn't be treated as Invoice
                            </li>
                            <li className='text-sm text-tableTextColor list-disc mt-2'>The Invoice should have a heading mentioning "Invoice" in the header of the bill.
                            </li>
                            <li className='text-sm text-tableTextColor list-disc mt-2'>The validity of this Proposal / Estimate is 30 days from the date of creation.
                            </li>
                            <li className='text-sm text-tableTextColor list-disc mt-2'>The due date for Invoice Payment is 15 days from the date of creation.
                            </li>
                            <li className='text-sm text-tableTextColor list-disc mt-2'>The work on project only starts after signing / acceptance of the Proposal / Estimate by the client
                            </li>
                            <li className='text-sm text-tableTextColor list-disc mt-2'> All dispute are subject to Asansol Jurisdiction.
                            </li>

                            <li className='text-sm text-tableTextColor list-disc mt-8'>Note : <span>Tax is calculating after discount.</span>
                            </li>
                        </ul>

                       

                    </div> */}







                </div>
            </div>

        </>
    )
}

export default Invoice