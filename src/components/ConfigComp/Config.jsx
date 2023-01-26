import React, { useRef, useLayoutEffect } from "react";
import { Container,Title, GroupOptions } from "./Config";
import OptionConfig from "./OptionConfig.jsx";
import { iconesConfig } from "./IconesConfig.js";
import { useState } from "react";


import Nome from "./Options/Nome.jsx";
import Color from './Options/Color.jsx'
import Descricao from "./Options/Descricao.jsx"
import Remover from "./Options/Remover.jsx"

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
  function handleDescricao(){
    setDescricaoVisible(!descricaoVisible);
  }

  //Descrição
  const [removerVisible, setRemoverVisible] = useState(false);
  function handleRemover(){
    setRemoverVisible(!removerVisible);
  }

  return (
    <Container ref={elementRef}>

      <Title>{responseData.nome}</Title>
      <GroupOptions>
        <OptionConfig   iconName={iconesConfig('editar')}     text="Editar nome"              onClick={handleNome}           />
        {nomeVisible && <Nome/>}

        <OptionConfig   iconName={iconesConfig('alterar')}    text="Editar cor"               onClick={handleColor}           />
        {colorVisible && <Color/>}

        <OptionConfig   iconName={iconesConfig('descricao')}  text="Descrição da Equipe"      onClick={handleDescricao} />
        {descricaoVisible && <Descricao/>}

        <OptionConfig   iconName={iconesConfig('remover')}    text="Remover Colaborador"      onClick={handleRemover}            />
        {removerVisible && <Remover/>}

        <div className="groupButtons">
          <OptionConfig iconName={iconesConfig('excluir')}    text="Excluir Equipe"           onClick={handleColor}             />
          <OptionConfig iconName={iconesConfig('back')}       text="Voltar"                   onClick={configExist} />
        </div>
      </GroupOptions>
    </Container>
  )
}

export default Config;