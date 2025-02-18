
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'
import SPKBaseBTN from './SPKBaseBTN'

function SPKBTNNew({ onClick = () => { alert('no action Specified ') }, text = 'Cancel' }) {
  const getMyIcon = useDynamicIcons()
  const IconCreate = getMyIcon('createNew')
  return (
    <SPKBaseBTN Icon={IconCreate} text={text} bgColour={'bg-cyan-100'} textColour={'text-cyan-500'} onClick={onClick} />
  )
}

export default SPKBTNNew
