import "./Serie.css";

export function Serie({ nome, imagem, stream, corSecundaria}) {
  return (
    <div className="serie">
      <div className="cabecalho" style={{ backgroundColor: corSecundaria }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{stream}</h5>
      </div>
    </div>
  );
}
