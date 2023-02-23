import { useEffect, useState } from "react";
import { Main, SubTitle } from "./App.js";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Staff from "./components/Staff/Staff.jsx";
import ReactLoading from "react-loading";
import CardNotification from './components/Notificação/CardNotification.jsx'

function App() {
  //Informações pertinentes ao sistema de notificação 
  const [cardNotification, setCardNotification] = useState(false);
  const [cardNotificationText, setCardNotificationText] = useState();

  //Controle da animação do card
  const [handleCardNotification, setHandleCardNotification] = useState(true);
  const [handleStatus, setHandleStatus] = useState();

  console.log(cardNotification)






  //Dados referente a requisição http da equipe
  const [staffData, setStaffData] = useState([]);

  const [IconReload, setIconReload] = useState(true);

  //Controle da renderização dos formulários baseado no Click
  const [Time, SetTime] = useState(false);

  //Funções responsavel por deixar visivel e invisivel os Formulário baseado no Click.
  function aoFormAddMemberClick()
  {
    SetTime(true)
  }
  function aoCreateTimeClick()
  {
    SetTime(false)
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(import.meta.env.VITE_API)
      .then(response => response.json())
      .then(data => setStaffData(data))

      setIconReload(false);
    }, 1800)
  }, [])


  return (
    <>
      <Header/>
      <Main>
        {cardNotification && <CardNotification status={handleStatus} text={cardNotificationText} handleCardNotification={handleCardNotification}/>}
        <section>
          <Form 
            cardNotification={setCardNotification}
            cardNotificationText={setCardNotificationText}
            handleCardNotification={setHandleCardNotification}
            handleStatus={setHandleStatus}
            aoFormAddMemberClick={aoFormAddMemberClick}
            aoCreateTimeClick={aoCreateTimeClick}
            Time={Time}
            staffData={staffData} 
          />
        </section>

        <section>
          <SubTitle>Minha Organização</SubTitle>
          {IconReload && (
            <div style={{margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <ReactLoading 
                type="spin" 
                color="#ffffff" 
                height={50} 
                width={50}
              />
              <p style={{color: "white", marginTop: "20px", fontWeight: "bold"}}>Por favor aguarde!</p>
            </div>
  
            )
          }

          {!IconReload && staffData.length === 0 
            ? 
              <p style={{color: "white", textAlign: "center", fontSize: "18px"}}>Não há time cadastrado!</p> 
            :
              staffData.map(data => {return (
                <Staff 
                  handleStateTimeForm={SetTime}  
                  responseData={data} key={data.id}
                  cardNotification={setCardNotification}
                  cardNotificationText={setCardNotificationText}
                  handleCardNotification={setHandleCardNotification}
                  handleStatus={setHandleStatus}
                />)})
          }
          
        </section>
      </Main>
      <Footer/>
    </>
  )
}

export default App;