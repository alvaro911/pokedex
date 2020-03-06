import { uniq, filter, where, contains } from 'ramda';
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
    case types.FILTER_POKEMONS: {
      let foundPokemons = state.pokemons.filter(
        (pokemon, i) => pokemon.name.toLowerCase().indexOf(action.name) > -1
      );

      if (action.typeArr.length) {
        for (const actionType of action.typeArr) {
          foundPokemons = filter(where({ type: contains(actionType) }), foundPokemons);
        }
      }

      if (action.weakenessArr.length) {
        for (const actionWeak of action.weakenessArr) {
          foundPokemons = filter(where({ weaknesses: contains(actionWeak) }), foundPokemons);
        }
      }

      return {
        ...state,
        foundPokemons
      };
    }

    case types.GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemon: state.pokemons.find(pokemon => pokemon.num === action.id)
      };
    default:
      return state;
  }
};
