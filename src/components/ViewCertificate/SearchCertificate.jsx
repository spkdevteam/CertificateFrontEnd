import { useEffect, useState } from "react"
import SPKBTNSave from "../../common/Button/SPKBTNSave"
import SPKInputText from "../../common/Input/SPKInputText"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import SPKDropDownSearchBox from "../Imported/SPKDropDownSearchBox"


const SearchCertificate = ({onSelect}) => {

    const [selectedCertificate, setSelectedCertificate] = useState(null);


    const handleSelectCertificate = (item) => {
        console.log("Selected Certificate Number:", item);
        setSelectedCertificate(item);
        if (onSelect) {
            onSelect(item );  // Send to parent
        }

      };
     
 
    return (
        <div className="w-full h-full flex justify-end items-end  gap-4 p-4 ">
           <div className="h-10 w-1/2">
           {/* <PainScale startRange={10} endRange={20} value={12} name="pain"/>  */}
           </div>

            <div className='flex flex-col gap-2'>
                <label className='text-gray-700 font-medium'>Certificate Number</label>
                <SPKDropDownSearchBox value={selectedCertificate}  name="certificateNumber" className="border p-2" single={false} onSelect={handleSelectCertificate} />
            </div>


        </div>

    )
}

export default SearchCertificate


