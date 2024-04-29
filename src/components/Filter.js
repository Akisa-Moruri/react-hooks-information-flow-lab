import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Bakery">Bakery</option>
    </select>
  );
}

export default Filter;