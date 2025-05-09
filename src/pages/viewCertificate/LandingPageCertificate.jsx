import React from 'react'
import gold from '../../assets/images/logo/gold.png'
import gold2 from '../../assets/images/all-img/gold2.png';
import { image1 } from '../../constant/images';
import gold3 from "../../assets/images/all-img/gold3.png"

 
const  LandingPageCertificate = ()=> {
    return (
        <div>
            <div className=" p-4  flex  items-center justify-between">
                <img src={image1} alt="" className="w-2/12 h-auto p-2  " />
                <div className="mr-3 md:mr-16">
                    <button className="bg-[#b98f2d]  text-white px-3 py-1 md:px-4 md:py-2 text-base md:text-xl font-poppins">
                        Back to site
                    </button>
                </div>
            </div>

            <div className=" md:mx-16">
                <hr className="mt-2 mx-3 md:mx-12" />
            </div>
            
            <div className=' pt-4 pb-4 flex flex-col justify-center'>
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] large:grid-cols-2 max-w-full gap-6 px-4">
                <div className="p-6 md:col-span-1 flex justify-center order-1 md:order-2 mr-6">
                    <img src={gold3} alt="gold_image" className="w-[450px] sm:w-[200px] md:w-[420px] lg:w-[280px] max-w-full bg-cover bg-center" />
                </div>

                <div className="md:ml-14      order-2 md:order-1">
                    <h2 className="font-bold text-xl md:text-2xl font-poppins">Instructions</h2>
                    <p className="text-sm md:text-base  mt-3 font-poppins">
                        We are excited to introduce a new feature that will simplify the process of accessing your certificate details. Now, you can effortlessly obtain the information you need by following the below steps.
                    </p>
                    <ul className="font-bold text-sm md:text-base mt-5 ml-4 list-disc font-poppins">
                        <li>Step 1: Locate Your Certificate Number: You can find this number behind the packing card of your gold bar. (You can see the illustrative image on the right side to get an idea of where you can find the certificate number).</li>
                        <li>Step 2: Enter the Certificate Number in the Search Form: Simply enter the certificate number you located in Step 1 into the below search form.</li>
                        <li>Step 3: After selecting the certificate, you will get the details below.</li>
                        <li>Step 4: Access and Download Your Certificate Details.</li>
                    </ul>
                    <p className="mt-3 text-sm md:text-base font-poppins">
                        Feel free to send an email to <span className="font-bold">info@emiratesrefineryltd.com</span>, and our dedicated support team will respond promptly. You can also reach us by phone at <span className="font-bold">+254787956403</span>
                    </p>
                    <p className="mt-3 text-sm md:text-base font-poppins">
                        Your satisfaction is our utmost priority, and we're here to ensure your experience is as smooth and efficient as possible.
                    </p>
                </div>
            </div>

            </div>

        </div>
    );
}

export default LandingPageCertificate;