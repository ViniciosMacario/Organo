import React from 'react'
import Card from './Card.jsx'
import { InputComp } from './Form/Input'
import { Section, Members } from './Staff.js'
import Config from '../assets/Config.svg'

function Staff() {
  return (
    <Section>
      <h2>Minha Organização</h2>

      <div>
        <img src={Config} alt='Icone_Engrenagem' />
        <h2>Equipe First</h2>
        <InputComp type='Color'required/>
      </div>

      <Members>
        <Card />
        <Card />


      </Members>
    </Section>
  )
}

export default Staff
