import React from 'react';
import './PokeCard.css';

export default function PokeCard(poke) {
  return (
    <div className="poke-card">
      <div>
        <h2>{poke.pokemon}</h2>
        <h4>{poke.id}</h4>
        <h4>{poke.type_1}</h4>
      </div>
      <div>
        <img src={poke.url_image} />
      </div>
    </div>
  );
}
