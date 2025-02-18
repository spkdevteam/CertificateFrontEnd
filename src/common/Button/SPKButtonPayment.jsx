
import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons'
import SPKBaseBTN from './SPKBaseBTN'

function SPKButtonPayment({onClick= ()=>{alert('no action Specified ')},text='',width }) {
    const getMyIcon = useDynamicIcons()
    const IconMoney = getMyIcon('money')
    return (
      <SPKBaseBTN  width ={width} Icon={IconMoney} text={text} onClick={onClick} textColour={'text-cyan-500 '} bgColour={' bg-cyan-100'}  />
        
    )
}

export default SPKButtonPayment
