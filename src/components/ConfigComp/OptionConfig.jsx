import React from "react";
import { Container } from "./OptionConfig.js";

function OptionConfig({text, iconName, onClick}){
  return (
    <Container onClick={onClick}>
      <img src={iconName}/>
      <p>{text}</p>
    </Container>
  )
}

export default OptionConfig;