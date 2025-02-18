
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNCancel({onClick= ()=>{alert('no action Specified ')},text='Cancel'}) {
    const getMyIcon = useDynamicIcons()
    const IconCancel = getMyIcon('cancel')
    return (
        <button
        onClick={onClick}
        className="w-[6rem] gap-2 rounded-md flex p-2 justify-center items-center bg-opacity-20  bg-red-100 text-red-500 h-10"
      >
        <IconCancel className="w-6 h-6" /> {/* Adjusted the size for alignment */}
        <span className="text-sm font-medium  leading-none">{text}</span> {/* Added consistent text size */}
      </button>
    )
}

export default SPKBTNCancel
