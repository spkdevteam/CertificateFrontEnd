import { useEffect } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import image2 from "../../assets/images/certificate/SAUDHI.png";
import image3 from "../../assets/images/certificate/Emirates.png"

const CertificateView = ({value }) => {
  useEffect(() => {
    console.log(value, "selectedCertificateselectedCertificateselectedCertificate");
  }, [value]);

  if (!value) {
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

      </div>
    </div>
  );
};

export default CertificateView;








