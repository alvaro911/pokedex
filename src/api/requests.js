export const fetchPokemon = () => {
  const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
};
