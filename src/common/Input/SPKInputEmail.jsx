import React from 'react'

function SPKInputEmail({ value,name ,className, onChange, onErrorExist }) {
  return (<input
    type="email"
    value={value}
    name = {name}
    onChange={onChange}
    className={className}
    placeholder="Enter your email"
    onBlur={() => onErrorExist('Email')}
/>)
}

export default SPKInputEmail
 
