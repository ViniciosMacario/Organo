import { Main } from "./App.js";
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
      {/* <Staff/> */}
      </Main>
      {/* <Footer/> */}
    </>
  )
}

export default App;