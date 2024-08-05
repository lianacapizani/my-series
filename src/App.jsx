import { useState } from "react";
import { Banner } from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario";
import { Categoria } from "./componentes/Categoria";
import "./global.css";

function App() {
  const categorias = [
    {
      nome: "Ação",
      corPrimaria: "#057045",
      corSecundaria: "#023f27",
    },
    {
      nome: "Comédia",
      corPrimaria: "#0d6191",
      corSecundaria: "#06314a",
    },
    {
      nome: "Drama",
      corPrimaria: "#8f4dce",
      corSecundaria: "#470881",
    },
    {
      nome: "Fantasia",
      corPrimaria: "#b9413e",
      corSecundaria: "#742120",
    },
    {
      nome: "Heróis",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#913c7c",
    },
    {
      nome: "Romance",
      corPrimaria: "#FFBA05",
      corSecundaria: "#946b05",
    },
    {
      nome: "Terror",
      corPrimaria: "#FF8A29",
      corSecundaria: "#ae560f",
    },
  ];

  const [series, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (serie) => {
    console.log(serie);
    setColaboradores([...series, serie]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        categorias={categorias.map((categoria) => categoria.nome)}
        aoColaboradorCadastrado={(serie) => aoNovoColaboradorAdicionado(serie)}
      />

      {categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          series={series.filter((serie) => serie.categoria === categoria.nome)}
        />
      ))}
    </div>
  );
}

export default App;
