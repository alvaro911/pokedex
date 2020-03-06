import React, { useEffect } from 'react';
import { useAppContext } from '../store/Context';
import { fetchPokemon } from '../api/requests';
import { catchEmAll, filterByName } from '../store/actions';
import PokeRow from '../components/PokeRow';

export default function Pokemons() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    if (!state.length) {
      async function fetching() {
        const { pokemon } = await fetchPokemon();
        dispatch(catchEmAll(pokemon));
      }
      fetching();
    }
  }, [dispatch, state.length]);

  const { pokemons, foundPokemons, weaknesses, types } = state;

  const searchPokemon = e => {
    const { value } = e.target;
    dispatch(filterByName(value));
  };

  const mappingPokemons = arr => arr.map(pokemon => <PokeRow key={pokemon.id} pokemon={pokemon} />);

  const renderPokemons = () => {
    if (!foundPokemons.length) {
      return mappingPokemons(pokemons);
    }
    return mappingPokemons(foundPokemons);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={searchPokemon} />
      </div>
      {renderPokemons()}
    </div>
  );
}
