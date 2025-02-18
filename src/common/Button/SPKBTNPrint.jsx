
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'
import toast from 'react-hot-toast'
import SPKBaseBTN from './SPKBaseBTN'

function SPKBTNPrint({onClick=()=>toast.error('No functionality added '),text ='Save',width   }) {
    const getMyIcon = useDynamicIcons()
    const IconSave = getMyIcon('print')
    return (
      <SPKBaseBTN  width ={width} Icon={IconSave} text={text} onClick={onClick} textColour={'text-blue-400'} bgColour={'bg-blue-200 '}  />
         
    )
}

export default SPKBTNPrint