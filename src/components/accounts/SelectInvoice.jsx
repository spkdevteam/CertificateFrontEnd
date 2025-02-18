import { option } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import SPKBTNCancel from '../../common/Button/SPKBTNCancel'

function SelectInvoice({options=[{displayName:'',id:''}],onChange=()=>{},value=[],className='',readOnly=false,placeHolder='',name,close=()=>{alert('no assigned function ')}}) {
    const [values,setValues] = useState([])
    const [focused,setFocused] = useState(false)
    useEffect(()=>{
        setValues(value)
    },[value])
const handleChange = (point)=>{
    const tempSetArray = new Set(value?.map((item)=>item?.id))
    console.log(tempSetArray?.size,tempSetArray.has(point?.id),point?.id,value?.length)
    if(tempSetArray.has(point?.id)){
        tempSetArray.delete(point?.id)
    }
    else {
        tempSetArray.add(point?.id)
    }
    const newSeletedList = options?.filter((item)=>{ console.log(item.id); return tempSetArray.has(item?.id)})
    onChange({target:{name:name,value:newSeletedList}})

}

  return (
    <div className={`${className} w-full relative flex  `}   >
    {/* <div className="flex    items-center w-full border border-lightBorderColor rounded-md p-1 overflow-scroll h-16  flex-wrap   dark:border-darkIconAndSearchBg bg-white bg-opacity-5 ">
        {value.map((tag, index) => (
            <div key={index} className="flex items-center w-auto text-nowrap  flex-wrap h-auto bg-blue-400 bg-opacity-20   rounded-md px-3 py-1 m-1 " >
                {tag.displayName}
                <button
                    key={tag.id}
                    onMouseDown={() => removeTag(tag)} // Callback that executes `removeTag(tag)` when clicked
                    className="ml-2 text-red-500 hover:text-red-700"
                >
                    &times;
                </button> 
            </div>
        ))}
    </div> */}
    <div onClick={close} className='absolute z-20 text-red-700 cursor-pointer w-5 end-0 p-2'> X </div>
    {(focused || options?.length > 0) && options.length > 0 && (
         
         
        <ul className="  absolute overflow-hidden   z-10    rounded-md    max-h-40 overflow-y-auto  text-lightinputTextColor dark:placeholder-darkPlaceholder bg-transparent dark:bg-transparent dark:text-white  w-full shadow-lg  ">
            {options?.map((point, index) => {
                return <li key={index} onClick={() => handleChange(point)} className="px-4 py-2  md:col-span-2  dark:bg-darkIconAndSearchBg bg-white   cursor-pointer hover:text-info " > {point?.displayName} </li>
            }
            )}
        </ul>
        
    )}
</div>
  )
}

export default SelectInvoice
