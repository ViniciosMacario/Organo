import React from 'react'
import { ButtonComp } from './Button';


function Button({text, aoClicar}) {
  return <ButtonComp onClick={aoClicar}>{text}</ButtonComp>
}

export default Button;