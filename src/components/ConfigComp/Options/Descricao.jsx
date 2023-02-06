import React, { useState } from "react";
import TextArea from '../../Form/TextArea.jsx';
import {Container} from './Descricao.js';
import Button from '../../Form/Button.jsx';
import CardNotification from "../../Notificação/CardNotification.jsx"

function Descricao ({responseData}){
  const [handleDescricao, setHandleDescricao] = useState();

  const [cardNotification, setCardNotification] = useState(false);
  const [handleCardNotification, setHandleCardNotification] = useState(true);
  const [handleStatus, setHandleStatus] = useState();
  const [cardNotificationText, setCardNotificationText] = useState();

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

    setHandleStatus("sucess")
    setCardNotificationText(`Alterado a descrição com Sucesso!`)
    
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
      setCardNotificationText(`Ocorreu um erro na alteração da descrição}: ${e}`)
    
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
  return(
    <Container>
      {cardNotification && <CardNotification status={handleStatus} text={cardNotificationText} handleCardNotification={handleCardNotification}/>}

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