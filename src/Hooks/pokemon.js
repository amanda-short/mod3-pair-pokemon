import { useEffect, useState } from 'react';

import { fetchInitPokeData, fetchTypeList } from '../services/PokeData.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitPokeData();
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypeList();
      setType(data);
    };
    fetchData();
  }, []);

  return { pokemon, type };
}
