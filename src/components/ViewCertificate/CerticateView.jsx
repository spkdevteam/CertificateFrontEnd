// import { useEffect } from "react"
// import useCertificatehook from "../../Hooks/useCertificateHooks"
// import image1 from "../../assets/images/icon/certificate.png"
// import image2 from "../../assets/images/certificate/Certificate Emirates.jpg"

// const CerticateView = ({ value }) => {

//     useEffect(() => {
//         console.log(value, 'selectedCertificateselectedCertificateselectedCertificate')
//     }, [value])

//     if(!value || Object.keys(value).length===0){
//       return(
//         <div className="flex justify-center items-center h-full">
//         <h2 className="text-lg font-semibold text-red-500">No data available</h2>
//       </div>

//       )
//     }
//     return (
       


//         // <div
//         //     className="w-full h-full relative flex justify-center items-center bg-cover  bg-center bg-no-repeat"
//         //     style={{                backgroundImage: `url(${image1})`,
//         // }}
//         // >
//         //     <div className="absolute insert-0 w-full h-full flex flex-col justify-center items-center px-4 text-center">
//         //         <p className="text-black font-semibold text-sm lg:text-xl mt-6">
//         //             Certificate Number: {value.certificateNumber}
//         //         </p>
//         //         <p className="text-black font-medium text-md md:text-lg">
//         //             Gross Weight: {value.grossWeight}
//         //         </p>
//         //         <p className="text-black font-medium text-md md:text-lg">
//         //             Metal Fineness: {value.metalFineness}
//         //         </p>
//         //         <p className="mt-6 text-lg font-semibold">Certified Assayer:</p>
//         //         <p className="text-sm md:text-md">
//         //             Al Sarayat Street, Jumeirah Lakes Towers, DMCC, Sheikh Zayed Road,
//         //         </p>
//         //         <p className="text-sm md:text-md p-1">P.O.BOX 24305, Dubai, UAE</p>
//         //         <p className="text-sm md:text-md p-1">Tel: +971 4 367 9030</p>
//         //         <p className="text-sm md:text-md p-1">Email: info@emiratesgold.ae</p>

//         //     </div>
//         // </div>




//  <div className="relative flex justify-center items-center ">
//   <img src={image2} alt="" className="w-full h-auto object-cover" />

//   <div className="absolute  flex flex-col items-center space-y-2  bg-opacity-50 px-4 mt-0 rounded">
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg [@media(min-width:645px)_and_(max-width:720px)]:pt-14 [@media(min-width:344px)_and_(max-width:415px)]:pt-7 md:text-lg lg:text-lg pt-3 md:pt-8  xl:text-xl">Certificate Number:   {value?.certificateNumber}</p>
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0 mt-0 xl:text-xl">Gross Weight(g):   {value.goldWeight} Grams</p>
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0  xl:text-xl" >Metal Fineness:{value.goldFineness}</p>
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0 xl:text-xl">Certified Assayer</p>
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg  lg:text-lg pt-0 xl:text-xl">Al Sarayat Street, Jumeirah Lakes Towers,DMCC, Sheikh Zayed Road,</p>
//     <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0  xL:text-xl">Tel: +97143679030</p>


    


    
//   </div>
// </div> 












//     )
// }

// export default CerticateView


// import { useEffect } from "react";
// import useCertificatehook from "../../Hooks/useCertificateHooks";
// import image2 from "../../assets/images/certificate/Certificate Emirates.jpg";

// const CertificateView = ({ value }) => {
//   useEffect(() => {
//     console.log(value, "selectedCertificateselectedCertificateselectedCertificate");
//   }, [value]);

//   if (!value || Object.keys(value).length === 0) {
//     return (
//       <div className="flex justify-center items-center h-full">
//         <h2 className="text-lg font-semibold text-red-500">No data available</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex justify-center items-center">
//       <img src={image2} alt="Certificate" className="w-full h-auto object-cover" />

