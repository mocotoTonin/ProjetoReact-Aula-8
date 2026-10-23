import CardFramework from "./CardFramework.jsx";

// Listas e keys + renderização condicional com if e return
function ListaFrameworks({ itens, favoritos, onFavoritar }) {
  if (itens.length === 0) {
    return <p className="mensagem vazio">Nenhum framework encontrado.</p>;
  }

  return (
    <>
      <p className="contagem">
        {itens.length} {itens.length === 1 ? "resultado encontrado" : "resultados encontrados"}
      </p>

      <div className="grid-cards">
        {itens.map((item) => (
          <CardFramework
            key={item.id}
            nome={item.nome}
            tipo={item.tipo}
            criador={item.criador}
            ano={item.ano}
            descricao={item.descricao}
            estudadoEmAula={item.estudadoEmAula}
            favorito={favoritos.includes(item.id)}
            onFavoritar={() => onFavoritar(item.id)}
          />
        ))}
      </div>
    </>
  );
}

export default ListaFrameworks;
