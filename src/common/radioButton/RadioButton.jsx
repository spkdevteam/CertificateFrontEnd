import React from 'react'
import useDarkmode from '../../Hooks/useDarkMode'

function RadioButton({onClick,status=false,text=''}) {
    const [isDark] = useDarkmode()
    return (
        <label className=" justify-start w-full  items-center   flex gap-3 cursor-pointer">
            <div className='relative  '>
                <input
                    className=" sr-only "
                    name="upperPosterior"
                    type="checkbox"
                    checked={status}
                    onChange={() => onClick(!status)}
                />
                <div
                    className={` w-12 h-6   rounded-full border-opacity-45 ${status ? "bg-lightBtntext" : "bg-gray-300 bg-opacity-30"
                        }`}
                ></div>
                <div
                    className={`absolute left-1   top-1 w-4 h-4 rounded-full bg-gray-400 bg-opacity-80 transition ${status ? "translate-x-6" : ""
                        }`}
                ></div>
            </div>
            <span className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                {text}
            </span>
        </label>
    )
}

export default RadioButton

