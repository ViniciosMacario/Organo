import styled from "styled-components";


export const Container = styled.section`
  padding: 25px;

  background-color: rgba(88, 39, 245, 0.79);

  > div:nth-of-type(1){
    margin-block: 25px 50px;

    display: flex;
    justify-content: space-between;
    /* background-color: beige; */
  }
`

export const Members = styled.div`
  padding-bottom: 25px;
  display: flex;
  gap: 30px;
  overflow-x:  scroll;
  scroll-snap-type: x mandatory;
`