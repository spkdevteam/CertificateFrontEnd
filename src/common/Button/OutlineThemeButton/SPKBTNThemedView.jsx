
import React from 'react'
import SPKBTNThemedDelete from './SPKBTNThemedDelete'
import useDynamicIcons from '../../../Hooks/useDynamicIcons'
import SPKBTNThemeBaseButton from './SPKBTNThemeBaseButton'

function SPKBTNThemedView({text,onClick}) {
 const getMyIcon = useDynamicIcons()
 const ViewIcon = getMyIcon('outLineEye')
  return (
    <SPKBTNThemeBaseButton Icon ={ViewIcon} text={text} onClick={onClick}  />
  )
}

export default SPKBTNThemedView
