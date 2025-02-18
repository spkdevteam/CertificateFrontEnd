import React from 'react'
import { Toaster } from 'react-hot-toast'
import useHandleModal from '../../Hooks/useHandleModal'
import { SPKFormClose } from '../../common/Button/SPKFormClose'

function ViewInvoice() {
    const {closeModal} =  useHandleModal()
  return (
    <>
    <Toaster />
    <div className='md:container md:mx-auto h-[100vh]   pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg '>
        <div className='border-[1px] py-5 dark:border-darkSecondary border-lightBorderColor justify-between flex rounded-lg md:mx-auto px-0 md:px-8 h-auto'>
            view Invoice 
            <SPKFormClose onClick={closeModal} /> 
            
        </div>
    </div>
</>
  )
}

export default ViewInvoice
