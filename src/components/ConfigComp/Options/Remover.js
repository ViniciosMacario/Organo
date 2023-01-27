import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: azure; */

  .containerInput{
    label{
      margin-bottom: 15px;
      color: #ffff;
    }
    input{
      height: 50px;
      padding: 10px;
      width: 100%;
    }
  }
  
  .containerButton{
    align-self: flex-end;
    margin-top: 25px;
    button{
      background-color: #8C8888;
      :hover{
        background-color: #0D0000;
      }
    }
  }

  .groupColaboradores{
    margin-top: 10px;
    display: flex;
    gap: 10px;
    button{
      background-color: #8C8888;
      :hover{
        background-color: #0D0000;
      }
    }
}
`