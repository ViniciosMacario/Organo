import React from 'react'
import Card from './Card.jsx'
import { InputComp } from './Form/Input'
import { Container, Members, Icon } from './Staff.js'
import Config from '../assets/Config.svg'
import hexToRgba from "hex-to-rgba";


//Componente responsável por renderizar a Equipe, informando alguns dados referente a mesma como: Cor da Equipe, colaboradores, nome..
function Staff({name, colaboradores, colorBg}) {
  return (
    <Container style={{background: `${hexToRgba(colorBg, 0.8)}`}}>
      <div>
        <Icon src={Config} onClick={''} alt='Icone_Engrenagem' />
        <h2>{name}</h2>
        {/* Escondendo o InputCompt para não quebrar o layout no primeiro momento, pois no futuro ele será utilizado nesse exato local */}
        <InputComp type='Color' required style={{visibility: 'hidden'}}/>
      </div>

      <Members>
        {colaboradores.map(data => {
            return (<Card key={data.id} nome={data.nome} cargo={data.cargo} color={colorBg}/>)
          })
        }        
      </Members>
    </Container>
  )
}

export default Staff
