import React from "react";
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import {Container} from './Nome.js'
import { useState } from "react";

function Nome({responseData, cardNotification,cardNotificationText,handleCardNotification,handleStatus}){
  const [handleInput, setHandleInput] = useState();

    const data = {
      id: responseData.id,
      nome: handleInput,
      descricao: responseData.descricao,
      colaboradores: responseData.colaboradores,
      color: responseData.color
    }
   function AlterarNome(){
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
    cardNotificationText(`Alterado o nome com Sucesso!`)
    
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
      cardNotificationText(`Ocorreu um erro na alteração do nome}: ${e}`)
    
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