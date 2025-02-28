import React from 'react'

function Otp({ formData, setFormData, verifyOtp,loading }) {
  return (
    // <div className='w-full h-full flex justify-center items-center'>
    //     <div className='flex flex-col justify-center items-center'>
    //     <input
    //             type="text"
    //             placeholder="Enter OTP"
    //             className="w-full p-2 border rounded-md"
    //             value={formData.otp}
    //             onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
    //         />
    //         <button
    //             className="p-2 mt-2 bg-green-500 text-white rounded-md w-full"
    //             onClick={verifyOtp}
    //         >
    //             Verify OTP
    //         </button>



    //     </div>

    // </div>

    <div className='w-full min-h-screen flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <div className=''>
            <img src="https://t4.ftcdn.net/jpg/04/91/47/35/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg"

              alt=""
              className='z-10 w-full h-screen'


            />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-1'>
            <input
               type="text"
               placeholder="Enter OTP"
               className="w-96 p-2 border rounded-md"
               value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
          />
           <button
             className="p-2 mt-2 bg-green-500 text-white rounded-md w-96"
             onClick={verifyOtp}
            >
             {loading ? "verify otp" :"sending..."}
           </button> 



        </div>

      </div>

    </div>
  )
}

export default Otp
