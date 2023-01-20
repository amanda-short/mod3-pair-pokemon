import { useEffect, useState } from 'react';

import { fetchInitPokeData, fetchTypedPokeData, fetchTypeList } from '../services/PokeData.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchInitPokeData();
      setPokemon(data);
      setLoading(false);
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
    setLoading(true);
    const data = await fetchTypedPokeData(type);
    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, type, handleTypeSelect, loading };
}
