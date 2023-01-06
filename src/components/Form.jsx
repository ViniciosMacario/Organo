import React, { useState } from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container, ContainerMax } from './Form.js'
import Select from './Form/Select.jsx'

function Form() {
  const [Time, SetTime] = useState(false);
  
  function aoFormAddMemberClick()
  {
    SetTime(true)
  }
  function aoCreateTimeClick()
  {
    SetTime(false)
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
              required
            />
            <TextArea/>
            <Input 
              type='color' 
              labelText='Nome:'
            />
          </div>
            <Button text='Criar Time'/>
        </FormCreateEquip>)
      }

      {Time && (
        <FormAddMember>
          <Input 
            type='text' 
            labelText='Nome:' 
            placeholder='Digite o nome'
            required
          />
          <Input 
            type='text' 
            labelText='Cargo:' 
            placeholder='Digite o Cargo'
            required
          />
          <Select
            labelText='Selecione uma Equipe:'
            
          />

          <Button text='Adicionar Colaborador'/>
        </FormAddMember>)
      }
      </Container>
    </ContainerMax>
  )
}

export default Form