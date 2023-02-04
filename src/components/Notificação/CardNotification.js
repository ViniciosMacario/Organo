import styled from "styled-components";

export const Container = styled.div`
  min-height: 120px;
  min-width: 450px;
  max-width: 450px;
  position: fixed;
  z-index: 1;
  bottom: 30px;
  left: -450px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;


  ${(props) => props.handleCardNotification ? `animation: Card-visible 1s both;` : `animation: Card-invisible 1s ;`}
  
  color: white;
  letter-spacing: 0.5px;
  border-radius: 0px 10px 10px 0px;

  ${(props) => {
  if (props.status === 'sucess'){
      return ` background: green;`
    }else{
      return `background: red;`
      }
    }
  }

  @keyframes Card-visible {
    to{
      left: 0px;
    }
  }
  @keyframes Card-invisible {
    from{
      left: 0px;
    }
    to{
      left: -450px;
    }
  }
`