import React from 'react' 
import useDynamicIcons from '../../../Hooks/useDynamicIcons'

function SPKBTNNTDelete({onClick,text,width}) {
  const getMyIcon = useDynamicIcons()
  const EditIcon = getMyIcon('delete')
  return (
    <button onClick={onClick} className={`${width} rounded-md flex  justify-center items-center bg-opacity-15 bg-red-500   text-red-400 h-10 bg-red `}>
      <EditIcon className='min-w-full ' /> 
      {text?.length ? <p className='min-w-full' >{text}</p>:''}
    </button>
  )
}

export  {SPKBTNNTDelete}
