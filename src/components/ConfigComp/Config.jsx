import React from "react";
import { Container,Title, GroupOptions } from "./Config";
import OptionConfig from "./OptionConfig.jsx";
import { iconesConfig } from "./IconesConfig.js";

function Config(){
  return (
    <Container>
      <Title>Front-end</Title>
      <GroupOptions>
        <OptionConfig iconName={iconesConfig('editar')} text="Editar nome"/>
        <OptionConfig iconName={iconesConfig('alterar')} text="Editar cor"/>
        <OptionConfig iconName={iconesConfig('descricao')} text="Descrição da Equipe"/>
        <OptionConfig iconName={iconesConfig('remover')} text="Remover Colaborador"/>


        <OptionConfig iconName={iconesConfig('excluir')} text="Excluir Equipe"/>
      </GroupOptions>
    </Container>
  )
}

export default Config;