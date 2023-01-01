# Alternativas para passar parâmetros


Tivemos que transformar um evento em uma arrow function para poder passar o 'id' do colaborador como parâmetro, mas por que precisamos fazer isto? não posso simplesmente fazer ``onClick={aoDeletar(id)}``?

No caso acima, o ``aoDeletar`` será executado assim que o componente renderizar (pode tentar!) e isto não é o que esperamos! O **onClick** espera uma função, e ele recebe a execução dessa função, por isto ele executa assim que renderizado!

Para resolver este problema, temos duas formas mais comuns, com a **arrow function** ou **criando uma função no seu componente!**

Arrow Function

```js
  const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />

    )
}
```

Criando uma função
```js
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {

    function deletarColaborador() {
      aoDeletar(colaborador.id);
    }

    return (
      <AiFillCloseCircle size={25} className="deletar" onClick={deletarColaborador} />

    )
}
```

Da segunda forma, criamos uma função, atribuímos um nome à ela e referenciamos ela no evento de click, desta forma damos à ela a responsabilidade de passar o id!