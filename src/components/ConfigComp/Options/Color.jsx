import React, { useState } from 'react'
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import { Container } from './Color.js'

function Color({responseData, cardNotification,cardNotificationText,handleCardNotification,handleStatus}) {
  const [handleColor, setHandleColor] = useState();

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
      handleStatus("sucess")
      cardNotificationText(`Alterado a cor com Sucesso!`)
      
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
      cardNotificationText(`Ocorreu um erro na alteração da cor}: ${e}`)
    
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