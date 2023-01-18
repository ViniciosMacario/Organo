import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;


  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: black;
`

export const Title = styled.h2`
  margin-block: 50px;
  padding: 10px;

  color: white;
  border-bottom: 3px solid white;
`

export const GroupOptions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 50px;
  /* background-color: aquamarine; */
  
  @media(min-width: 1024px){
    width: 50%;
  }

  > div:nth-last-child(1){
    margin-top: 80px;
    padding-left: 0px;
    justify-content: center;
    border: none;
    background-color: #CA0606;
  }

`