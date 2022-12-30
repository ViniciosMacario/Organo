import { Main } from "./App.js";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header/>
      <Main>
        <section>
          <Form/>
        </section>
        <section>
          Equipes
          <div>
            
          </div>
        </section>
      </Main>
      <footer>
        Rodapé
      </footer>
    </>
  )
}

export default App;