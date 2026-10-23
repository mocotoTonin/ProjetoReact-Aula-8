// Recebe valores e funções via props (fluxo de dados pai → filho)
function BarraDePesquisa({ busca, onBuscaChange, categorias, categoriaAtiva, onCategoriaChange }) {
  return (
    <div className="pesquisa">
      <label htmlFor="busca" className="sr-only">Pesquisar framework</label>
      <input
        id="busca"
        type="text"
        className="campo-busca"
        placeholder="Pesquisar framework..."
        value={busca}
        onChange={(evento) => onBuscaChange(evento.target.value)}
      />

      <div className="filtros">
        {categorias.map((item) => (
          <button
            key={item}
            type="button"
            className={item === categoriaAtiva ? "filtro ativo" : "filtro"}
            onClick={() => onCategoriaChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BarraDePesquisa;
