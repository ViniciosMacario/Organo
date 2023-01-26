import React from 'react'
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import { Container } from './Color.js'

function Color() {
  return (
    <Container>
      <div className='containerInput'>
        <Input
          labelText="Alterar cor:"
          type="Color"
        />
      </div>
      <div className='containerButton'>
        <Button text="Confirmar Alteração"/>
      </div>
    </Container>
  )
}

export default Color