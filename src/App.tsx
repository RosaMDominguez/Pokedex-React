import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/PokemonHome/PokemoHome';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/pokemonList" element={ <PokemonList />}></Route>
      <Route path="/pokemonDetails/:id" element={ <PokemonDetails />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
