import React from "react";
import useDynamicIcons from "../../../Hooks/useDynamicIcons";
import { useSelector } from "react-redux";
import useColourThemeHook from "../../../Hooks/useColourThemeHook";

function SPKBTNThemeBaseButton({Icon,text,onClick}) {
 
  const {theme} =  useColourThemeHook()
  

  return (
    <button
      onClick={onClick}
      className={`   rounded-md flex p-1 bg-gray-500    justify-center items-center bg-opacity-10    ${theme?.textColour }`} >
      <Icon className="w-[1rem] h-[1rem]" />
      {text? <span className="ms-1 text-sm font-medium leading-none">{text||''}</span>:''}
    </button>
  );
}

export default SPKBTNThemeBaseButton;
