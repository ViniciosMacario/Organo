import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body::-webkit-scrollbar{
  width: 10px;
  background-color: white;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(11, 164, 203, 1);    
  border-radius: 5px;   
}   
` 