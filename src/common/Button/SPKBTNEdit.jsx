import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNEdit({onClick,text,width}) {
  const getMyIcon = useDynamicIcons()
  const EditIcon = getMyIcon('SPKEdit')
  return (
    <button
    onClick={onClick}
    className={`${width}   gap-2 rounded-md flex p-2 justify-center items-center bg-opacity-20 bg-blue-100 text-blue-500 h-10`}
  >
    <EditIcon className="w-6rem h-6" /> {/* Adjusted the size for alignment */}
    <span className="text-sm    leading-none">{text}</span> {/* Added consistent text size */}
  </button>
     
  )
}

export  {SPKBTNEdit}
