import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/PokemonHomePage/PokemonHomePage';
import PokemonListPage from './pages/PokemonListPage/PokemonListPage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/pokemonListPage" element={ <PokemonListPage />}></Route>
      <Route path="/pokemonDetailsPage/:id" element={ <PokemonDetailsPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
