import React from 'react'
import { TextAreaComp } from './TextArea'
import { Label } from './Input.js'

function TextArea({handleOnChange}) {
  return (
    <>
      <Label>Descrição da Equipe:</Label>
      <TextAreaComp 
        onChange={handleOnChange}
        placeholder='Digite aqui!' 
        name='text'
        required
      />
    </>
  )
}

export default TextArea