import React from 'react'

function Input() {
  return (
    <>
      <label>Nome da Equipe:</label>
      <input type='text' value={''} placeholder='Digite o Nome da Equipe' required/>
    </>
  )
}

export default Input