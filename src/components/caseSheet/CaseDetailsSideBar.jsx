
import React from 'react'

function CaseDetailsSideBar({activeCaseSheet}) {
    return (
        <>
            <div className="pt-5 xl:w-[30%] md:w-2/5 w-[100%]">

                {

                    activeCaseSheet?.cheifComplaints?.length ?
                        <>
                            <div className="text-lightBtntext text-xl font-bold mb-3">Chief Complaints</div>
                            <ul className=" text-gray-700 px-5 text-base list-disc">


                                {
                                    Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.cheifComplaints?.map((Complaint, index) => {

                                        return <li key={index} >
                                            <span className="font-bold">{...Complaint?.complaints?.map((item) => item?.compId?.complaintName)}</span> in relation to{" "}
                                            <span className="font-bold">{...Complaint?.tooth?.join(',')}</span>
                                        </li>
                                    })
                                }


                            </ul>
                            <div className="border-b my-8"></div>
                        </>
                        : ''
                }



                {
                    activeCaseSheet?.clinicalFindings?.length ?
                        <>
                            <div className="text-lightBtntext text-xl font-bold mb-3">On Examination</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">





                                <span className="font-bold">
                                    {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.clinicalFindings?.map((finding) => {

                                        return (
                                            <li>

                                                <span className="font-bold">{finding?.findings?.map((item) => { return item?.findId?.findingsName })}</span> in relation to{" "}
                                                <span className="font-bold">{finding?.tooth?.join(',')}</span>
                                            </li>)

                                    })}
                                </span>
                            </ul>
                            <div className="border-b my-8"></div>
                        </> : ''
                }

                {
                    activeCaseSheet?.services?.length ?
                        <>
                            <div className="text-lightBtntext text-xl font-bold mb-3">Diagnosis</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <span className="font-bold">
                                    {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.services?.map((serv) => {

                                        return (
                                            <li>
                                                <span className="font-bold">{serv?.service.serviceName}</span> in relation to{" "}
                                                <span className="font-bold">{serv?.tooth?.join(',')}</span>
                                            </li>)

                                    })}
                                </span>
                            </ul>
                            <div className="border-b my-8"></div>
                        </>
                        : ''
                }

                {
                    activeCaseSheet?.procedures?.length ?
                        <>
                            <div className="text-lightBtntext text-xl font-bold mb-3">Proposed Treatment Plan</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                <span className="font-bold">
                                    {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.procedures?.map((proc) => {

                                        return (
                                            <li>
                                                <span className="font-bold">{proc?.procedure?.map((c) => c?.procedId?.procedureName)}</span> in relation to{" "}
                                                <span className="font-bold">{proc?.tooth?.join(',')}</span>
                                            </li>)

                                    })}
                                </span>
                            </ul>
                            <div className="border-b my-8"></div>
                        </>
                        : ''
                }

                {
                    activeCaseSheet?.investigation?.length ?
                        <>
                            <div className="text-lightBtntext text-xl font-bold mb-3">Investigation</div>
                            <ul className="px-5 text-gray-700 text-base list-disc">
                                {Object.keys(activeCaseSheet).length > 0 && activeCaseSheet?.investigation?.map((proc) => {

                                    return (

                                        <li>
                                            <span className="font-bold">{proc.fileType}</span>
                                        </li>
                                    )
                                })}

                            </ul>
                        </>
                        : ''
                }
            </div>

            <div className="border-r mt-5 border-[#F6C000] border-dashed hidden md:block mx-9"></div>
        </>
    )
}

export default CaseDetailsSideBar
