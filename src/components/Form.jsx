import React, {useState } from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container, ContainerMax } from './Form.js'
import Select from './Form/Select.jsx'


function Form({staffData}) {
  //Controle da renderização dos formulários baseado no Click
  const [Time, SetTime] = useState(false);
  // Salvando os valores digitados nos inputs do formulário.
  const [handleInput, setHandleInput] = useState();
  // Salvando os valores digitados no 'TextArea'formulário.
  const [handleTextAreaState, sethandleTextAreaState] = useState();
  const [handleColor, setHandleColor] = useState();

  const staff = {
    id: "",
    nome: handleInput,
    colaboradores: [],
    descricao: handleTextAreaState,
    color: handleColor,
  }
  async function submit()
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



  const [escolha, setEscolha] = useState();

  
  const [handleInputColaborador, setHandleInputColaborador] = useState();
  const [handleInputCargo, setHandleInputCargo] = useState();

  //Dados do novo Colaborador
  const colaborador = {
    id: "",
    nome: handleInputColaborador,
    cargo: handleInputCargo,
  }
  // console.log(staffData)

  const Array = staffData.find(data => {
    return data.nome === escolha;
  })
  console.log(Array)

  function addColaborador()
  {
    const Array = staffData.find(data => {
      return data.nome === escolha;
    })
  }



  return (
    <ContainerMax> 
      <ButtonsGroup>
        <Button aoClicar={aoFormAddMemberClick} text='Adicionar Colaborador'/>
        <Button aoClicar={aoCreateTimeClick} text='Criar Time'/>
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
            <Button text='Criar Time' aoClicar={submit}/>
        </FormCreateEquip>)
      }

      {Time && (
        <FormAddMember>
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
            handleSelect={e => setEscolha(e.target.value)}
          />

          <Button text='Adicionar Colaborador' aoClicar={addColaborador}/>
        </FormAddMember>
        )
      }
      </Container>
    </ContainerMax>
  )
}

export default Form