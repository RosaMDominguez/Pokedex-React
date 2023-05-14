import { PokemonsResponse } from "../../../interfaces/interfaces";
import Card from "../../molecules/Card/Card";
import "./List.scss";

const List = (props: PokemonsResponse) => {
  const { pokemonsDetail } = props;
  // const pokemonListData: PokemonsDetail[] = usePokemonsList();
  console.log("***listado de pokemons", pokemonsDetail);
  const numberExtractor = (url: string) => {
    return url.replace(/\d/, "").replace(/\D/g, "");
  };

  return (
    <div className="cardsContainer">
      {pokemonsDetail.map((pokemon, idx: number) => (
        <Card
          pokemonId={numberExtractor(pokemon.url)}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
};

export default List;
