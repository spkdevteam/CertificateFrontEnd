import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKFormClose({onClick}) {
  const getMyIcon = useDynamicIcons()
  const IconDelete = getMyIcon('close')
  return (
    <button onClick={onClick} className='w-[5rem] rounded-md flex p-2 justify-center items-center bg-re d-100 text-red-500 h-10 bg-red '>
      <IconDelete/>  
    </button>
  )
}

export  {SPKFormClose}