import { useState } from "react";
import { PokemonsDetail } from "../../interfaces/interfaces";
import Pagination  from '../../components/molecules/Pagination/Pagination';
import usePokemonsList from "../../services/UsePokemonsList";
import List from "../../components/organisms/List/List";
import './PokemonListPage.scss';
import Header from "../../components/organisms/Header/Header";
const cardsLimit = 12;

export const PokemonsListPage =()=>{

  const [currentPage, updateCurrentPage] = useState(1);

  const pokemonListResult: PokemonsDetail[] = usePokemonsList();

 const getPaginatedData = (): PokemonsDetail[] => {
  console.log('***esta es la lista', pokemonListResult)
    const startIndex = currentPage * cardsLimit - cardsLimit;
    const endIndex = startIndex + cardsLimit;
    return pokemonListResult.slice(startIndex, endIndex);
  };

  const pokemonsResponse = getPaginatedData();

    return (
      <>
      <Header></Header>
        <div className="containerPokemonsList">
          <List pokemonsDetail={pokemonsResponse}></List>
         {/* <Pagination page={currentPage} updateCurrentPage={() => {
          updateCurrentPage;
        }}
        >
         </Pagination> */}
          <Pagination currentPage={currentPage}></Pagination>
        </div>
        </>
      );
}
export default PokemonsListPage;