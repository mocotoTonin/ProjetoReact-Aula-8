import { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import ConceitosJSX from "./components/ConceitosJSX.jsx";
import BarraDePesquisa from "./components/BarraDePesquisa.jsx";
import ListaFrameworks from "./components/ListaFrameworks.jsx";
import ContadorEstudos from "./components/ContadorEstudos.jsx";
import Rodape from "./components/Rodape.jsx";
import { frameworks, categorias } from "./data/frameworks.js";

function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simula o carregamento dos dados para demonstrar a renderização condicional
  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // filter() seleciona os itens; o map() é feito dentro de ListaFrameworks
  const frameworksFiltrados = frameworks.filter((item) => {
    const correspondeBusca = item.nome.toLowerCase().includes(busca.toLowerCase());
    const correspondeCategoria = categoria === "Todos" || item.tipo === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  // Gera um novo array em vez de modificar o array existente
  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((favId) => favId !== id) : [...atuais, id]
    );
  }

  return (
    <>
      <Cabecalho titulo="React Lab" totalFavoritos={favoritos.length} />

      <main className="container">
        <ConceitosJSX />

        <section className="secao" id="catalogo">
          <h2 className="secao-titulo">Catálogo de Frameworks</h2>
          <p className="secao-descricao">
            Pesquise e filtre as tecnologias estudadas na disciplina. Clique na estrela
            para adicionar aos favoritos.
          </p>

          <BarraDePesquisa
            busca={busca}
            onBuscaChange={setBusca}
            categorias={categorias}
            categoriaAtiva={categoria}
            onCategoriaChange={setCategoria}
          />

          {carregando ? (
            <p className="mensagem carregando">Carregando catálogo...</p>
          ) : (
            <ListaFrameworks
              itens={frameworksFiltrados}
              favoritos={favoritos}
              onFavoritar={alternarFavorito}
            />
          )}
        </section>

        <ContadorEstudos />
      </main>

      <Rodape autor="Marco Antônio" />
    </>
  );
}

export default App;
