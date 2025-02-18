
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNInsert({ onClick }) {
  const getMyIcon = useDynamicIcons()
  const IconInsert = getMyIcon('insert')
  return (
    <button
      onClick={onClick}
      className="w-[3rem] gap-2 rounded-md flex p-2 justify-center items-center bg-gray-100 bg-opacity-15 text-gray-500 h-10"
    >
      <IconInsert className="w-10 h-10" /> {/* Adjusted the size for alignment */}
    </button>
  )
}

export default SPKBTNInsert