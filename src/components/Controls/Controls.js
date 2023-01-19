import React from 'react';

export default function Controls({ type }) {
  return (
    <select>
      {type.map(({ type }) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
