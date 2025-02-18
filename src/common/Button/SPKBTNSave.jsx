
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNSave({onClick,text ='Save',   }) {
    const getMyIcon = useDynamicIcons()
    const IconSave = getMyIcon('downLoad')
    return (
        <button
        onClick={onClick}
        className={`  gap-2 rounded-md flex p-2 justify-center items-center bg-opacity-20 bg-cyan-100 text-cyan-500 h-10`}
      >
        <IconSave className="w-6 h-6" /> {/* Adjusted the size for alignment */}
        <span className="text-sm    leading-none">{text}</span> {/* Added consistent text size */}
      </button>
    )
}

export default SPKBTNSave