import React from 'react';
import './Controls.css';

export default function Controls({ type, handleTypeSelect }) {
  return (
    <div className="controls">
      <select className="select" onChange={(e) => handleTypeSelect(e.target.value)}>
        {type.map(({ type }) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
