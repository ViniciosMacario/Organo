import React from "react";
import { Container,Title, GroupOptions } from "./Config";
import OptionConfig from "./OptionConfig.jsx";
import { iconesConfig } from "./IconesConfig.js";

function Config({configExist}){
  return (
    <Container>
      <Title>Front-end</Title>
      <GroupOptions>
        <OptionConfig iconName={iconesConfig('editar')} text="Editar nome"              onClick={""} />
        <OptionConfig iconName={iconesConfig('alterar')} text="Editar cor"              onClick={""} />
        <OptionConfig iconName={iconesConfig('descricao')} text="Descrição da Equipe"   onClick={""} />
        <OptionConfig iconName={iconesConfig('remover')} text="Remover Colaborador"     onClick={""} />

        <div className="groupButtons">
          <OptionConfig iconName={iconesConfig('excluir')} text="Excluir Equipe"        onClick={""} />
          <OptionConfig iconName={iconesConfig('back')} text="Voltar"                   onClick={configExist} />
        </div>
      </GroupOptions>
    </Container>
  )
}

export default Config;