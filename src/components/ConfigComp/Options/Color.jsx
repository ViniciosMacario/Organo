import React, { useState } from 'react'
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import { Container } from './Color.js'
import CardNotification from "../../Notificação/CardNotification.jsx"

function Color({responseData}) {
  const [handleColor, setHandleColor] = useState();

  const [cardNotification, setCardNotification] = useState(false);
  const [handleCardNotification, setHandleCardNotification] = useState(true);
  const [handleStatus, setHandleStatus] = useState();
  const [cardNotificationText, setCardNotificationText] = useState();

  const data = {
      id: responseData.id,
      nome: responseData.nome,
      descricao: responseData.descricao,
      colaboradores: responseData.colaboradores,
      color: handleColor
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
      setCardNotificationText(`Alterado a cor com Sucesso!`)
      
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
      setCardNotificationText(`Ocorreu um erro na alteração da cor}: ${e}`)
    
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