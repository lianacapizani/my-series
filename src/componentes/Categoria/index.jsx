import { Serie } from "../Serie";
import "./Categoria.css";

export function Categoria(props) {
  const css = { backgroundColor: props.corSecundaria };

  return props.series.length > 0 ? (
    <section className="categoria" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="series">
        {props.series.map((serie) => (
          <Serie
            nome={serie.nome}
            stream={serie.stream}
            imagem={serie.imagem}
            corSecundaria={props.corSecundaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
}
