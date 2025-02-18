import React, { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

const MainContent = () => {
  return (
    <div className='w-[100%] h-auto    '>
      <Suspense fallback={<InnerLoading/>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MainContent


function InnerLoading () {
  return ( 
    <div className='flex w-full h-full flex-col justify-center items-center'>
      <p className='text-white'>Loading...</p>
    </div>
  )
}