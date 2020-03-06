import React, { useEffect, useState } from 'react';
import { useAppContext } from '../store/Context';
import { filterPokemon } from '../store/actions';
import PokeRow from '../components/PokeRow';
import { searchContainer, inputBox, btnsSection, btnsContainer } from './pokemonsStyle';
import { row, cell } from '../components/pokeRowStyle';
import FilterBtns from '../components/FilterBtns';

export default function Pokemons() {
  const { state, dispatch } = useAppContext();

  const [typeArr, setTypeArr] = useState([]);

  const [weaknessArr, setWeaknessArr] = useState([]);

  const [pokeName, setPokeName] = useState('');

  useEffect(() => {
    dispatch(filterPokemon(pokeName, typeArr, weaknessArr));
  }, [typeArr, weaknessArr, dispatch, pokeName]);

  const { pokemons, foundPokemons, weaknesses, types } = state;

  const searchPokemon = e => {
    const { value } = e.target;
    setPokeName(value);
  };

  const mappingPokemons = arr => arr.map(pokemon => <PokeRow key={pokemon.id} pokemon={pokemon} />);

  const renderPokemons = () => {
    if (!foundPokemons.length) {
      return mappingPokemons(pokemons);
    }
    return mappingPokemons(foundPokemons);
  };

  const getName = (name, arrName) => {
    if (arrName === 'typeArr') {
      if (typeArr.includes(name)) {
        const index = typeArr.indexOf(name);
        setTypeArr([...typeArr.slice(0, index), ...typeArr.slice(index + 1)]);
      } else {
        setTypeArr([...typeArr, name]);
      }
    } else {
      if (weaknessArr.includes(name)) {
        const index = weaknessArr.indexOf(name);
        setWeaknessArr([...weaknesses.slice(0, index), ...weaknessArr.slice(index + 1)]);
      } else {
        setWeaknessArr([...weaknessArr, name]);
      }
    }
  };

  const renderBtns = (arr, arrName) =>
    arr.map(el => <FilterBtns key={el} name={el} getName={getName} arrName={arrName} />);

  return (
    <div>
      <div style={searchContainer}>
        <input
          style={inputBox}
          type="text"
          onChange={searchPokemon}
          placeholder="Search for Pokemon"
        />
      </div>
      <div style={btnsContainer}>
        <div style={btnsSection}>
          <h4>Types</h4>
          {renderBtns(types, 'typeArr')}
        </div>
        <div style={btnsSection}>
          <h4>Weaknesses</h4>
          {renderBtns(weaknesses, 'weaknessArr')}
        </div>
      </div>
      <div style={row}>
        <div style={cell}>Number</div>
        <div style={cell}>Name</div>
        <div style={cell}>Type</div>
        <div style={cell}>Wekness</div>
      </div>
      {renderPokemons()}
    </div>
  );
}
