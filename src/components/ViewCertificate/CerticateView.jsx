import { useEffect } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import image2 from "../../assets/images/certificate/SAUDHI.png";
import image3 from "../../assets/images/certificate/Emirates.png"

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
      <img src={image3} alt="Certificate" className="w-full h-auto object-cover" />

      <div className="absolute flex flex-col w-full  items-center space-y-1 bg-opacity-50 px-4 mt-0 rounded">
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

        {/* <div className="w-full justify-center flex ">
          <p className="text-black w-1/2 text-end font-light text-[8px] md:text-lg lg:text-lg xl:text-xl ">Certified Assayer:</p>
          <p className="text-black w-1/2 text-start font-light text-[8px] md:text-lg lg:text-lg xl:text-xl "></p>

        </div> */}

        {/* <div className="w-full items-center flex flex-col  relative">
        <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[15px] md:top-[30px]">
            Emirates refinery Ltd Lavington.
          </p>

          <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[26px] md:top-[50px]">
            Tel:+254787956403
          </p>

          <p className="text-[#B5945F] font-light w-full text-center text-[8px] md:text-lg lg:text-lg xl:text-xl absolute top-[35px] md:top-[70px]">
            emiratesrefineryltd.com
          </p>
         </div> */}
      </div>
    </div>
  );
};

export default CertificateView;








