import styled from "styled-components";
import { TextColor } from "./Design/Colors";

export const Container = styled.section`
  padding: 25px;

  color: ${TextColor};
  background-color: rgba(88, 39, 245, 0.79);

  > div:nth-of-type(1){
    margin-block: 25px 50px;

    display: flex;
    justify-content: space-between;
    /* background-color: beige; */

    h2{
      opacity: 0.95;
    }
  }
`

export const Members = styled.div`
  padding-bottom: 25px;

  display: flex;
  gap: 30px;

  overflow-x:  scroll;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar{
    height: 12px;
    border-radius: 10px;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(11, 164, 203, 1);    
  }  
`