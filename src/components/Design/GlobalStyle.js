import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}


body::-webkit-scrollbar{
  width: 10px;
  background-color: #0D0000;
}

body::-webkit-scrollbar-thumb {
  background-color: #8C8888;    
}   
` 