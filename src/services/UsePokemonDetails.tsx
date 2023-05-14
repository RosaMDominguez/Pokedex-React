import { useState, useEffect } from 'react';

const usePokemonDetail = (id: string) => {

  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((error) => setResult(error));
  },[]);

  return result;
};

export default usePokemonDetail;