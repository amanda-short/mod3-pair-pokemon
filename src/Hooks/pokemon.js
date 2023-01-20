import { useEffect, useState } from 'react';

import { fetchInitPokeData, fetchTypedPokeData, fetchTypeList } from '../services/PokeData.js';

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

  const handleTypeSelect = async (type) => {
    const data = await fetchTypedPokeData(type);
    setPokemon(data);
  };

  return { pokemon, type, handleTypeSelect };
}
