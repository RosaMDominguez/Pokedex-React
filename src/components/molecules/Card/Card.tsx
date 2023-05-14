import { useNavigate } from "react-router-dom";
import { PokemonsDetail } from "../../../interfaces/interfaces";
import usePokemonDetail from "../../../services/UsePokemonDetails";
import "./Card.scss";

const Card = (props: PokemonsDetail) => {
  const { pokemonId, name, url } = props;

  const URL_LINK: string = `/pokemonDetailsPage/${pokemonId}`;
  const pokemon: any = usePokemonDetail(pokemonId);

  const navigate = useNavigate();

  return (
    <div
      className="pokeCard"
      onClick={() => {
        navigate(URL_LINK);
      }}
    >
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
