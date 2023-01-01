# Instalando dependências

Após clonarmos um repositório React, vamos utilizar o comando `npm start` para executar. Porém, quando o executarmos, é dito que ele não reconhece o `react-scripts`.

**Erro:** 
> 'react-scripts' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.


Em "organo" > "src" > **"package.json"** temos várias informações sobre o projeto, dentre elas o nome, a versão, se ele é privado ou não e assim por diante.

```json{
  "name": "organo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    @testing-library/jest-dom": "^5.16.4",
    @testing-library/react": "13^2.0",
    @testing-library/user-event": "^13.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
  }
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
  }
```

Temos também as dependencias, e os scripts que são os comandos que podemos rodar. Um deles é o start.

As dependências do projeto são elementos dos quais nosso pacote depende, então, precisamos instalar todas essas dependências para que o projeto funcione. Os scripts também são dependências, por isso nosso comando não funcionou, porque ainda não instalamos o react-script start.

Para instalar essas dependências, escreveremos o comando npm install. Podemos também usar npm i, já que i é uma abreviação de install.

> npm install ou npm i

vamos esclarecer alguns conceitos. `"npm" é a abreviação de Node Package Manager` , **que é o gerenciador de pacotes do Node**. O Node é um framework criado para que consigamos usar Back-End no JavaScript. O npm nos permite ter essas dependências diretamente configurados nesses arquivos como "package.json", e ele os instala automaticamente.

Antigamente nós "injetávamos" as dependências no nosso projeto via CDN copiando e colando uma tag link ou uma tag script com uma URL diretamente em nosso HTML. Isso era bastante difícil de controlar, então o npm veio para facilitar o processo!

Na coluna do canto esquerdo do VS Code podemos ver uma lista de pastas. Nela, temos a pasta criada "package.json" e um arquivo parecido com ela que estamos criando agora, o "package-lock.json". O "lock", de "prender", contém informação de todas as versões específicas de todas as dependências que estamos adicionando ao projeto.

Agora nós também criamos agora a pasta "node_module". Em "package.json" nós temos sete dependências.

```json
"dependencies": {
    @testing-library/jest-dom": "^5.16.4",
    @testing-library/react": "13^2.0",
    @testing-library/user-event": "^13.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
}
```

Logo, deveríamos ter sete pastas, certo? Porém se clicarmos na pasta "node_module", ela abrirá muito mais do que apenas sete pastas. Isso ocorre porque o React não depende apenas dele, o React depende de um pacote que depende de outro pacote e assim por diante. Por essa razão, o Node instala todos de uma só vez para que não precisemos fazer isso sozinhos.

Além disso, **ele é esperto o suficiente para que quando nós gerarmos o building para a produção final, ele consiga excluir os pacotes que não vamos utilizar. Ou seja, não precisamos nos preocupar com isso!**
