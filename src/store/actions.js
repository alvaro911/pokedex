import * as types from './types';

export const catchEmAll = pokemons => ({
  type: types.GET_ALL_POKEMONS,
  pokemons
});

export const filterByName = name => ({
  type: types.FILTER_POKEMONS_BY_NAME,
  name
});

export const filterByType = pokeType => ({
  type: types.FILTER_POKEMONS_BY_TYPE,
  pokeType
});

export const getById = id => ({
  type: types.GET_POKEMON_BY_ID,
  id
});