//       <div className="absolute flex flex-col items-center space-y-1 bg-opacity-50 px-4 mt-0 rounded">
//         <div className="flex flex-col space-y-0 leading-none text-center">
//           <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
//             Certificate Number: {value?.certificateNumber}
//           </p>
//           <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
//             Gross Weight (g): {value.goldWeight} Grams
//           </p>
//           <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
//             Metal Fineness: {value.goldFineness}
//           </p>
//         </div>

//         <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl pt-[20px]">Certified Assayer:</p>
//         <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
//           Al Sarayat Street, Jumeirah Lakes Towers, DMCC, Sheikh Zayed Road,
//         </p>
//         <p className="text-black font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
//           Tel: +971 4 367 9030
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CertificateView;


import { useEffect } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import image2 from "../../assets/images/certificate/Certificate Emirates.jpg";

const CertificateView = ({ value }) => {
  useEffect(() => {
    console.log(value, "selectedCertificateselectedCertificateselectedCertificate");
  }, [value]);

  if (!value || Object.keys(value).length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <h2 className="text-lg font-semibold text-red-500">No data available</h2>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center">
      <img src={image2} alt="Certificate" className="w-full h-auto object-cover" />

      <div className="absolute flex flex-col w-full  items-center space-y-1 bg-opacity-50 px-4 mt-5 rounded">
        <div className="flex flex-col  w-full space-y-0 leading-none text-center pt-[5px]">
          <div className="flex w-full " >
            <p className="text-black font-light text-[8px] md:text-lg lg:text-lg text-end w-full xl:text-xl">
              Certificate Number: 
            </p>
            <p className="text-black font-light w-full text-[8px] md:text-lg lg:text-lg xl:text-xl text-start pl-[12px]">
               {value?.certificateNumber}
            </p>

          </div>
          <div className="flex w-full justify-center">
            <p className="text-black font-light w-1/2 text-end text-[8px] md:text-lg lg:text-lg xl:text-xl pl-[17px]">
              Gross Weight (g): 
            </p>
            <p className="text-black  w-1/2 text-start font-light text-[8px] md:text-lg lg:text-lg xl:text-xl pl-[13px]">
              {value?.goldWeight} Grams
            </p>

          </div>
          <div className="flex w-full justify-center">
            <p className="text-black w-1/2 font-light text-end text-[8px] md:text-lg lg:text-lg xl:text-xl pl-[29px] ">
              Metal Fineness:
            </p>
            <p className="text-black w-1/2 text-start font-light text-[8px] md:text-lg lg:text-lg xl:text-xl pl-[14px]">
               {value.goldFineness}
            </p>

          </div>
        </div>

        <div className="w-full justify-center flex ">
          <p className="text-black w-1/2 text-end font-light text-[8px] md:text-lg lg:text-lg xl:text-xl ">Certified Assayer:</p>
          <p className="text-black w-1/2 text-start font-light text-[8px] md:text-lg lg:text-lg xl:text-xl "></p>

        </div>
        {/* <div className="w-full justify-center flex ">
          <p className="text-[#FFDC73] font-light w-1/2 text-center text-[8px] md:text-lg lg:text-lg xl:text-xl">
            Emirates refinery Ltd Lavington.
          </p>
        </div>
        <div>
          <p className="text-[#FFDC73] font-light text-[8px] md:text-lg lg:text-lg xl:text-xl">
            Tel:+254787956403
          </p>
        </div> */}

        <div className="w-full items-center flex flex-col  relative">
        <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[15px] md:top-[30px]">
            Emirates refinery Ltd Lavington.
          </p>

          <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[26px] md:top-[50px]">
            Tel:+254787956403
          </p>

          <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[35px] md:top-[70px]">
            emiratesrefineryltd.com
          </p>






        </div>
      </div>
    </div>
  );
};

export default CertificateView;








