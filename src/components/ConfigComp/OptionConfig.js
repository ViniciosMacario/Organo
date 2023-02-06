import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  padding-left: 50px;
  white-space: nowrap;

  
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
  border-bottom: 3px solid white;
  background-color: #8C8888;

  :hover{
    background-color: #0D0000;
  }

`