import styled from "styled-components";


export const TextAreaComp = styled.div`
  textArea{
    height: 250px;
    padding: 5px;
    resize: none;
    color: white;
    background-color: rgba(98, 92, 95, 0.8);
    ::placeholder{
      color: white;
      font-size: 14px;
    }
  }
`