import React from 'react'
import Card from './Card.jsx'
import { InputComp } from './Form/Input'
import { Container, Members } from './Staff.js'
import Config from '../assets/Config.svg'
import hexToRgba from "hex-to-rgba";



function Staff({name, colaboradores, colorBg}) {
  console.log(colorBg)
  return (
    <Container >
      <div>
        <img src={Config} alt='Icone_Engrenagem' />
        <h2>{name}</h2>
        <InputComp type='Color' required/>
      </div>
      <Members>
        {colaboradores.map(data => {
            return (<Card nome={data.nome} cargo={data.cargo} color={colorBg}/>)
          })
        }        
      </Members>
    </Container>
  )
}

export default Staff
