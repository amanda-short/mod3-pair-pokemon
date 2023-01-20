import React from 'react';

export default function Controls({ type, handleTypeSelect }) {
  return (
    <select onChange={(e) => handleTypeSelect(e.target.value)}>
      {type.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
