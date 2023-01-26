import React from 'react'
import { TextAreaComp } from './TextArea'
import { Label } from './Input.js'

function TextArea({handleOnChange,value}) {
  return (
    <TextAreaComp>
      <Label>Descrição da Equipe:</Label>
      <textarea  onChange={handleOnChange} placeholder='Digite aqui!' name='text' required>
        {value}
    </textarea>
    </TextAreaComp>
  )
}

export default TextArea;