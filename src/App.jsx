import { useEffect, useState } from "react";
import { Main, SubTitle } from "./App.js";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Staff from "./components/Staff/Staff.jsx";


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
          {staffData.length === 0 
            ? <p style={{color: "white", textAlign: "center", fontSize: "18px"}}>Você não há time cadastrado!</p> 
            : staffData.map(data => {return (<Staff responseData={data} key={data.id}/>)})
          }
        </section>
      </Main>
      <Footer/>
    </>
  )
}

export default App;