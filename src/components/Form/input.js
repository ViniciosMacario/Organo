import styled from "styled-components";

export const Label = styled.label`
  display: block;
  color: black;
`


export const InputComp = styled.input`
  //Se o type do componente for igual a 'Text' ele terá essa style.
  ${props => props.type === 'text' && (`
    padding: 15px;

    color: #fff;
    border: none;
    background-color: rgba(98, 92, 95, 0.8);

      ::placeholder{
      font-size: 14px;
      color: #fff;
    }
    `
  )}

  //Se o type do componente for igual a 'Text' ele terá o style padrão.
  ${props => props.type === 'color' && ('')}

`