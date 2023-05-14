import { useState, useEffect } from 'react';

const usePokemonImg = (id: string) => {

  const [result, setResult] = useState('');
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => setResult(response?.sprites?.other?.dream_world?.front_default || response.sprites?.front_default
        ))
      .catch((error) => setResult(error));
  });

  return result;
};

export default usePokemonImg;