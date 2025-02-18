import React from 'react'

function SPKInputEmail({ value, className, onChange, onErrorExist }) {
  return (<input
    type="email"
    value={value}
    onChange={onChange}
    className={className}
    placeholder="Enter your email"
    onBlur={() => onErrorExist('Email')}
/>)
}

export default SPKInputEmail
 
