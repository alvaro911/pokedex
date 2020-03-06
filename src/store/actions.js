import * as types from './types';

export const catchEmAll = pokemons => ({
  type: types.GET_ALL_POKEMONS,
  pokemons
});

export const filterPokemon = (name, typeArr, weakenessArr) => ({
  type: types.FILTER_POKEMONS,
  name,
  typeArr,
  weakenessArr
});

export const getById = id => ({
  type: types.GET_POKEMON_BY_ID,
  id
});
