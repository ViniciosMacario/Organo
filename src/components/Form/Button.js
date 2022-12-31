import styled from "styled-components";
import { BackgroundButton, BackgroundButtonHover } from "../Design/Colors";

export const ButtonComp = styled.button`

  padding: 10px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${BackgroundButton};

  :hover{
    background-color: ${BackgroundButtonHover};
  }
`

