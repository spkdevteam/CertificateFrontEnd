import React, { useEffect, useState } from 'react';
import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit';
import SPKBTNInsert from '../../common/Button/SPKBTNInsert';
import SPKBTNSave from '../../common/Button/SPKBTNSave';
import SPKBTNCancel from '../../common/Button/SPKBTNCancel';
import SPKInputText from '../../common/Input/SPKInputText';
import useCertificatehook from '../../Hooks/useCertificateHooks';
import SPKNumberInput from '../../common/Input/SPKNumberInput';
import SPKBTNLoading from '../../common/Button/SPKBTNLoading';

function HandleCreateCertificate({ value, onChange }) {
  const { formData,setFormDate,createOrEditCertificate,updateDataTable} = useCertificatehook()
  const [isloading,setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(false)
  },[updateDataTable])
   

  const handleChange = (e)=>{
    const {name , value} = e.target 
    setFormDate((prev)=>({
      ...prev,
      [name]:value
    }))

  }

  const handleClear = ()=>{
    setFormDate({
      _id:'',
      certificateNumber:'',
      displayId:'',
      goldFineness:0.00,
      goldWeight:0.00
    })
  }


  useEffect(() => {
    setFormDate(value)
  }, [value])

  return (
    <div className='w-full h-full p-6   '>
      <div className='border bg-white p-6 rounded-lg shadow-md flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold text-gray-800 border-b pb-2'>Certificate Details {formData?.displayId || ''}</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-700 font-medium'>Certificate Number</label>
            <SPKInputText value={formData.certificateNumber} name={'certificateNumber'} onChange={handleChange} className='border  p-2  ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-700 font-medium'>goldFineness</label>
            <SPKNumberInput value={formData.goldFineness} name={'goldFineness'} onChange={handleChange} className='border  p-2  ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-700 font-medium'>goldWeight</label>
            <SPKNumberInput value={formData.goldWeight} name={'goldWeight'} onChange={handleChange} className='border  p-2  ' />
          </div>
        </div>
      </div>

      <div className='w-full flex gap-4 justify-end items-center mt-6'>
        {
          formData?._id && !isloading
            ? <SPKBTNEdit onClick={() => {createOrEditCertificate(formData);setIsLoading(true) }} text='Edit' />
            : !formData?._id && !isloading ? <SPKBTNSave onClick={() => {createOrEditCertificate(formData);setIsLoading(true) }} text='Save' />
            :<SPKBTNLoading text='Saving '/>
        }
        

        <SPKBTNCancel onClick={()=>handleClear()} text='Clear' className='px-4 py-2 rounded-lg shadow-md bg-red-500 text-white' />
      </div>
    </div>
  );
}

export default HandleCreateCertificate;
