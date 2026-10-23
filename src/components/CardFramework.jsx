// Componente reutilizável: a estrutura é a mesma e os dados chegam por props
function CardFramework({ nome, tipo, criador, ano, descricao, estudadoEmAula, favorito, onFavoritar }) {
  return (
    <article className={favorito ? "card favorito" : "card"}>
      <div className="card-topo">
        <span className="card-tipo">{tipo}</span>
        <button
          type="button"
          className="botao-favorito"
          onClick={onFavoritar}
          aria-label={favorito ? `Remover ${nome} dos favoritos` : `Adicionar ${nome} aos favoritos`}
        >
          {favorito ? "★" : "☆"}
        </button>
      </div>

      <h3 className="card-titulo">{nome}</h3>
      <p className="card-descricao">{descricao}</p>

      <div className="card-rodape">
        <span>{criador} · {ano}</span>
        {estudadoEmAula && <span className="selo">Estudado em aula</span>}
      </div>
    </article>
  );
}

export default CardFramework;
