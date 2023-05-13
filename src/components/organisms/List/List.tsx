import { PokemonsDetail, PokemonsResponse } from "../../../interfaces/interfaces";
import Card from "../../molecules/Card/Card";
import './List.scss';

const List = (props: PokemonsResponse) => {
  const { pokemonsDetail } = props;
  // const pokemonListData: PokemonsDetail[] = usePokemonsList();
console.log('***listado de pokemons', pokemonsDetail)
return(
  <div className="cardsContainer">
            {pokemonsDetail.map((d, idx: number) => (
              <Card name={d.name} url={d.url} key={idx} />
            ))}
  </div>
)
}

export default List;