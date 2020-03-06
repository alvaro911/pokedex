import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAppContext } from '../store/Context';
import Pokemons from '../pages/Pokemons';
import Pokemon from '../pages/Pokemon';
import { catchEmAll } from '../store/actions';
import { fetchPokemon } from '../api/requests';

export default function PokeApp() {
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

  return (
    <Router>
      <Route exact path="/" component={Pokemons} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
    </Router>
  );
}
