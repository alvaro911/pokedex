import { uniq } from 'ramda';
import * as types from './types';
import { pokemons } from './pokemons';

export const initialState = pokemons();

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POKEMONS:
      let pokeTypes = [];
      let weaknesses = [];
      action.pokemons.forEach(pokemon => {
        pokeTypes.push(...pokemon.type);
        weaknesses.push(...pokemon.weaknesses);
      });
      pokeTypes = uniq(pokeTypes);
      weaknesses = uniq(weaknesses);
      return {
        ...state,
        pokemons: [...action.pokemons],
        types: pokeTypes,
        weaknesses
      };
    case types.FILTER_POKEMONS_BY_NAME:
      const foundPokemons = state.pokemons.filter(
        pokemon => pokemon.name.toLowerCase().indexOf(action.name) > -1
      );
      return {
        ...state,
        foundPokemons
      };
    default:
      return state;
  }
};
