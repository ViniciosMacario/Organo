import React from 'react'
import { TextAreaComp } from './TextArea'

function TextArea() {
  return (
    <>
      <label>Descrição da Equipe:</label>
      <TextAreaComp 
        placeholder='Digite aqui!' 
        name='text'
        required
      />
    </>
  )
}

export default TextArea