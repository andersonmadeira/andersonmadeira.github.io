---
title: React - Antes (ou durante) de começar [DRAFT]
date: '2020-01-03T10:56:00.169Z'
description: Se você chegou aqui é provável que já tenha feito ou lido código React. Chegou a hora de uma introdução mais realista sobre essa lib, vamos conversar?
tags: ['react', 'javascript', 'development', 'code']
featuredImage: ./featured-image.jpg
featuredImageCaption: Caption goes here and there
---

Visto sua popularidade, com certeza você já deve ter visto uma aplicação feita em React. Talvez você até tenha tido um primeiro contato, escrito algum código ou uma aplicação inteira com base nessa lib. Se esse é seu caso talvez você aprenderá algo novo hoje. Se você não sabe o que é ou nunca fez nada usando React antes então vamos aprender bastante coisa nova juntos. :)

Nesse artigo você verá uma introdução mais detalhada que o normal, onde vou te dar uma prévia de algumas características do React e seu ecossistema, junto com algumas coisas que eu gostaria de ter ouvido/visto quando estava começando e que acredito que vão te ajudar a se antecipar e preparar uma boa base conceitual antes de começar teus projetos.

## React

No [site oficial](https://pt-br.reactjs.org/) encontramos uma definição que evidencia de maneira sucinta seu propósito:

> Uma biblioteca JavaScript para criar interfaces de usuário

Aqui vemos que React é uma biblioteca (não um [framework](https://pt.wikipedia.org/wiki/Framework)) que pode ser usado para criar interfaces com o usuário, ou em outras palavras as telas e componentes que vemos nos sistemas e páginas web. Esses componentes podem ser desde unidades menores como botões, blocos de texto ou caixas de diálogo até um pouco mais complexos como tabelas, gráficos, formulários ou seções inteiras.

Antes de começar vamos dar uma olhada em alguns conceitos ou ferramentas usadas no ecossistema React ou a própria biblioteca em si.

## JSX

Bom, vamos começar logo pelo mais polêmico, veja esse trecho de código:

```jsx
const elementoTitulo = <h1>Título Aqui</h1>
```

Isso, meu amigo ou minha amiga, é **JSX**. Para alguns isso pode parecer uma sintaxe estranha ou html dentro de JavaScript. Isso não é uma string, nem HTML (embora pareça muito). JSX é uma maneira de tirar proveito do poder de JavaScript para descrever como a interface deveria parecer, de maneira declarativa.

Embora não seja obrigatório utilizar JSX no seu código, ele ajuda a entender melhor com que sua interface deveria se parecer quando renderizada pelo navegador. Não é como se você misturasse html com js, já que uma vez que você começa a escrever JSX, só poderá voltar pra JavaScript depois de usar chaves, como no exemplo abaixo:

```jsx
const textoBotao = 'Botão'
const botao = <button className="meu-botao">{textoBotao}</button>
```

No exemplo declaramos uma variável `textoBotao` contendo uma string que será o texto do nosso botão. Em seguida declaramos outra variável `botao` que terá o código de nosso botão. Aí começamos uma expressão JSX ao escrever a tag `button`. Então veja que escapamos (ou incluimos) o conteudo da variável `textoBotao` dentro da tag button usando um par de chaves `{}`.

Agora se quiser por exemplo declarar dinamicamente a classe do botão poderá fazer assim:

```jsx
const textoBotao = 'Botão'
const classeBotao = 'meu-botao'
const botao = <button className={classeBotao}>{textoBotao}</button>
```

Pegou a ideia? **O truque com JSX é esse: sempre que usar JSX, o que estiver dentro de chaves `{}` será interpretado como JavaScript.**

Mas se não quiser escrever JSX, você poderia usar a função `createElement` do React passando o nome do elemento a ser criado (no caso um button), os atributos e o conteúdo ou elementos filhos (o que vai estar dentro dele):

```js
const textoBotao = 'Botão'
const botao = React.createElement(
  'button',
  { className: 'meu-botao' },
  textoBotao
)
```

Mas vamos combinar que é muito melhor usar JSX não é? Seu código fica mais legível e limpo; é mais fácil identificar no momento que estiver codificando como sua interface vai ficar já que o JSX lembra muito o html que será gerado.

## JavaScript (ES6)

Ao desenvolver aplicações com React, **você vai usar muito JavaScript**, então vai precisar entender alguns macetes e versões mais recentes do padrão EcmaScript. Estude sobre `arrow functions`, `destructuring`, `spread operator`, `promises`, `for-of`, `template literals`, `let e const`, `immutability`, `functional javascript`, `pure functions`, dentre outras coisas do ES6 acima.

## Componentes

Na web de hoje a ideia de componentes é algo tão presente, que se faz obrigatório que nós desenvolvedores web entendamos bem esse conceito. Como falado antes, um componente é uma unidade da sua interface que tem sua definição, aparência e comportamento. Falando de maneira geral, isso poderia ser o HTML, CSS e JavaScript relacionados a um botão numa página por exemplo. Um componente de botão em React poderia ser escrito da seguinte maneira:

```jsx:title=Button.js
import React from 'react'
import './Button.css'

function onButtonClick(event) {
  console.log('Clicaram no meu botão!')
}

const Button = props => {
  return (
    <button className="my-button" onClick={onButtonClick}>
      {props.children}
    </button>
  )
}

export default Button
```

```css:title=Button.css
my-button {
  outline: none;
  border: 2px dashed #8f1300;
  color: #fff;
  font-weight: 700;
  font: 700 20px 'Helvetica', sans-serif;
  background: #ff4e33;
  cursor: pointer;
}

my-button:hover {
  background: tomato;
}
```

Pra deixar o exemplo mais simples, não estamos usando css modules, css-in-js, etc

Em React, bem como em outras ferramentas modernas para construir UI's, lidamos muito com o conceito de componentes, por isso é tão importante que você enteda a ideia de componentes e como funcionam de maneira geral.

## Biblioteas e mais bibliotecas

O ecossistema React não é muito opinativo (ou nada). Ou seja, React não força teu projeto a usar uma arquitetura, ferramenta ou biblioteca específica (embora haja algumas recomendações gerais). Tudo depende do seu projeto. Por um lado, o desenvolvedor que é acostumado a seguir um padrão já estabelecido pode ficar perdido no começo ao se deparar com tantas opções de bibliotecas adicionais, sem saber o que escolher. Porém isso é ótimo porque deixa seu time mais livre pra adotar suas próprias convenções e aderir ao que vocês vulgam ser o melhor pro projeto. Na comunidade, existem algumas considerações e recomendações gerais que criam um bom senso na comunidade, ao seguir essas recomendações (vide documentação oficial) você sempre estará usando React do "jeito certo" mesmo tendo convenções e escolhas técnicas próprias do projeto.

## CSS in JS (ou JSS?)

Falar de CSS in JS

## Conclusão

Conclusão

> end.

_(under construction)_
