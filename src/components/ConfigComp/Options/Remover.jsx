import React from 'react';
import Input from '../../Form/Input.jsx';
import Button from '../../Form/Button.jsx';
import { Container } from './Remover.js';
import { useState } from 'react';

function Remover({responseData}) {
  // const [handleInput, setHandleInput] = useState();
  const [itemSelecionado, setItemSelecionado] = useState();

  async function RemoverColaborador(){
    const data = {
      colaboradores:  responseData.colaboradores.filter((colaborador) => colaborador.id !== itemSelecionado),
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
        <div className='groupColaboradores'>
          {responseData.colaboradores.length === 0 
            ? 
              <p style={{margin: "0 auto"}}>Não há colaborador nesta equipe </p>
            : 
              responseData.colaboradores.map((colaborador) => <Button key={colaborador.id} text={colaborador.nome} aoClicar={e => setItemSelecionado(colaborador.id)}/>)
          }
        </div>
      </div>
      <div className='containerButton'>
        {responseData.colaboradores.length > 0 && <Button text="Remover" aoClicar={RemoverColaborador}/>}
      </div>
    </Container>
  )
}

export default Remover