import React, { useReducer } from 'react';
import { topBar, logo, container } from './appStyle';
import './App.css';
import Pokemons from '../pages/Pokemons';
import Context from '../store/Context';
import { initialState, pokemonReducer } from '../store/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  return (
    <div>
      <div style={topBar}>
        <div style={logo}>
          <img
            src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
            alt="pokemon"
          />
        </div>
      </div>
      <Context.Provider value={{ state, dispatch }}>
        <div style={container}>
          <Pokemons />
        </div>
      </Context.Provider>
    </div>
  );
};

export default App;
