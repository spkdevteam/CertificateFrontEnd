
import React from 'react'
import SPKBaseBTN from './SPKBaseBTN'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNView({text,onClick,width}) {
    const getMyIcon = useDynamicIcons()
    const EyeIcon = getMyIcon('view')
  return (
    <SPKBaseBTN  width ={width} Icon={EyeIcon} text={text} onClick={onClick} textColour={'text-purple-700'} bgColour={'bg-purple-100 '}  />
  )
}

export default SPKBTNView
