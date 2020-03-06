import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useAppContext } from '../store/Context';
import { getById } from '../store/actions';
import { container, pokeImg, pokeInfo, navigation } from './pokemonStyle';
import { isEmpty } from 'ramda';

function Pokemon() {
  const { id } = useParams();
  const { dispatch, state } = useAppContext();
  const { pokemon } = state;
  const { goBack, push } = useHistory();
  useEffect(() => {
    if (state.pokemons.length) {
      dispatch(getById(id));
    }
  }, [dispatch, id, state.pokemons.length]);

  const navigateBack = () => goBack();

  const nextPokemon = id => () => {
    push(`/pokemon/${id}`);
  };
  const renderEvolution = arr => {
    if (!arr) return <p>No Evolution</p>;
    return arr.map(el => (
      <div key={el.num} onClick={nextPokemon(el.num)}>
        <p>{el.name}</p>
      </div>
    ));
  };

  if (isEmpty(pokemon)) return <p>Loading</p>;
  return (
    <div>
      <div style={navigation}>
        <p onClick={navigateBack}>Go Back</p>
        <Link to="/">Go Back To List</Link>
      </div>
      <div style={container}>
        <div style={pokeImg}>
          <img src={pokemon.img} alt="" />
        </div>
        <div style={pokeInfo}>
          <h3>Name: {pokemon.name}</h3>
          <p>
            <b> Num:</b> {pokemon.num}
          </p>
          <p>
            <b> Type:</b> {pokemon.type.join(', ')}
          </p>
          <p>
            <b> Weakness:</b> {pokemon.weaknesses.join(', ')}
          </p>
          <b>Evolutions</b>
          <div>
            <b>Prvevious:</b>
            {renderEvolution(pokemon.prev_evolution)}
            <b>Next:</b>
            {renderEvolution(pokemon.next_evolution)}
          </div>
        </div>
      </div>
    </div>
  );
}

Pokemon.propTypes = {};

export default Pokemon;
