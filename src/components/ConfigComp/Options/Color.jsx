import React, { useState } from 'react'
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import { Container } from './Color.js'

function Color({responseData}) {
  const [handleColor, setHandleColor] = useState();

  async function AlterarColor(){
    const data = {
      id: responseData.id,
      nome: responseData.nome,
      descricao: responseData.descricao,
      colaboradores: responseData.colaboradores,
      color: handleColor
    }

    //Atualizando nome da Equipe
    fetch(`http://localhost:3000/equipes/${responseData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  }
  return (
    <Container>
      <div className='containerInput'>
        <Input
          labelText="Alterar cor:"
          type="Color"
          handleInput={e => setHandleColor(e.target.value)}
        />
      </div>
      <div className='containerButton'>
        <Button text="Confirmar Alteração" aoClicar={AlterarColor}/>
      </div>
    </Container>
  )
}

export default Color