
import React from 'react'
import SPKBaseBTN from './SPKBaseBTN'
import useDynamicIcons from '../../Hooks/useDynamicIcons'

function SPKBTNExport({text,onClick}) {
    const getMyIcon = useDynamicIcons()
    const EyeIcon = getMyIcon('export')
  return (
    <SPKBaseBTN Icon={EyeIcon} text={text} onClick={onClick} textColour={'text-cyan-700'} bgColour={'bg-cyan-100 '}  />
  )
}

export default SPKBTNExport
