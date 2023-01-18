import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  padding-left: 50px;

  display: flex;
  align-items: center;//x
  justify-content: flex-start;//y
  gap: 50px;

  letter-spacing: 0.8px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-align: center;

  border-radius: 5px 5px 0px 0px;
  border-bottom: 3px solid black;
  background-color: #7C7A7A;

  :hover{
    background-color: black;
  }
`