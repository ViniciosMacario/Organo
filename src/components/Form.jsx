import React, {useState } from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container, ContainerMax } from './Form.js'
import Select from './Form/Select.jsx'
import {v4 as uuid4} from 'uuid'

function Form( { staffData } ) {
  //Controle da renderização dos formulários baseado no Click
  const [Time, SetTime] = useState(false);


  // Salvando os valores digitados nos inputs do formulário da nova equipe.
  const [handleInput, setHandleInput] = useState();
  const [handleTextAreaState, sethandleTextAreaState] = useState();
  const [handleColor, setHandleColor] = useState('#331010');

  //Dados da nova Equipe
  const staff = {
    id: uuid4(),
    nome: handleInput,
    colaboradores: [],
    descricao: handleTextAreaState,
    color: handleColor,
  }

  function createStaff()
  {
    fetch("http://localhost:3000/equipes", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff)
    })
  }

  //Funções responsavel por deixar visivel e invisivel os Formulário baseado no Click.
  function aoFormAddMemberClick()
  {
    SetTime(true)
  }
  function aoCreateTimeClick()
  {
    SetTime(false)
  }

  // Salvando os valores digitados nos inputs do formulário do novo usuário.
  const [id, setId] = useState();
  const [handleInputColaborador, setHandleInputColaborador] = useState();
  const [handleInputCargo, setHandleInputCargo] = useState();

  //Dados do novo Colaborador
  const novoColaborador = {
    id: uuid4(),
    nome: handleInputColaborador,
    cargo: handleInputCargo,
  }

  function addColaborador(e)
  {
    e.preventDefault();
    const dataObj =  staffData.find((element) => element.id === id);
    dataObj.colaboradores.push(novoColaborador);
    
    
    fetch(`http://localhost:3000/equipes/${id}`,{
      method: "PATCH",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataObj)
    })
    .then(
      location.reload()
    )
    .catch((e) => console.log(e))
  }


  return (
    <ContainerMax> 
      <ButtonsGroup clickForm={Time}>
        <Button  aoClicar={aoFormAddMemberClick} text='Adicionar Colaborador'/>
        <Button  aoClicar={aoCreateTimeClick} text='Criar Time'/>
      </ButtonsGroup>

      <Container>
      {!Time && (<FormCreateEquip>
          <div>
            <Input 
              type='text' 
              placeholder='Digite o nome da Equipe'
              labelText='Nome:'
              handleInput={(e) => setHandleInput(e.target.value)}
              required
            />
            <TextArea handleOnChange={(e) => sethandleTextAreaState(e.target.value)}/>
            <Input 
              handleInput={(e) => setHandleColor(e.target.value)}
              type='color' 
              labelText='Escolha uma Cor:'
            />
          </div>
          <Button text='Criar Time' aoClicar={createStaff}/>
        </FormCreateEquip>)
      }

      {Time && (<FormAddMember>
          <Input 
            type='text' 
            labelText='Nome:' 
            placeholder='Digite o nome'
            handleInput={e => setHandleInputColaborador(e.target.value)}
            required
          />
          <Input 
            type='text' 
            labelText='Cargo:'
            handleInput={e => setHandleInputCargo(e.target.value)} 
            placeholder='Digite o Cargo'
            required
          />
          <Select
            labelText='Selecione uma Equipe:'
            options={staffData}
            handleSelect={e => setId(e.target.value)}
          />

          <Button text='Adicionar Colaborador' aoClicar={addColaborador}/>
        </FormAddMember>)
      }
      </Container>
    </ContainerMax>
  )
}

export default Form;