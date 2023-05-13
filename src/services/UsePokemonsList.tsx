import { useState, useEffect } from 'react';

const usePokemonsList = () => {

  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=156')
      .then((response) => response.json())
      .then((response) => setResult(response.results))
      .catch((error) => setResult(error));
  }, []);
console.log('***estoy llegando al servicioo y devuelvo esto', result)
  return result;
};

export default usePokemonsList;