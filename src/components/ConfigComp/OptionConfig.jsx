import React from "react";
import { Container } from "./OptionConfig.js";

function OptionConfig({text, iconName}){
  return (
    <Container>
      <img src={iconName}/>
      <p>{text}</p>
    </Container>
  )
}

export default OptionConfig;