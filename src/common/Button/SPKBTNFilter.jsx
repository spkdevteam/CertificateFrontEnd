
import React from 'react'
import SPKBaseBTN from './SPKBaseBTN'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNFilter({text,onClick}) {
    const getMyIcon = useDynamicIcons()
    const EyeIcon = getMyIcon('filter')
  return (
    <SPKBaseBTN Icon={EyeIcon} text={text} onClick={onClick} textColour={'text-cyan-700'} bgColour={'bg-cyan-100 '}  />
  )
}

export default SPKBTNFilter
