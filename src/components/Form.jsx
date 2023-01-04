import React from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container, ContainerMax } from './Form.js'
import Select from './Form/Select.jsx'

function Form() {
  return (
    <ContainerMax> 
      <ButtonsGroup>
        <Button text='Adicionar Colaborador'/>
        <Button text='Criar Time'/>
      </ButtonsGroup>

      <Container>
        {/* <FormCreateEquip>
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
        </FormCreateEquip> */}

      <FormAddMember>
        <Input 
          type='text' 
          labelText='Nome:' 
          placeholder='Digite o nome'
        />
        <Input 
          type='text' 
          labelText='Cargo:' 
          placeholder='Digite o Cargo'
        />
        <Select
          labelText='Selecione uma Equipe:'
        />

        
        <Button text='Adicionar Colaborador'/>

      </FormAddMember>
      </Container>
    </ContainerMax>
  )
}

export default Form