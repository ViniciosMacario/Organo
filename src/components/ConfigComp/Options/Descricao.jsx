import React, { useState } from "react";
import TextArea from '../../Form/TextArea.jsx';
import {Container} from './Descricao.js';
import Button from '../../Form/Button.jsx';

function Descricao ({responseData, cardNotification,cardNotificationText,handleCardNotification,handleStatus}){
 const[handleDescricao, setHandleDescricao] = useState();

  const data = {
    id: responseData.id,
    nome: responseData.nome,
    descricao: handleDescricao,
    colaboradores: responseData.colaboradores,
    color: responseData.color
  }

  function AlterarColor(){
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
    cardNotificationText(`Alterado a descrição com Sucesso!`)
    
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
      cardNotificationText(`Ocorreu um erro na alteração da descrição}: ${e}`)
    
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