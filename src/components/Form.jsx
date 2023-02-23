import React, {useState } from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container, ContainerMax } from './Form.js'
import Select from './Form/Select.jsx'
import {v4 as uuid4} from 'uuid'

function Form( { staffData, aoFormAddMemberClick, aoCreateTimeClick,Time, cardNotification,cardNotificationText,handleCardNotification,handleStatus } ) {


  // Salvando os valores digitados nos inputs do formulário da nova equipe.
  const [handleInput, setHandleInput] = useState(String);
  const [handleTextAreaState, sethandleTextAreaState] = useState(String);
  const [handleColor, setHandleColor] = useState('#331010');

  //Dados da nova Equipe
  const staff = {
    id: uuid4(),
    nome: handleInput,
    colaboradores: [],
    descricao: handleTextAreaState,
    color: handleColor,
  }

  function createStaff(e)
  {
    e.preventDefault();
    if(handleInput && handleTextAreaState){
      try{
        fetch("http://localhost:3000/equipes",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(staff)})
        
        handleStatus("sucess")

        cardNotificationText(`A equipe ${handleInput.toUpperCase()} foi criada com Sucesso!`)
        
        // renderizando o componente.
        cardNotification(true);
      
        //Depois de 3s estamos fechando a notificação.
        setTimeout(() =>{
          handleCardNotification(false);
        }, 3000);

        //Depois de 5s estamos desfazendo o componente.
        setTimeout(() =>{
          cardNotification(false);
        }, 5000);
      }catch(e){
        handleStatus("erro")
        cardNotificationText(`Ocorreu um erro na criação do Time ${handleInput.toUpperCase()}: ${e}`)
      
        // renderizando o componente.
        cardNotification(true);
      
        //Depois de 5s estamos fechando a notificação.
        setTimeout(() =>{
          handleCardNotification(false);
        }, 5000);

        //Depois de 5s estamos desfazendo o componente.
        setTimeout(() =>{
          cardNotification(false);
        }, 7000);
      }
    }
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
    try{
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

      handleStatus("sucess");
      cardNotificationText(`O Colaborador ${handleInputColaborador.toUpperCase()} foi Adicionado com Sucesso!`);
      
      // renderizando o componente.
      cardNotification(true);
    
      //Depois de 3s estamos fechando a notificação.
      setTimeout(() =>{
        handleCardNotification(false);
      }, 3000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        cardNotification(false);
        location.reload()
      }, 5000);

    }catch(e){
      handleStatus("erro")
      cardNotificationText(`Ocorreu um erro na criação do Time ${handleInput.toUpperCase()}: ${e}`)
    
      // renderizando o componente.
      cardNotification(true);
    
      //Depois de 5s estamos fechando a notificação.
      setTimeout(() =>{
        handleCardNotification(false);
      }, 5000);

      //Depois de 5s estamos desfazendo o componente.
      setTimeout(() =>{
        cardNotification(false);
      }, 7000);
    }
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
          <Button text='Criar Time' aoClicar={(e) => createStaff(e)}/>
        </FormCreateEquip>)
      }

      {Time && (<FormAddMember>
          <Input 
            type='text' 
            labelText='Nome:' 
            placeholder='Digite o nome'
            handleInput={(e) => setHandleInputColaborador(e.target.value)}
            required
          />
          <Input 
            type='text' 
            labelText='Cargo:'
            handleInput={(e) => setHandleInputCargo(e.target.value)} 
            placeholder='Digite o Cargo'
            required
          />
          <Select
            labelText='Selecione uma Equipe:'
            options={staffData}
            handleSelect={(e) => setId(e.target.value)}
          />

          <Button text='Adicionar Colaborador' aoClicar={addColaborador}/>
        </FormAddMember>)
      }
      </Container>
    </ContainerMax>
  )
}

export default Form;