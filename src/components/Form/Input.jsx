import React from 'react'
import { InputComp,Label } from './Input.js'

function Input({type, placeholder, name,label, required = false }) {
  return (
    <>
      <Label>{label}</Label>
      <InputComp 
        type={type} 
        value={''} 
        name={name}
        placeholder={placeholder}
        onChange={''}
        required={required}
      />
    </>
  )
}

export default Input