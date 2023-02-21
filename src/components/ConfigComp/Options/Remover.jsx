import React from 'react';
import Button from '../../Form/Button.jsx';
import { Container } from './Remover.js';
import { useState } from 'react';
import CardNotification from "../../Notificação/CardNotification.jsx"

function Remover({responseData}) {
  // const [handleInput, setHandleInput] = useState();
  const [itemSelecionado, setItemSelecionado] = useState();

  const [cardNotification, setCardNotification] = useState(false);
  const [handleCardNotification, setHandleCardNotification] = useState(true);
  const [handleStatus, setHandleStatus] = useState();
  const [cardNotificationText, setCardNotificationText] = useState();

  const data = {
    colaboradores:  responseData.colaboradores.filter((colaborador) => colaborador.id !== itemSelecionado),
  }

  function removeCollaborator(){
    try{
      //Atualizando nome da Equipe
      fetch(`http://localhost:3000/equipes/${responseData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      setHandleStatus("sucess")
      setCardNotificationText(`Colaborador removido com Sucesso!`)
      
      // renderizando o componente.
      setCardNotification(true);
    
      //Depois de 3s estamos fechando a notificação.
      setTimeout(() =>{
        setHandleCardNotification(false);
      }, 3000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        setCardNotification(false);
      }, 5000);
    }catch(e){
      setHandleStatus("erro")
      setCardNotificationText(`Ocorreu um erro na remoção do colaborador}: ${e}`)
    
      // renderizando o componente.
      setCardNotification(true);
    
      //Depois de 5s estamos fechando a notificação.
      setTimeout(() =>{
        setHandleCardNotification(false);
      }, 5000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        setCardNotification(false);
      }, 7000);
    }
  }
  

  return (
    <Container>
      {cardNotification && <CardNotification status={handleStatus} text={cardNotificationText} handleCardNotification={handleCardNotification}/>}

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
        {responseData.colaboradores.length > 0 && <Button text="Remover" aoClicar={removeCollaborator}/>}
      </div>
    </Container>
  )
}

export default Remover