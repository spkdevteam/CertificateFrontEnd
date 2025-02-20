import { useEffect } from "react"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import image1 from "../../assets/images/icon/certificate.png"


const CerticateView = ({ value }) => {

    useEffect(() => {
        console.log(value, 'selectedCertificateselectedCertificateselectedCertificate')
    }, [value])
    return (
       


        // <div
        //     className="w-full h-full relative flex justify-center items-center bg-cover  bg-center bg-no-repeat"
        //     style={{                backgroundImage: `url(${image1})`,
        // }}
        // >
        //     <div className="absolute insert-0 w-full h-full flex flex-col justify-center items-center px-4 text-center">
        //         <p className="text-black font-semibold text-sm lg:text-xl mt-6">
        //             Certificate Number: {value.certificateNumber}
        //         </p>
        //         <p className="text-black font-medium text-md md:text-lg">
        //             Gross Weight: {value.grossWeight}
        //         </p>
        //         <p className="text-black font-medium text-md md:text-lg">
        //             Metal Fineness: {value.metalFineness}
        //         </p>
        //         <p className="mt-6 text-lg font-semibold">Certified Assayer:</p>
        //         <p className="text-sm md:text-md">
        //             Al Sarayat Street, Jumeirah Lakes Towers, DMCC, Sheikh Zayed Road,
        //         </p>
        //         <p className="text-sm md:text-md p-1">P.O.BOX 24305, Dubai, UAE</p>
        //         <p className="text-sm md:text-md p-1">Tel: +971 4 367 9030</p>
        //         <p className="text-sm md:text-md p-1">Email: info@emiratesgold.ae</p>

        //     </div>
        // </div>




 <div className="relative flex justify-center items-center ">
  <img src={image1} alt="" className="w-full h-auto object-cover" />

  <div className="absolute  flex flex-col items-center space-y-2  bg-opacity-50 px-4 mt-0 rounded">
    <p className="text-black font-extralight text-[8px] md:text-lg lg:text-lg pt-3 md:pt-8 xl:text-xl">Certificate Number</p>
    <p className="text-black font-extralight text-[8px] md:text-lg lg:text-lg pt-0 xl:text-xl">Gross Weight</p>
    <p className="text-black font-extralight text-[8px] md:text-lg lg:text-lg pt-0 xl:text-xl" >Metal Fineness</p>
    <p className="text-black font-extralight text-[8px] md:text-lg lg:text-lg pt-0 xl:text-xl">Certified Assayer</p>
    <p className="text-black font-extralight text-[8px] md:text-lg  lg:text-lg pt-0 xl:text-xl">Al Sarayat Street, Jumeirah Lakes Towers, DMCC, Sheikh Zayed Road,</p>
    <p className="text-black font-extralight text-[8px] md:text-lg lg:text-lg pt-0 xL:text-xl">Tel: +97143679030</p>


    


    
  </div>
</div> 












    )
}

export default CerticateView