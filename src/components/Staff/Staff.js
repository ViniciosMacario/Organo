import styled from "styled-components";
import { TextColor } from "../Design/Colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding: 25px;
  
  color: ${TextColor};

  .header{
    margin-block: 25px 50px;

    display: flex;
    justify-content: space-between;
    /* background-color: black; */

    h2{
      opacity: 0.95;
    }
  }

  svg{
    fill: white;
    cursor: pointer;
    :hover{
      fill: #0D0000;
      transform: scale(1.2);
    }
  }
`

export const Icon = styled.img`
  cursor: pointer;
  
`


export const Members = styled.div`
  justify-self: center;
  padding: 15px;
  display: flex;
  gap: 30px;

  overflow-x: auto;
  scroll-padding: 25px;
  scroll-snap-type: x mandatory;
  /* background-color: black; */

  ${(props) => props.statusColaborador ?
    `
      display: flex;
      flex-direction: column;
      gap: 25px;
      p{
        text-align: center;
        margin-top: 100px;
        font-Weight: bold;
        letter-spacing: 1px;
      }

    `:
    `
    display: flex;
    `
  }

  @media (min-width: 1440px){
    align-items: center;
    justify-content: center;
  }

  ::-webkit-scrollbar{
    height: 12px;
    border-radius: 10px;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #8C8888;    
  }  
`