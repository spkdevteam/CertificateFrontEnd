import { useColorScheme } from '@mui/material'
import React from 'react'
import useColourThemeHook from '../../Hooks/useColourThemeHook'

function ExcelSheetIntegration( { mainMenu= null, _id= 'hr000001', displayName= 'Human Resource', description= 'All related to Human',path= '/hr',}) {
  const {theme}=  useColourThemeHook()
    return (
    <div className={`w-full h-full bg-white bg-opacity-20   flex flex-col justify-center items-center p-4   ${theme.textColour  } ${theme.bordercolour  }`}>
        < div className='border h-full w-full    border-inherit'>
        <h1 className='font-semibold   '>{displayName}</h1> 
        <h1 className='font-semibold text-inherit '>{description}</h1>
        </div>

    </div>
  )
}

export default ExcelSheetIntegration
