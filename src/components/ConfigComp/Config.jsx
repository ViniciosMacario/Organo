import React, { useRef, useLayoutEffect } from "react";
import { Container,Title, GroupOptions } from "./Config";
import OptionConfig from "./OptionConfig.jsx";
import { iconesConfig } from "./IconesConfig.js";
import { useState } from "react";


import Nome from "./Options/Nome.jsx";
import Color from './Options/Color.jsx'
import Descricao from "./Options/Descricao.jsx"
import Remover from "./Options/Remover.jsx"

function Config({configExist, responseData, cardNotification,cardNotificationText,handleCardNotification,handleStatus}){
  const elementRef = useRef();

  //Precisamos usar esse hook para acessar o valor de useRef
    //Ele executa uma função a cada renderização do componente
  useLayoutEffect(() => {
    window.scroll({
      left: 0,
      top: elementRef.current.offsetTop - 0.2,
      behavior: 'smooth'
    });
  })

  //Nome
  const [nomeVisible, setNomeVisible] = useState(false);
  function handleNome(){
    setNomeVisible(!nomeVisible);
  }

  //Color
  const [colorVisible, setColorVisible] = useState(false);
  function handleColor(){
    setColorVisible(!colorVisible);
  }

  //Descrição
  const [descricaoVisible, setDescricaoVisible] = useState(false);
  function handleDescription(){
    setDescricaoVisible(!descricaoVisible);
  }

  //Remover
  const [removerVisible, setRemoverVisible] = useState(false);
  function handleRemoverCollaborator(){
    setRemoverVisible(!removerVisible);
  }


  function deleteTeam(){
    try{
      fetch(`http://localhost:3000/equipes/${responseData.id}`, {
        method: "DELETE"
      })
      window.location.reload()
    }catch(e){
      handleStatus("erro")
      cardNotificationText(`Ocorreu um erro}: ${e}`)
    
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
    <Container ref={elementRef}>
      <Title>{responseData.nome}</Title>
      <GroupOptions>
        <OptionConfig   iconName={iconesConfig('editar')}     text="Editar nome"              onClick={handleNome}/>
        {nomeVisible && <Nome responseData={responseData}
          cardNotification={cardNotification}
          cardNotificationText={cardNotificationText}
          handleCardNotification={handleCardNotification}
          handleStatus={handleStatus}        
        />}

        <OptionConfig   iconName={iconesConfig('alterar')}    text="Editar cor"               onClick={handleColor}/>
        {colorVisible && <Color responseData={responseData}
          cardNotification={cardNotification}
          cardNotificationText={cardNotificationText}
          handleCardNotification={handleCardNotification}
          handleStatus={handleStatus}        
        />}

        <OptionConfig   iconName={iconesConfig('descricao')}  text="Descrição da Equipe"      onClick={handleDescription}/>
        {descricaoVisible && <Descricao responseData={responseData}
          cardNotification={cardNotification}
          cardNotificationText={cardNotificationText}
          handleCardNotification={handleCardNotification}
          handleStatus={handleStatus}        
        />}

        <OptionConfig   iconName={iconesConfig('remover')}    text="Remover Colaborador"      onClick={handleRemoverCollaborator}/>
        {removerVisible && <Remover responseData={responseData} 
          cardNotification={cardNotification}
          cardNotificationText={cardNotificationText}
          handleCardNotification={handleCardNotification}
          handleStatus={handleStatus}        
        />}

        <div className="groupButtons">
          <OptionConfig iconName={iconesConfig('excluir')} responseData={responseData}   text="Excluir Equipe"    onClick={deleteTeam}  />
          <OptionConfig iconName={iconesConfig('back')}       text="Voltar"                   onClick={configExist}/>
        </div>
      </GroupOptions>
    </Container>
  )
}

export default Config;