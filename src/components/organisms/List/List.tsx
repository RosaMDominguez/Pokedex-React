import { PokemonsResponse } from "../../../interfaces/interfaces";
import Card from "../../molecules/Card/Card";
import "./List.scss";

const List = (props: PokemonsResponse) => {
  const { pokemonsDetail } = props;

  const numberExtractor = (url: string) => {
    return url.replace(/\d/, "").replace(/\D/g, "");
  };

  return (
    <div className="cardsContainer">
      {pokemonsDetail.map((pokemon, index) => (
        
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
