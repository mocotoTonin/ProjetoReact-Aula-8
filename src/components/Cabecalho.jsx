// Componente que recebe props do App e usa expressões JSX
function Cabecalho({ titulo, totalFavoritos }) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <div className="logo">
          <span className="logo-icone">⚛</span>
          <h1>{titulo}</h1>
        </div>

        <nav className="menu">
          <a href="#conceitos">Conceitos</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contador">Virtual DOM</a>
        </nav>

        <span className="badge-favoritos">
          ★ {totalFavoritos} {totalFavoritos === 1 ? "favorito" : "favoritos"}
        </span>
      </div>
    </header>
  );
}

export default Cabecalho;
