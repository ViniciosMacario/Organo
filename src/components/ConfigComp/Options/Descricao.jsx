import React, { useState } from "react";
import TextArea from '../../Form/TextArea.jsx';
import {Container} from './Descricao.js';
import Button from '../../Form/Button.jsx';

function Descricao ({responseData}){
  const [handleDescricao, setHandleDescricao] = useState();

  async function AlterarColor(){
    const data = {
      id: responseData.id,
      nome: responseData.nome,
      descricao: handleDescricao,
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
        <TextArea 
          defaultValue=""
          value={responseData.descricao}
          handleOnChange={e => setHandleDescricao(e.target.value)}
        />

      </div>
      <div className="containerButton">
        <Button text="Confirmar alteração" aoClicar={AlterarColor}/>
      </div>
    </Container>
  )
}

export default Descricao;