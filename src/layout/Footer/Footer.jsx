import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='md:container md:mx-auto py-4  '>
      <div className='flex flex-col md:flex-row gap-1'>
        <span className='text-[#99A1B7] dark:text-white'>©2024, All Rights Reserved by</span>
        <NavLink className="text-gray-900 dark:text-darkPrimary dark:hover:text-info hover:text-info">
        Kosmo Dental
        </NavLink>

      </div>

    </div>
        
    </>
  )
}

export default Footer