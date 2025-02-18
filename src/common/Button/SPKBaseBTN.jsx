
import React from 'react'

function SPKBaseBTN({Icon,text,bgColour ,width , textColour,onClick=()=>alert('no predefined functionlity')}) {


    return (
        <button onClick={onClick} className={` w-auto px-2 gap-2 rounded-md   flex p-2 justify-center items-center  ${bgColour} ${textColour} bg-opacity-20 hover:bg-opacity-80    h-10`}
        >
            <Icon className="w-[1rem] h-[1rem]" /> 
            {text?.length  ?<span className="text-sm font-medium  leading-none">{text}</span>:''}

        </button>
    )
}

export default SPKBaseBTN





