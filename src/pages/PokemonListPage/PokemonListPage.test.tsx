import { render , screen} from '@testing-library/react';
import Header from '../../components/organisms/Header';
import List from '../../components/organisms/List';
import Pagination from '../../components/molecules/Pagination';
import * as MOCK_POKEMON_LISTPAGE from '../../mocks/PokemonListPage.json';
import Error from '../../components/atoms/Error';


jest.mock('../../services/UsePokemonsList');

const TEXT_ERROR = 'No se ha podio cargar la lista de Pokemons';
const CURRENT_PAGE_MOCK = 1
const UPDATE_PAGE_FUNCTION_MOCK = (()=>{});


const renderPokemonListPage = ()=>{
    return render(
        <>
        <Header></Header>
      {MOCK_POKEMON_LISTPAGE && (
      <div className="containerPokemonsList">
        <List pokemonsDetail={MOCK_POKEMON_LISTPAGE}></List>
        <Pagination
          numPage={CURRENT_PAGE_MOCK}
          updateCurrentPage={(CURRENT_PAGE_MOCK: number) => {
            UPDATE_PAGE_FUNCTION_MOCK();
          }}
        ></Pagination>
      </div>
      )}
      {!MOCK_POKEMON_LISTPAGE && (
        <Error text={TEXT_ERROR}></Error>
      )}
        </>
    )
}
test('dfgsd', () => {
    const {container} =  renderPokemonListPage();
    expect(container).toMatchSnapshot()
})
