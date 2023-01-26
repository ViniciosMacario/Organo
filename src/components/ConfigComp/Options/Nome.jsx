import React from "react";
import Input from '../../Form/Input.jsx'
import Button from '../../Form/Button.jsx'
import {Container} from './Nome.js'

function Editar (){
  return(
    <Container>
      <div className="containerInput">
        <Input 
          type="text"
          labelText="Nome da Equipe: "
          placeholder="Alterar nome"
        />
      </div>

      <div className="containerButton">
        <Button text="Confirmar Alteração"/>
      </div>
    </Container>
  )
}

export default Editar;