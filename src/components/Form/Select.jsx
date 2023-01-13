import React from 'react'
import { SelectComp } from './Select'

function Select({labelText, options, handleSelect}) {
  return (
    <>
      <label >{labelText}</label>
        <SelectComp name="" id="" onChange={handleSelect} required>
        <option id='first' defaultValue>Selecione uma opção</option>
        {options.map((option) => {
            return <option value={option.name}  key={option.id}>{option.nome}</option>
          })
        }
      </SelectComp>
    </>
  )
}

export default Select