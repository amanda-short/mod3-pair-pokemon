import React from 'react';
import './Main.css';
import { usePokemon } from '../../Hooks/pokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';
import Controls from '../Controls/Controls.js';

export default function Main() {
  const { pokemon, type, handleTypeSelect } = usePokemon();

  return (
    <div>
      <Controls type={type} handleTypeSelect={handleTypeSelect} />
      <main>
        {pokemon.map((poke) => (
          <PokeCard key={poke._id} {...poke} />
        ))}
      </main>
    </div>
  );
}
