import React from 'react'
import { CardComp, UserData, ColorTop } from './Card'
import Vinicios from '../img/Vini.jpg'

function Card({nome, cargo, color}) {
  return (
    <CardComp>
      <ColorTop color={color}></ColorTop>
      <UserData>
        <img className='Photo_User' src={Vinicios} alt=''/>
        <p>{nome}</p>
        <p>{cargo}</p>
      </UserData>
    </CardComp>
  )
}

export default Card