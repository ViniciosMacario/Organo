import React from 'react'
import { SelectComp } from './Select'

function Select({labelText}) {
  return (
    <>
      <label >{labelText}</label>
        <SelectComp name="" id="" required>
        <option value={0} defaultValue>Selecionar</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </SelectComp>
    </>
  )
}

export default Select