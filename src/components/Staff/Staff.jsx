import React, { useState } from 'react'
import Card from './Card.jsx'
import { InputComp } from '../Form/Input'
import { Container, Members } from '../Staff/Staff.js'
import hexToRgba from "hex-to-rgba";
import Config from '../ConfigComp/Config.jsx'

//Componente responsável por renderizar a Equipe, informando alguns dados referente a mesma como: Cor da Equipe, colaboradores, nome..
function Staff({responseData}){
  const [configVisible, setConfigVisible] = useState(false);

  //controle da visibilidade da sessão e configuração.
  function configExist(){
    setConfigVisible(false)
    window.document.body.style.overflow = "auto";
  }
  //controle da visibilidade da sessão e configuração.
  function configOpen(){
    setConfigVisible(true)
    window.document.body.style.overflow = "hidden";
  }
  
  return (
    <Container style={{background: `${hexToRgba(responseData.color, 0.8)}`}}>
      {configVisible && <Config responseData={responseData} configExist={configExist}/>}

      <div className='header'>
        
        <svg width="20" viewBox="0 0 20 20" onClick={configOpen}  xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9947 15.7619L15.6134 15.1473C18.4762 15.2408 18.5202 15.1404 18.646 14.8462L19.4325 12.9315L19.4909 12.75L19.427 12.5912C19.3933 12.5073 19.2895 12.2571 17.502 10.5528V9.65625C19.5645 7.66938 19.5205 7.56763 19.4029 7.27682L18.6198 5.34219C18.5023 5.05207 18.4576 4.93863 15.6155 5.01632L14.9967 4.37694C15.0606 3.43514 15.0281 2.48927 14.8998 1.55407L14.82 1.37325L12.7754 0.479503C12.4743 0.342003 12.3684 0.292503 10.4379 2.39488L9.57028 2.38182C7.58272 0.260191 7.48853 0.298691 7.19085 0.419003L5.28991 1.18763C4.99222 1.30794 4.88703 1.35057 5.00253 4.23807L4.3886 4.84994C1.52722 4.75644 1.48322 4.85819 1.35878 5.15107L0.570908 7.06644L0.509033 7.25L0.573658 7.4095C0.607346 7.492 0.707033 7.7395 2.49866 9.44588V10.3396C0.436158 12.3265 0.480846 12.4283 0.599096 12.7198L1.38147 14.6564C1.5011 14.9528 1.54372 15.0579 4.38516 14.9837L5.00391 15.6265C4.93977 16.5669 4.97133 17.5113 5.0981 18.4453L5.17785 18.6274L7.23553 19.5267C7.5346 19.6518 7.63841 19.6965 9.56341 17.6017L10.431 17.6127C12.4213 19.7371 12.5231 19.6958 12.8139 19.5783L14.7107 18.8117C15.0105 18.6928 15.115 18.6508 14.9947 15.7619ZM6.84228 11.2767C6.60238 10.6497 6.55299 9.96588 6.7003 9.31095C6.84762 8.65601 7.18507 8.05918 7.67033 7.59532C8.15558 7.13146 8.76702 6.82125 9.42793 6.70361C10.0888 6.58596 10.7698 6.66612 11.3853 6.93403C12.0008 7.20195 12.5235 7.64567 12.8877 8.20954C13.252 8.77341 13.4416 9.4323 13.4328 10.1035C13.424 10.7748 13.2172 11.4285 12.8382 11.9826C12.4593 12.5367 11.9251 12.9665 11.3028 13.2182C10.4537 13.5502 9.5076 13.5324 8.67163 13.1685C7.83566 12.8046 7.17789 12.1244 6.84228 11.2767Z"/>
        </svg>
        
        <h2>{responseData.nome}</h2>
        {/* Escondendo o InputCompt para não quebrar o layout no primeiro momento, pois no futuro ele será utilizado nesse exato local */}
        <InputComp type='Color' required style={{visibility: 'hidden'}}/>
      </div>

      <Members>
        {responseData.colaboradores.map(data => {
            return (<Card key={data.id} nome={data.nome} cargo={data.cargo} color={responseData.color}/>)
          })
        }        
      </Members>
    </Container>
  )
}

export default Staff
