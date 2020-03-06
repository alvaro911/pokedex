import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { row, cell } from './pokeRowStyle';

function PokeRow({ pokemon }) {
  const { num, name, type, weaknesses } = pokemon;

  const { push } = useHistory();

  const selectPokemon = () => {
    push(`/pokemon/${num}`);
  };

  return (
    <div style={row} onClick={selectPokemon}>
      <div style={cell}>{num}</div>
      <div style={cell}>{name}</div>
      <div style={cell}>{type.join(', ')}</div>
      <div style={cell}>{weaknesses.join(', ')}</div>
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
