import { PokemonsDetail } from "../../../interfaces/interfaces";
import usePokemonsList from "../../../services/UsePokemonsList";

interface Props {
    pokemonsUrls?: string[] | null;
    page: number;
    perPage: number;
  }

const List = ({ pokemonsUrls, page, perPage }: Props) => {
  const pokemonListData: PokemonsDetail[] = usePokemonsList();
console.log('***listado de pokemons', pokemonListData)
}

export default List;