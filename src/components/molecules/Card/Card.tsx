import { useNavigate } from "react-router-dom";
import { PokemonsDetail } from "../../../interfaces/interfaces";
import "./Card.scss";
import usePokemonImg from "../../../services/UsePokemonImg";

const Card = (props: PokemonsDetail) => {
  const { pokemonId, name, url } = props;

  const numberExtractor = (url: string) => {
    return url.replace(/\d/, "").replace(/\D/g, "");
  };
  const pokemonImg: any = usePokemonImg(numberExtractor(url));
  const URL_LINK: string = `/pokemonDetailsPage/${pokemonId}`;
  const navigate = useNavigate();

  return (
    <div
      className="pokeCard"
      onClick={() => {
        navigate(URL_LINK);
      }}
    >
      <div className="cardImg">
        <img src={pokemonImg} alt="" />
      </div>
      <div className="cardTitle">{name}</div>
    </div>
  );
};

export default Card;
