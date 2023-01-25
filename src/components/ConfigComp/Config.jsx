import React, { useRef, useLayoutEffect } from "react";
import { Container,Title, GroupOptions } from "./Config";
import OptionConfig from "./OptionConfig.jsx";
import { iconesConfig } from "./IconesConfig.js";

function Config({configExist, responseData}){
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
  

  return (
    <Container ref={elementRef}>
      <Title>{responseData.nome}</Title>
      <GroupOptions>
        <OptionConfig   iconName={iconesConfig('editar')}     text="Editar nome"             onClick={""}           />
        <OptionConfig   iconName={iconesConfig('alterar')}    text="Editar cor"              onClick={""}           />
        <OptionConfig   iconName={iconesConfig('descricao')}  text="Descrição da Equipe"     onClick={""}           />
        <OptionConfig   iconName={iconesConfig('remover')}    text="Remover Colaborador"     onClick={""}           />
        
        <div className="groupButtons">
          <OptionConfig iconName={iconesConfig('excluir')}    text="Excluir Equipe"           onClick={""}          />
          <OptionConfig iconName={iconesConfig('back')}       text="Voltar"                   onClick={configExist} />
        </div>
      </GroupOptions>
    </Container>
  )
}

export default Config;