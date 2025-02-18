import React from "react";
import useDynamicIcons from "../../../Hooks/useDynamicIcons";
import { useSelector } from "react-redux";
import useColourThemeHook from "../../../Hooks/useColourThemeHook";

function SPKBTNThemedDelete({ onClick = () => alert("No action specified"), text = "" }) {
 
  const {theme} =  useColourThemeHook()
  const getMyIcon = useDynamicIcons();
  const IconCancel = getMyIcon("outlineDelete");

  return (
    <button
      onClick={onClick}
      className={`   rounded-md flex p-1 bg-gray-500    justify-center items-center bg-opacity-10    ${theme?.textColour }`} >
      <IconCancel className="w-[1rem] h-[1rem]" />
      {text? <span className="ms-1 text-sm font-medium leading-none">{text||''}</span>:''}
    </button>
  );
}

export default SPKBTNThemedDelete;
