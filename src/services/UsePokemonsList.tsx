import { useState, useEffect } from 'react';

const url ='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

const usePokemonsList = () => {

  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setResult(response.data))
      .catch((error) => setResult(error));
  }, []);

  return result;
};

export default usePokemonsList;