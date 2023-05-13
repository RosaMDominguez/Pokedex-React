import { PokemonsDetail } from "../../../interfaces/interfaces";
import usePokemonDetail from "../../../services/UsePokemonDetails";
import "./Card.scss";

const Card = (props: PokemonsDetail) => {
  const { key, name, url } = props;
  console.log("*** esta es la url", key);

  const numberExtractor = (url: string) => {
    return url.replace(/\d/, "").replace(/\D/g, "");
  };

  const pokemon: any = usePokemonDetail(numberExtractor(url).toString());

  return (
    <div className="pokeCard">
      <div className="cardImg">
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
      </div>
      <div className="cardTitle">{name}</div>
    </div>
  );
};

export default Card;
