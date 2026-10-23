# React Lab — Catálogo de Frameworks

Projeto desenvolvido para a Atividade da **Aula 08 — Projeto React** da disciplina de **Frameworks Front-end**.

## Descrição

O React Lab é uma aplicação desenvolvida em React que reúne, em uma única interface, todos os conceitos estudados na aula: JSX, componentes, props, Virtual DOM, listas e keys e renderização condicional.

A aplicação apresenta um catálogo das tecnologias estudadas na disciplina, permitindo pesquisar, filtrar por categoria e marcar favoritos, além de um contador de horas de estudo que demonstra a atualização da interface por meio do estado.

## Objetivo

Desenvolver uma aplicação React que utilize todos os conceitos estudados na Aula 08, publicada em um repositório público no GitHub e com deploy na Vercel.

## Tecnologias

- React 18
- Vite
- JavaScript (ES6+)
- CSS3
- Google Fonts (Poppins)
- Git e GitHub
- Vercel

## Funcionalidades

- Apresentação dos seis conceitos de React estudados em aula.
- Catálogo de frameworks renderizado a partir de um array de dados.
- Pesquisa de frameworks pelo nome.
- Filtro por categoria (Framework, Biblioteca, CSS e Ferramenta).
- Marcação de favoritos, com contador no cabeçalho.
- Mensagem de carregamento ao abrir o catálogo.
- Mensagem quando nenhum resultado é encontrado.
- Contador de horas de estudo com barra de progresso e meta semanal.
- Layout responsivo para diferentes telas.

## Conceitos utilizados

| Conceito | Onde foi aplicado |
| -------- | ----------------- |
| JSX | Todos os componentes utilizam JSX, com expressões entre chaves `{ }`, `className`, `htmlFor` e atributos como `href` e `target`. |
| Componentes | A interface foi dividida em componentes: `Cabecalho`, `ConceitosJSX`, `BarraDePesquisa`, `ListaFrameworks`, `CardFramework`, `ContadorEstudos` e `Rodape`. |
| Props | O `App` envia dados e funções para os componentes filhos. O `CardFramework` é reutilizado oito vezes, recebendo nome, tipo, criador, ano, descrição e favorito por props. |
| Virtual DOM | Ao alterar o estado (`useState`) nos favoritos, na pesquisa e no contador, o React gera uma nova descrição da interface, compara com a anterior (reconciliação) e atualiza somente o que mudou. |
| Listas e Keys | Os conceitos, os filtros e os cards são gerados com `map()`, utilizando `key` única em cada item. A pesquisa e o filtro utilizam `filter()`, gerando novos arrays sem modificar os dados originais. |
| Renderização condicional | `if` e `return` para a mensagem de lista vazia, operador ternário para o carregamento e para a meta do contador, e `&&` para exibir o selo "Estudado em aula". |

## Árvore de componentes

```
App
├── Cabecalho
├── ConceitosJSX
├── BarraDePesquisa
├── ListaFrameworks
│   └── CardFramework (x8)
├── ContadorEstudos
└── Rodape
```

## Estrutura do projeto

```
lista-tarefa-font/
├── public/
│   └── react.svg
├── src/
│   ├── components/
│   │   ├── BarraDePesquisa.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── CardFramework.jsx
│   │   ├── ConceitosJSX.jsx
│   │   ├── ContadorEstudos.jsx
│   │   ├── ListaFrameworks.jsx
│   │   └── Rodape.jsx
│   ├── data/
│   │   └── frameworks.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Design

- Fundo: `#212121`
- Cor de destaque: `#007ACC`
- Fonte: Poppins

## Como executar

1. Clone este repositório.
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Acesse a Aplicação

Link do deploy na Vercel:

https://projeto-aula-8.vercel.app/

## Repositório

GitHub: https://github.com/mocotoTonin/lista-tarefa-font

## Autor

Marco Antônio

Atividade acadêmica - Frameworks Front-end.
