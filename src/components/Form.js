import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const ButtonsGroup = styled.div`
  position: relative;
  top: 5px;
  z-index: -1;
  display: flex;
  justify-content: center;
  gap: 5px;

  /* background-color: beige; */

  button{
    border-radius: 10px 10px 0px 0px;
  }
`

export const FormCreateEquip = styled.form`
  padding: 25px;
  margin: 0 auto;
  max-width: 600px;
  
  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: black;

  div:nth-of-type(1){
    display: flex;
    flex-direction: column;
    gap: 25px;
  }


  > button{
    margin: 0 auto;
    background-color: green;
  }
`

export const FormAddMember = styled.form`
  padding: 25px;
  margin: 0 auto;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: green;
`