import React from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/input.jsx'
import { FormCreateEquip } from './Form.js'

function Form() {
  return (
    <FormCreateEquip>
      <Button/>
      <Button/>

      <Input />
      <textarea/>
      <Button/>
    </FormCreateEquip>
  )
}

export default Form