import React from 'react'
import { Container } from './CardNotification'
import sucess from "../../assets/icons8-ok.svg"
import erro from "../../assets/icons8-cancel.svg"

function CardNotification({status, text, handleCardNotification}) {
  console.log(text)
  const ObjIcon = {
    sucess,
    erro
  }
  console.log(handleCardNotification)
  return (
    <Container handleCardNotification={handleCardNotification} status={status}>
      <img src={ObjIcon[status]} />
      <p style={{fontWeight: "bold"}}>{text}</p>
    </Container>
  )
}

export default CardNotification