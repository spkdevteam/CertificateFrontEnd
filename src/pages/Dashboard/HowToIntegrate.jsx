import { useColorScheme } from '@mui/material'
import React from 'react'
import useColourThemeHook from '../../Hooks/useColourThemeHook'
import SPKBTNInsert from '../../common/Button/SPKBTNInsert'
import { SPKBTNEdit } from '../../common/Button/SPKBTNEdit'

function HowToIntegrate( { mainMenu= null, _id= 'hr000001', displayName= 'Human Res  ource', description= 'All related to Human',path= '/hr',add=()=>alert('functionnot implemented ')}) {
  
    /*
    go to the component lay out     
    in the props define all values coming to the component 
    integrate to the design 

    */
  
    const {theme}=  useColourThemeHook()
    return (
    <div className={`w-full h-full bg-white bg-opacity-20   flex flex-col justify-center items-center p-4   ${theme.textColour  } ${theme.bordercolour  }`}>
         
        <h1 className='font-semibold   '>{displayName}</h1> 
        <h1 className='font-semibold text-inherit '>{description}</h1>

       <SPKBTNEdit onClick={add} text={ 'insert'} />
      

    </div>
  )
}

export default HowToIntegrate
