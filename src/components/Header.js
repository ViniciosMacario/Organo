import styled from "styled-components";
import business from '../img/business.jpg'

export const HeaderComp = styled.header`
  padding-block: 160px;
  
  text-align: center;
  color: white;
  background: 
    linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0,0,0,0)), url(${business})
    no-repeat ;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px){
    background-position: inherit;

  }
  h1{
    padding-block: 30px;
    font-size: 25px;
  }

`