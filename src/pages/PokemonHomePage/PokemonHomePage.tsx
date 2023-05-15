import pokemonsTeam from "../../assets/images/pokemonTeam.png";
import "./PokemonHomePage.scss";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const LINK_TITLE: string = "Go";
const ALT_IMG: string = "imgPokemons";
const URL_LINK: string = "/pokemonListPage";
const URL_IMG: string =
  "https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png";

const PokemonsHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="containerHome">
      <img src={URL_IMG}></img>
      <img src={pokemonsTeam} alt={ALT_IMG} />
      <Button
        title={LINK_TITLE}
        onClickButton={() => {
          navigate(URL_LINK);
        }}
      />
    </div>
  );
};
export default PokemonsHomePage;
