import styled from "styled-components";

export const Section = styled.section`
  padding-top: 25px;
  background-color: blueviolet;

  > h2{
    width: 250px;
    margin: 50px auto;
    white-space: nowrap;
    text-align: center;
    color: white;
    border-bottom: 3px solid red;
  }

  div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
  }
`

export const Members = styled.div`
  display: flex;
  gap: 30px;
`