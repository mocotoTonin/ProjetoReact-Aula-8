function Rodape({ autor }) {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <p>
        Desenvolvido por <strong>{autor}</strong> · Frameworks Front-end · SENAI · {ano}
      </p>
    </footer>
  );
}

export default Rodape;
