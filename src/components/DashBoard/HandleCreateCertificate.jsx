// import React, { useEffect, useState } from 'react';
// import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit';
// import SPKBTNInsert from '../../common/Button/SPKBTNInsert';
// import SPKBTNSave from '../../common/Button/SPKBTNSave';
// import SPKBTNCancel from '../../common/Button/SPKBTNCancel';
// import SPKInputText from '../../common/Input/SPKInputText';
// import useCertificatehook from '../../Hooks/useCertificateHooks';
// import SPKNumberInput from '../../common/Input/SPKNumberInput';
// import SPKBTNLoading from '../../common/Button/SPKBTNLoading';
// import SPKColumnDiv from '../../common/SPKDIV/spkColumdiv';
// import SPKRowDiv from '../../common/SPKDIV/SPKDIv';

// function HandleCreateCertificate({ value, onChange }) {
//   const { formData,setFormDate,createOrEditCertificate,updateDataTable,isLoading,setIsLoading,certificateLIst} = useCertificatehook()
//   // const [isloading,setIsLoading] = useState(false)
//   useEffect(()=>{
//     console.log(updateDataTable)
//     setIsLoading(false)
//   },[updateDataTable])
   

//   const handleChange = (e)=>{
//     const {name , value} = e.target 
//   //   if ((name === "goldFineness" || name === "goldWeight") && parseFloat(value) <= 0) {
//   //     toast.error(`${name} must be greater than 0`);
//   //     return;
//   // }

//     setFormDate((prev)=>({
//       ...prev,
//       [name]:value
//     }))

//   }

//   const handleClear = ()=>{
//     setFormDate({
//       _id:'',
//       certificateNumber:'',
//       displayId:'',
//       goldFineness:0.00,
//       goldWeight:0.00
//     })
//   }


//   useEffect(() => {
//     setFormDate(value)
//   }, [value])

//   return (
//     <div className='w-full bg-white  bg-opacity-5 rounded-md    shadow-md  '>
//       <div className='    p-6   flex flex-col gap-6'>
//         <h2 className='  font-semibold text-gray-800 text-inherit    pb-2'>Certificate Details {formData?.displayId || ''}</h2>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//           <div className='flex flex-col gap-2 justify-start items-start'>
//             <label className='text-gray-700 text-sm text-inherit'>Certificate Number</label>
//             <SPKInputText value={formData.certificateNumber} name={'certificateNumber'} onChange={handleChange} className='border border-inherit  p-2  ' />
//           </div>
//           {/* <div className='flex flex-col gap-2  '>
//             <label className='text-gray-700 font-medium text-inherit'>Fineness</label>
//             <SPKInputText value={formData.goldFineness.toString()} name={'goldFineness'} onChange={handleChange} className='border border-inherit   p-2  ' />
//           </div>
//           <div className='flex flex-col gap-2'>
//             <label className='text-gray-700 font-medium text-inherit'>Weight</label>
//             <SPKInputText value={formData.goldWeight.toString()} name={'goldWeight'} onChange={handleChange} className='border border-inherit   p-2  ' />
//           </div> */}
//         </div>
//       </div>

//       <div className='w-full flex gap-4 justify-end items-center p-4 '>
//         {/* {
//           formData?._id && !isLoading
//             ? <SPKBTNEdit onClick={() => {createOrEditCertificate(formData);setIsLoading(true) }} text='Edit' />
//             : !formData?._id && !isLoading ? <SPKBTNSave onClick={() => {createOrEditCertificate(formData);setIsLoading(true) }} text='Save' />
//             :<SPKBTNLoading text='Saving '/>
//         } */}

// {
//     !isLoading ? (
//         formData?._id ? (
//             <SPKBTNEdit onClick={() => createOrEditCertificate(formData)} text='Edit' />
//         ) : (
//             <SPKBTNSave onClick={() => createOrEditCertificate(formData)} text='Save' />
//         )
//     ) : (
//         <SPKBTNLoading text='Saving' />
//     )
// }

        

//         <SPKBTNCancel onClick={()=>handleClear()} text='Clear' className='px-4 py-2 rounded-lg shadow-md bg-red-500 text-white' />
//       </div>
//     </div>
//   );
// }

// export default HandleCreateCertificate;


import React, { useEffect, useState } from 'react';
import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit';
import SPKBTNSave from '../../common/Button/SPKBTNSave';
import SPKBTNCancel from '../../common/Button/SPKBTNCancel';
import SPKBTNLoading from '../../common/Button/SPKBTNLoading';
import SPKInputText from '../../common/Input/SPKInputText';
import useCertificatehook from '../../Hooks/useCertificateHooks';

function HandleCreateCertificate({ value }) {
  const { formData, setFormDate, createOrEditCertificate, isLoading, setIsLoading } = useCertificatehook();

  useEffect(() => {
    setFormDate(value);
  }, [value]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormDate({
      _id: '',
      certificateNumber: '',
      displayId: '',
    });
  };

  return (
    <div className="w-full bg-white bg-opacity-5 rounded-md shadow-md overflow-hidden p-4">
      <h2 className="text-gray-800 text-sm sm:text-base pb-2">
        Certificate Details {formData?.displayId || ''}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-sm sm:text-base">Certificate Number</label>
          <SPKInputText
            value={formData.certificateNumber}
            name="certificateNumber"
            onChange={handleChange}
            className="border border-inherit p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-2 justify-end items-center pt-4">
        {!isLoading ? (
          formData?._id ? (
            <SPKBTNEdit onClick={() => createOrEditCertificate(formData)} text="Edit" />
          ) : (
            <SPKBTNSave onClick={() => createOrEditCertificate(formData)} text="Save" />
          )
        ) : (
          <SPKBTNLoading text="Saving" />
        )}

        <SPKBTNCancel
          onClick={handleClear}
          text="Clear"
          className="px-4 py-2 rounded-lg shadow-md bg-red-500 text-white"
        />
      </div>
    </div>
  );
}

export default HandleCreateCertificate;

