import { useEffect, useState } from "react"
import CerticateView from "../../components/ViewCertificate/CerticateView"
import SearchCertificate from "../../components/ViewCertificate/SearchCertificate"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import LandingPageCertificate from "./LandingPageCertificate"

const ViewCertificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState({})
    useEffect(() => {
        console.log(selectedCertificate, '------------------')
    }, [selectedCertificate])

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="lg:container flex flex-col gap-2">

                <div className="w-full h-20 rounded-md shadow-xl  ">
                    <SearchCertificate onChange={setSelectedCertificate} />

                </div>
                <div className="w-full   rounded-md shadow-xl  ">

                    <LandingPageCertificate />
                </div>
                <div className="w-full h-full  rounded-md shadow-xl  ">
                    <CerticateView value={selectedCertificate} />


                </div>




            </div>

        </div>
    )
}


export default ViewCertificate