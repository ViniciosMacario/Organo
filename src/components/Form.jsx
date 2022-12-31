import React from 'react'
import Button from './Form/Button.jsx'
import Input from './Form/Input.jsx'
import TextArea from './Form/TextArea.jsx'
import { FormCreateEquip, FormAddMember, ButtonsGroup, Container } from './Form.js'
import Select from './Form/Select.jsx'

function Form() {
  return (
    <> 
      <ButtonsGroup>
        <Button text='Adicionar Colaborador'/>
        <Button text='Criar Time'/>
      </ButtonsGroup>
      <Container>
      <FormCreateEquip>
        <div>
          <Input 
            type='text' 
            placeholder='Digite o nome da Equipe'
            label='Nome:'
            required
          />
          <TextArea/>
          <input type='color'/>
        </div>
          <Button text='Criar Time'/>
      </FormCreateEquip>

      <FormAddMember>
        <div>
        <Input label='Nome:' placeholder='Digite o nome'/>
        <Input label='Cargo:' placeholder='Digite o Cargo'/>

        <Select/>
        </div>
        
        <Button text='Adicionar Colaborador'/>

      </FormAddMember>
      </Container>
    </>
  )
}

export default Form