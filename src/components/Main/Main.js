import React from 'react';
import './Main.css';
import { usePokemon } from '../../Hooks/pokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';

export default function Main() {
  const { pokemon } = usePokemon();

  return (
    <main>
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </main>
  );
}
