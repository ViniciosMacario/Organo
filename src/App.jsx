import { Main, SubTitle } from "./App.js";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Staff from "./components/Staff.jsx";

function App() {
  return (
    <>
      <Header/>
      <Main>
        <section>
          <Form/>
        </section>

        <section>
          <SubTitle>Minha Organização</SubTitle>
          <Staff/>
          <Staff/>
        </section>
      </Main>
      <Footer/>
    </>
  )
}

export default App;