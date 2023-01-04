import React from 'react'
import Card from './Card.jsx'
import { InputComp } from './Form/Input'
import { Container, Members } from './Staff.js'
import Config from '../assets/Config.svg'

function Staff() {
  return (
    <Container>
      <div>
        <img src={Config} alt='Icone_Engrenagem' />
        <h2>Equipe First</h2>
        <InputComp type='Color'required/>
      </div>
      <Members>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />        
        <Card />
        <Card />        
        <Card />
        <Card />
      </Members>
    </Container>
  )
}

export default Staff
