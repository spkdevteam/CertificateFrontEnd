
import React from 'react'
import SPKBTNThemedDelete from './SPKBTNThemedDelete'
import useDynamicIcons from '../../../Hooks/useDynamicIcons'
import SPKBTNThemeBaseButton from './SPKBTNThemeBaseButton'

function SPKBTNThemePrint({text,onClick}) {
 const getMyIcon = useDynamicIcons()
 const ViewIcon = getMyIcon('outlinePrinter')
  return (
    <SPKBTNThemeBaseButton Icon ={ViewIcon} text={text} onClick={onClick}  />
  )
}

export default SPKBTNThemePrint
