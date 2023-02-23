import React, { useState } from 'react';
import Button from '../../Form/Button.jsx';
import { Container } from './Remover.js';

function Remover({responseData, cardNotification,cardNotificationText,handleCardNotification,handleStatus}) {
  const [itemSelecionado, setItemSelecionado] = useState();

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
      handleStatus("sucess")
      cardNotificationText(`Colaborador removido com Sucesso!`)
      
      // renderizando o componente.
      cardNotification(true);
    
      //Depois de 3s estamos fechando a notificação.
      setTimeout(() =>{
        handleCardNotification(false);
      }, 3000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        cardNotification(false);
      }, 5000);
    }catch(e){
      handleStatus("erro")
      cardNotificationText(`Ocorreu um erro na remoção do colaborador}: ${e}`)
    
      // renderizando o componente.
      cardNotification(true);
    
      //Depois de 5s estamos fechando a notificação.
      setTimeout(() =>{
        handleCardNotification(false);
      }, 5000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        cardNotification(false);
      }, 7000);
    }
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
        {responseData.colaboradores.length > 0 && <Button text="Remover" aoClicar={removeCollaborator}/>}
      </div>
    </Container>
  )
}

export default Remover