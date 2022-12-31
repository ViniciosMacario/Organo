import React from 'react'
import { CardComp, UserData } from './Card'
import Vinicios from '../img/Vini.jpg'

function Card() {
  return (
    <CardComp>
      <div></div>
      <UserData>
      <img className='Photo_User' src={Vinicios} alt=''/>
        <p>Vinicios Macario</p>
        <p>Front-end</p>
      </UserData>
    </CardComp>
  )
}

export default Card