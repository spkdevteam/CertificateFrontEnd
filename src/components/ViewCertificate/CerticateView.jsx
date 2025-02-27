import { useEffect } from "react"
import useCertificatehook from "../../Hooks/useCertificateHooks"
import image1 from "../../assets/images/icon/certificate.png"


const CerticateView = ({ value }) => {
 

    if(!value || Object.keys(value).length===0){
      return(
        <div className="flex justify-center items-center h-full">
        <h2 className="text-lg font-semibold text-red-500">No data available</h2>
      </div>

      )
    }
    return (
       
 




 <div className="relative flex justify-center items-center ">
  <img src={image1} alt="" className="w-full h-auto  " />

  <div className="absolute  flex flex-col items-center space-y-2  bg-opacity-50 px-4 mt-0 rounded">
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg [@media(min-width:645px)_and_(max-width:720px)]:pt-14 [@media(min-width:344px)_and_(max-width:415px)]:pt-7 md:text-lg lg:text-lg pt-3 md:pt-8  xl:text-xl">Certificate Number:{value?.certificateNumber}</p>
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0 xl:text-xl">Gross Weight:{value.goldWeight}</p>
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0 xl:text-xl" >Metal Fineness:{value.goldFineness}</p>
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0 xl:text-xl">Certified Assayer</p>
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg  lg:text-lg pt-0 xl:text-xl">Al Sarayat Street, Jumeirah Lakes Towers,DMCC, Sheikh Zayed Road,</p>
    <p className="text-black font-light text-[8px] [@media(min-width:645px)_and_(max-width:720px)]:text-lg md:text-lg lg:text-lg pt-0  xL:text-xl">Tel: +97143679030</p>


    


    
  </div>
</div> 












    )
}

export default CerticateView