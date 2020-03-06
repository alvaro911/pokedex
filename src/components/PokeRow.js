import React from 'react';
import PropTypes from 'prop-types';
import { row } from './pokeRowStyle';

function PokeRow({ pokemon }) {
  const { id, num, name, type, weaknesses } = pokemon;
  return (
    <div style={row}>
      <div>{num}</div>
      <div>{name}</div>
      <div>{type}</div>
      <div>{weaknesses}</div>
    </div>
  );
}

PokeRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    num: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    weaknesses: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default PokeRow;
