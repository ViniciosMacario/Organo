# Libray vs FrameWork

precisamos fazer uma distinção entre uma biblioteca e um FrameWork, uma Biblioteca é menor que um framework e **serve para um propósito muito específico**. O Framework, por outro lado, é mais robusto e é utilizado para resolver diversos problemas.

O React é considerado uma biblioteca porque ele serve para uma proposta específica como a criação de componentes e as compilações que fazemos.

Como o React é uma biblioteca, ele é muito flexível! E essa é um das vantagens que temos ao usá-lo. Porém, algo que pode ser considerado uma desvantagem é que para resolvermos certos problemas, precisamos instalar outras dependências.

Outra distinção que precisa ser feita é entre o DOM real e o que chamamos de Virtual DOM, onde entra o React. Essa diferenciação é perfeitamente exemplificada nessa <div id="roots"></div>. Aqui, todo o arquivo "index.html" é o HTML puro, ou seja, o DOM real. Porém, a partir do momento que entramos em "index.js" e vemos o ReactDOM.createRoot(), essa parte já cria um Virtual DOM. Ou seja, nessa parte estamos utilizando o React.

Então começamos com o HTML puro e a partir do ReactDOM.createRoot() começamos a utilizar o virtual DOM, passando pelo <React.StrictMode>, o App, dentro do App temos uma função App() que retorna algo que parece HTML mas não é e sim um jsx.