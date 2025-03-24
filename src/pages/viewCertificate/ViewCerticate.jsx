import { useEffect, useState } from "react"
import CerticateView from "../../components/ViewCertificate/CerticateView"
import SearchCertificate from "../../components/ViewCertificate/SearchCertificate"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import LandingPageCertificate from "./LandingPageCertificate"
import image1 from "../../assets/emirates.png"
const ViewCertificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const{viewCertificate}=useCertificatehook()


   const handleSelecteCertificate = async (certificateNumber) => {
    console.log("certificateNumberParent",certificateNumber);
    
        if (!certificateNumber) return; // Prevent empty calls
        
        console.log("API Call Triggered for Certificate:", certificateNumber); // Debugging

    
          

        try {
            const certificateDetails = await viewCertificate({ certificateNumber });
    
            if (certificateDetails) {
                console.log("Certificate Details:", certificateDetails);
                setSelectedCertificate(certificateDetails);
            } else {
                console.log("No certificate found for:", certificateNumber);
                setSelectedCertificate(null);
            }
        } catch (error) {
            console.error("Error fetching certificate details:", error);
        }
    };
    
//    useEffect(() => {
//         if (selectedCertificate && selectedCertificate.certificateNumber) {
//             console.log(selectedCertificate, "Selected Certificate Updated");
//         }
//     }, [selectedCertificate]);

useEffect(() => {
    if (selectedCertificate?.certificateNumber) {
        console.log("Selected Certificate Updated:", selectedCertificate);
    }
}, [selectedCertificate?.certificateNumber]); // ✅ Now only runs when certificateNumber changes

    
    


    return (
        <div className="w-full h-full bg-white flex justify-center overflow-scroll items-center">
            <div className="lg:container flex flex-col gap-2">

               
                <div className="w-full flex justify-start flex-col items-start  rounded-md shadow-xl  ">

                    <LandingPageCertificate />
                    <SearchCertificate onSelect={handleSelecteCertificate} />
                </div>
                 
                <div className="w-full   rounded-md shadow-xl  ">
                    <CerticateView value={selectedCertificate} />
                </div>




            </div>

        </div>
    )
}


export default ViewCertificate