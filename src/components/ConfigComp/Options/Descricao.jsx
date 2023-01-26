import React from "react";
import TextArea from '../../Form/TextArea.jsx';
import {Container} from './Descricao.js';
import Button from '../../Form/Button.jsx';

function Descricao (){
  return(
    <Container>
      <div className="containerInput">
        <TextArea/>
      </div>
      <div className="containerButton">
        <Button text="Confirmar alteração"/>
      </div>
    </Container>
  )
}

export default Descricao;