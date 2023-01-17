import { useEffect, useState } from "react";
import { Main, SubTitle } from "./App.js";
import Config from "./components/Config.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Staff from "./components/Staff.jsx";


function App() {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then(response => response.json())
      .then(data => setStaffData(data))
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
          {staffData.map(data => {
            return ( <Staff key={data.id} name={data.nome} colaboradores={data.colaboradores} colorBg={data.color} cargo={data.colaboradores}/> )
            })
          }
        </section>
      </Main>
      <Config/>
      <Footer/>
    </>
  )
}

export default App;