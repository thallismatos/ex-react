import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [desenho, setdesenho] = useState([]);

  const getDesenho = async () => {
    const response = await axios.get(
      "https://api.sampleapis.com/rickandmorty/characters"
    );
    setdesenho(response.data);
  };

  useEffect(() => {
    getDesenho();
  }, []);

  return (
    <>
      <h1>API</h1>
      <span>Application Programming Interface</span>
      <ul>
        {desenho.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
