import styled from "styled-components";
import { BackgroundButton, BackgroundButtonHover } from "../Design/Colors";

export const ButtonComp = styled.button`
  padding: 15px;

  border: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 5px;
  letter-spacing: 0.8px;
  font-weight: 600;
  color: white;
  background-color: ${BackgroundButton};

  :hover{
    background-color: ${BackgroundButtonHover};
  }
`

