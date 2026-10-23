import { useState } from "react";

// Virtual DOM: ao mudar o estado, o React calcula a nova interface,
// compara com a anterior (reconciliação) e atualiza apenas o que mudou.
function ContadorEstudos() {
  const [horas, setHoras] = useState(0);
  const meta = 10;
  const metaAtingida = horas >= meta;
  const progresso = Math.min((horas / meta) * 100, 100);

  return (
    <section className="secao contador" id="contador">
      <h2 className="secao-titulo">Virtual DOM na prática</h2>
      <p className="secao-descricao">
        Cada clique altera o estado. O React gera uma nova descrição da interface, compara com a
        anterior e atualiza no navegador somente o número, a barra e a mensagem.
      </p>

      <div className="contador-painel">
        <span className="contador-valor">{horas}h</span>
        <span className="contador-legenda">de estudo de React nesta semana</span>

        <div className="barra">
          <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
        </div>

        <div className="contador-botoes">
          <button type="button" onClick={() => setHoras(horas - 1)} disabled={horas === 0}>
            − 1h
          </button>
          <button type="button" onClick={() => setHoras(horas + 1)}>
            + 1h
          </button>
          <button type="button" className="secundario" onClick={() => setHoras(0)}>
            Zerar
          </button>
        </div>

        {metaAtingida ? (
          <p className="mensagem sucesso">Meta de {meta}h atingida! 🎉</p>
        ) : (
          <p className="mensagem">Faltam {meta - horas}h para atingir a meta semanal.</p>
        )}
      </div>
    </section>
  );
}

export default ContadorEstudos;
