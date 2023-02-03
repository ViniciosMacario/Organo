import { useEffect, useState } from "react";
import { Main, SubTitle } from "./App.js";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Staff from "./components/Staff/Staff.jsx";
import ReactLoading from "react-loading";

function App() {
  const [staffData, setStaffData] = useState([]);
  const [IconReload, setIconReload] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      fetch(import.meta.env.VITE_API)
      .then(response => response.json())
      .then(data => setStaffData(data))
      setIconReload(false)
    }, 1500)
  }, [])


  return (
    <>
      <Header/>
      <Main>
        <section>
          <Form staffData={staffData} />
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
            staffData.map(data => {return (<Staff responseData={data} key={data.id}/>)})
          }
          
        </section>
      </Main>
      <Footer/>
    </>
  )
}

export default App;