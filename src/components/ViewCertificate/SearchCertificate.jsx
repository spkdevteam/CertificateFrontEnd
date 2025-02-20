import { useState } from "react"
import SPKBTNSave from "../../common/Button/SPKBTNSave"
import SPKInputText from "../../common/Input/SPKInputText"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import PainScale from "../painScale/painscale"


const SearchCertificate = ({onChange}) => {
    const  [certificateNUmber,setCertificateNUmber] = useState('')
    const {viewCertificate} = useCertificatehook()
    const selectedCertificate =async ()=>{
      const result = await viewCertificate({certificateNumber:certificateNUmber})
      onChange(result)
    } 
 
    return (
        <div className="w-full h-full flex justify-end items-end  gap-4 p-4 ">
           <div className="h-10 w-1/2">
           <PainScale startRange={10} endRange={20} value={12} name="pain"/> 
           </div>

            <div className='flex flex-col gap-2'>
                <label className='text-gray-700 font-medium'>Certificate Number</label>
                <SPKInputText value={certificateNUmber} onChange={(e)=>setCertificateNUmber(e?.target?.value)} name={'certificateNumber'} placeHolder={'Certificate'} className='border  p-2  ' />
            </div>

            <SPKBTNSave onClick={()=>selectedCertificate()} text="View " />

        </div>

    )
}
export default SearchCertificate