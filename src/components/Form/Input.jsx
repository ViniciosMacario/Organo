import React from 'react'
import { InputComp,Label } from './Input.js'

function Input({type, placeholder, name,labelText, required = false }) {
  return (
    <>
      <Label>{labelText}</Label>
      <InputComp 
        type={type} 
        name={name}
        placeholder={placeholder}
        onChange={''}
        required={required}
      />
    </>
  )
}

export default Input