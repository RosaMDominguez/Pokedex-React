import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/organisms/Header/Header";
import "./PokemonDetailPage.scss";
import usePokemonDetail from "../../services/UsePokemonDetails";
import Button from "../../components/atoms/Button";

export const PokemonsDetailsPage = (): React.ReactElement => {
  const { id } = useParams();
  const pokemonId = id;
  const pokemon: any = usePokemonDetail(pokemonId || ""); // TODO: revisar tipado
  const pokemonStats = pokemon.stats;
  const TITLE_BUTTON: string = 'BACK'
  const URL_LINK: string = '/pokemonListPage';

  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <div className="containerDetail">
      <Button
            title={TITLE_BUTTON}
            onClickButton={()=>{ navigate(URL_LINK)}}
          ></Button>
        <div className="pokedex">
          <div className="pokemonImg">
            <img
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                pokemon?.sprites?.front_default
              }
              alt={pokemon?.name}
            />
          </div>
          <div className="pokemonDetail">
            {pokemonStats?.map((s: any) => (
              <div className="statsContainer">
                <div>
                  <p>{s.stat.name.toLowerCase()}</p>
                </div>
                <div>
                  <progress max="100" value={s.base_stat}></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonsDetailsPage;
