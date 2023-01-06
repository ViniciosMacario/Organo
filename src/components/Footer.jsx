import React from 'react'
import { FooterComp } from './Footer'
import ListIcones from './ListIcones.jsx'
import {Icones} from '../assets/IconesMidiaSocialFuc.js'

function Footer() {
  return (
    <FooterComp>
      <h3>Logo</h3>
      Links
      <ListIcones 
        NameIcon1={Icones('instagram')}
        NameIcon2={Icones('facebook')}
        NameIcon3={Icones('discord')}
        NameIcon4={Icones('linkedin')}
      />
    </FooterComp>
  )
}

export default Footer