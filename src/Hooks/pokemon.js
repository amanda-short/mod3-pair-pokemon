import { useEffect, useState } from 'react';

import { fetchInitPokeData } from '../services/PokeData.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitPokeData();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return { pokemon };
}
