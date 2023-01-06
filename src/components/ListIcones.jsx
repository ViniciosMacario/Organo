import React from "react";

//Componente responsável por Renderizar uma lista de Icones baseado no seu nome.
function MidiaSocial({NameIcon1, NameIcon2, NameIcon3, NameIcon4}){
  return(
    <>
      <ul>
        <li><a href="#"><img src={NameIcon1} alt={NameIcon1}/></a></li>
        <li><a href="#"><img src={NameIcon2} alt={NameIcon2}/></a></li>
        <li><a href="#"><img src={NameIcon3} alt={NameIcon3}/></a></li>
        <li><a href="#"><img src={NameIcon4} alt={NameIcon4}/></a></li>
      </ul>
    </>
  )
}

export default MidiaSocial;