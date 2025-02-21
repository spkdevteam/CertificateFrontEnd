import React from 'react'

function Otp({formData,setFormData,verifyOtp}) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
        <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-2 border rounded-md"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            />
            <button
                className="p-2 mt-2 bg-green-500 text-white rounded-md w-full"
                onClick={verifyOtp}
            >
                Verify OTP
            </button>



        </div>
      
    </div>
  )
}

export default Otp
