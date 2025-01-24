import { useState } from "react";
import lampada from "./assets/Lâmpada.png";
import genio from "./assets/Gênio.png";
import "./Style.scss";

export default function App() {
  const [aladin, setAladin] = useState(lampada);

  const genioDaLampada = () => {
    setAladin(genio);
  };

  const voltarLampada = () => {
    setAladin(lampada);
  };

  const handleClick = () => {
    if (aladin === lampada) {
      genioDaLampada();
    } else {
      voltarLampada();
    }
  };

  return (
    <main>
      <h1>Liberte a magia da programação com a lâmpada de Aladim.</h1>
      <img src={aladin} alt="Imagem da Lâmpada magica do Aladin" />
      <button onClick={handleClick} >Clique Aqui</button>
    </main>
  );
}
