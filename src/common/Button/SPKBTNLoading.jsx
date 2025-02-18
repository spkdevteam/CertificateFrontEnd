
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'
 

function SPKBTNLoading({onClick= ()=>{alert('no action Specified ')},text='Cancel'}) {
    const getMyIcon = useDynamicIcons()
    const Icon = getMyIcon('loading')
    return (
        <button
        onClick={onClick}
        className="w-[6rem] gap-2 rounded-md flex p-2 justify-center  items-center bg-opacity-20  bg-cyan-100 text-cyan-500 h-10"
      >
        <Icon className="w-6 h-6 animate-spin" /> {/* Adjusted the size for alignment */}
        <span className="text-sm font-medium   leading-none">{text}</span> {/* Added consistent text size */}
      </button>
    )
}

export default SPKBTNLoading
