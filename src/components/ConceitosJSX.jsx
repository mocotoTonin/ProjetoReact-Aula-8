// Demonstra JSX: expressões entre chaves, className e atributos
const conceitos = [
  { id: "jsx", titulo: "JSX", texto: "Sintaxe parecida com HTML escrita dentro do JavaScript." },
  { id: "componentes", titulo: "Componentes", texto: "Funções que retornam partes da interface." },
  { id: "props", titulo: "Props", texto: "Dados enviados do componente pai para o filho." },
  { id: "vdom", titulo: "Virtual DOM", texto: "Representação em memória usada na reconciliação." },
  { id: "listas", titulo: "Listas e Keys", texto: "map() gera elementos e a key identifica cada um." },
  { id: "condicional", titulo: "Renderização condicional", texto: "Exibe partes da interface conforme uma condição." },
];

function ConceitosJSX() {
  const aluno = "Marco Antônio";
  const aula = 8;

  return (
    <section className="secao hero" id="conceitos">
      <p className="hero-tag">Aula {aula < 10 ? `0${aula}` : aula} — Projeto React</p>
      <h2 className="hero-titulo">
        Olá! Eu sou <span className="destaque">{aluno}</span> e este é o meu laboratório de React.
      </h2>
      <p className="hero-texto">
        Esta aplicação reúne os {conceitos.length} conceitos estudados em aula em uma única interface.
      </p>

      <ul className="grid-conceitos">
        {conceitos.map((conceito, indice) => (
          <li key={conceito.id} className="conceito">
            <span className="conceito-numero">{indice + 1}</span>
            <h3>{conceito.titulo}</h3>
            <p>{conceito.texto}</p>
          </li>
        ))}
      </ul>

      <a href="https://react.dev" className="link" target="_blank" rel="noreferrer">
        Documentação oficial do React →
      </a>
    </section>
  );
}

export default ConceitosJSX;
