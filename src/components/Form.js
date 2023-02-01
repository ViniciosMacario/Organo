import styled from "styled-components";

export const ContainerMax = styled.div`
  margin-block: 50px;
`

export const Container = styled.div`
  max-width: 550px;
  margin: 0 auto;
`

export const ButtonsGroup = styled.div`

  display: flex;
  justify-content: center;
  gap: 5px;

  /* background-color: beige; */
  
/* 
  ${props => props.clickForm ? 
    `
      button{
        color: red;
      }
    `
    :
    `
    button{
        color: blue;
      }
    `  
  }} */


  button{
    border-radius: 10px 10px 0px 0px;
  }
`

export const FormCreateEquip = styled.form`
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 25px;

  border-radius: 10px;
  background-color: #D9D9D9;

  div:nth-of-type(1){
    display: flex;
    flex-direction: column;
    gap: 25px;
  }


  > button{
    margin-inline: auto;
  }
`

export const FormAddMember = styled.form`
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 25px;

  border-radius: 10px;
  background-color: #D9D9D9;

  > button{
    margin-inline: auto;
    margin-top: 50px;
  }
`