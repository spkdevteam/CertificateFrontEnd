import React, { useEffect } from "react";
import useColourThemeHook from "../../Hooks/useColourThemeHook";
import useHandleModal from "../../Hooks/useHandleModal";

function ColourThemeSelector() {
  const {
    theme = { bgcolour: "", textColour: "", bordercolour: "" },
    changeTheme = () => {},
    themeSet = {},
  } = useColourThemeHook();
  const {closeModal}  = useHandleModal()
  useEffect(()=>{
    closeModal()
  },[])
  return (
    <div className="p-2 rounded-lg    shadow-md text-xs   ">
       
      <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
        {Object.keys(themeSet)?.map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => changeTheme(val)}
              className={`flex   items-center justify-center p-4   rounded-md  *: h-10 transition-all cursor-pointer border 
              ${themeSet[val]?.bgcolour} ${themeSet[val]?.textColour} ${themeSet[val]?.bordercolour} 
              hover:scale-105 hover:shadow-lg`}
            >
               
              <span className="m-2 uppercase    text-sm font-medium">{val}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ColourThemeSelector;
