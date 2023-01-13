import React from 'react'
import { InputComp,Label } from './Input.js'

function Input({type, placeholder, name,labelText, required = false, handleInput, }) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <InputComp 
        type={type} 
        name={name}
        placeholder={placeholder}
        onChange={handleInput}
        required={required}
      />
    </>
  )
}

export default Input