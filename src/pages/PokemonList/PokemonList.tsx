// import { List } from '../../components/List/List';
// import { Pagination } from '../../components/Pagination/Pagination';

export const PokemonsList =()=>{

    // const { pokemonsFiltered } = useContext(PokemonContext);
    // const { page, nextPage, previousPage, backToHome } = usePagination();

    let perPage = 12;

    return (
        <div>
          {/* <List
            page={page}
            perPage={perPage}
            pokemonsUrls={pokemonsFiltered}
          />
          <Pagination
            page={page}
            perPage={perPage}
            nextPage={nextPage}
            previousPage={previousPage}
            maxItems={pokemonsFiltered?.length!}
          /> */}
        </div>
      );
}
export default PokemonsList;