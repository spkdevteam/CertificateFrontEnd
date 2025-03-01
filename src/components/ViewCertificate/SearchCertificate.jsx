// import { useState } from "react"
// import SPKBTNSave from "../../common/Button/SPKBTNSave"
// import SPKInputText from "../../common/Input/SPKInputText"
// import useCertificatehook from "../../Hooks/useCertificateHooks"
// import SPKDropDownSearchBox from './../../common/SPKSearchBOx/SPKDropDownSearchBox';


// const SearchCertificate = ({onChange}) => {
//     const  [certificateNUmber,setCertificateNUmber] = useState('')
//     const {viewCertificate} = useCertificatehook()
//     const selectedCertificate =async ()=>{
//       const result = await viewCertificate({certificateNumber:certificateNUmber})
//       onChange(result)
//     } 
 
//     return (
//         <div className="w-full h-full flex justify-end items-end  gap-4 p-4 ">
//             <div className='flex flex-col gap-2'>
//                 <label className='text-gray-700 font-medium'>Certificate Number</label>
//                 {/* <SPKDropDownSearchBox value={certificateNUmber} onChange={(e)=>setCertificateNUmber(e?.target?.value)} name={'certificateNumber'} placeHolder={'Certificate'} className='border  p-2  ' /> */}
//                 <SPKDropDownSearchBox  name="certificateNumber" onSelect={handleCertificateSelect} className="border p-2"/>
//             </div>

//             {/* <SPKBTNSave onClick={()=>selectedCertificate()} text="View " /> */}

//         </div>

//     )
// }
// export default SearchCertificate


import { useState } from "react";
import SPKDropDownSearchBox from "../../common/SPKSearchBOx/SPKDropDownSearchBox";
import getCertificateBySuggestion from "../../services/certificate/getCertificateBySuggestion";

const SearchCertificate = ({ onChange }) => {
    const [certificateNumber, setCertificateNumber] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Fetch suggestions when user types
    const handleSearch = async (searchKey) => {
        if (!searchKey) {
            setSuggestions([]); // Clear suggestions when input is empty
            return;
        }
        const result = await getCertificateBySuggestion({ searchKey });
        setSuggestions(result || []);
    };

    return (
        <div className="w-full h-full flex justify-end items-end gap-4 p-4">
            <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Certificate Number</label>
                <SPKDropDownSearchBox 
                    name="certificateNumber"
                    className="border p-2"
                    onSearch={handleSearch}  // Fetch suggestions dynamically
                    options={suggestions}   // Pass fetched options to dropdown
                    onSelect={(selected) => {
                        setCertificateNumber(selected?.label);
                        onChange(selected);
                    }}
                />
            </div>
        </div>
    );
};

export default SearchCertificate;
