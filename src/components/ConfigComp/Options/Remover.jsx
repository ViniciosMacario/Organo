import React from 'react';
import Input from '../../Form/Input.jsx';
import Button from '../../Form/Button.jsx';
import { Container } from './Remover.js';
function Remover() {
  return (
    <Container>
      <div className='containerInput'>
      <Input 
        type="search" 
        placeholder="Encontrar Colaborador"
        labelText="Colaborador:"
      />
      <div>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      <Button text="Vinicios"/>
      </div>
      </div>
      <div className='containerButton'>
        <Button text="Remover" />
      </div>
    </Container>
  )
}

export default Remover