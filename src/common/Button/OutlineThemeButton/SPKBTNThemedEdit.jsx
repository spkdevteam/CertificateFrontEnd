
import React from 'react'
import SPKBTNThemedDelete from './SPKBTNThemedDelete'
import useDynamicIcons from '../../../Hooks/useDynamicIcons'
import SPKBTNThemeBaseButton from './SPKBTNThemeBaseButton'

function SPKBTNThemedEdit({text,onClick}) {
 const getMyIcon = useDynamicIcons()
 const ViewIcon = getMyIcon('outlineEdit')
  return (
    <SPKBTNThemeBaseButton Icon ={ViewIcon} text={text} onClick={onClick}  />
  )
}

export default SPKBTNThemedEdit
