import React from "react";
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import {Container} from './Nome.js'
import { useState } from "react";

function Nome({responseData}){
  const [handleInput, setHandleInput] = useState();

  async function AlterarNome(){
    const data = {
      id: responseData.id,
      nome: handleInput,
      descricao: responseData.descricao,
      colaboradores: responseData.colaboradores,
      color: responseData.color
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

  return(
    <Container>
      <div className="containerInput">
        <Input 
          type="text"
          labelText="Nome da Equipe: "
          placeholder="Alterar nome"
          handleInput={e => setHandleInput(e.target.value)}
        />
      </div>

      <div className="containerButton">
        <Button text="Confirmar Alteração" aoClicar={AlterarNome}/>
      </div>
    </Container>
  )
}

export default Nome;