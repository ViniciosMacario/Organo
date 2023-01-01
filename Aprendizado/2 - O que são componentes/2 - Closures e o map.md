# Closures vs map

Vamos analisar o código abaixo:

```js
  {colaboradores.map((colaborador, indice) => 
    <Colaborador 
      key={indice} 
      colaborador={colaborador} 
      corDeFundo={time.corSecundaria} 
    />)
  }
```

Primeiro destrincharemos esta linha de código e depois falaremos especificamente sobre o que ela tem a ver com o título.

1º Como estamos utilizando o **.map**, podemos deduzir que colaboradores **é um array**;
2º O **.map** aceita uma função como parâmetro, no nosso caso utilizamos uma **arrow function** para isto;
3º A **arrow function** não necessita de um nome, ou seja, ela é uma **função anônima**;
4º Como não temos chaves após a **arrow(=>)**, sabemos que ela não tem um bloco de código, apenas o retorno;
5º Como não temos um bloco, sabemos que o retorno dela é o **componente Colaborador**.