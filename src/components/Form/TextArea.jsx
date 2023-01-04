import React from 'react'
import { TextAreaComp } from './TextArea'
import { Label } from './Input.js'

function TextArea() {
  return (
    <>
      <Label>Descrição da Equipe:</Label>
      <TextAreaComp 
        placeholder='Digite aqui!' 
        name='text'
        required
      />
    </>
  )
}

export default TextArea