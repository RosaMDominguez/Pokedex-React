import { useState, useEffect } from 'react';
import { ServiceType } from '../interfaces/types';
import { Pokemon } from '../interfaces/interfaces';

const usePokemonDetail = (id: string) => {

  const [result, setResult] = useState<ServiceType<Pokemon>>({
    status: 'loading'
  });
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((error) => setResult(error));
  },[]);

  return result;
};

export default usePokemonDetail;