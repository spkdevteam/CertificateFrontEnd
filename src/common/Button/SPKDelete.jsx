import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNDelete({onClick,text=''}) {
  const getMyIcon = useDynamicIcons()
  const IconDelete = getMyIcon('delete')
  return (
    <button onClick={onClick} className='w-[5rem]  rounded-md flex p-2 justify-center items-center bg-red-100 text-red-500 h-10 bg-red '>
      <IconDelete/> {text}
    </button>
  )
}

export  {SPKBTNDelete}
