import styled from "styled-components";

export const CardComp = styled.div`
  min-width: 250px;

  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;

  scroll-snap-align: none start;
  border-radius: 5px;
  background-color: #363636;
`

export const ColorTop = styled.div`
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 45px;
  background-color: ${props => props.color};
  filter: contrast(3);
`

export const UserData = styled.div`
  text-align: center;
  margin-bottom: 20px;

  color: #fff;
  .Photo_User{
    width: 120px;
    margin-bottom: 15px;
    border-radius: 50%;
  }
`


