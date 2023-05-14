import { useParams } from "react-router-dom";
import Header from "../../components/organisms/Header/Header";
import './PokemonDetailPage.scss';
import usePokemonDetail from "../../services/UsePokemonDetails";

export const PokemonsDetailsPage = (): React.ReactElement => {
    const {id } = useParams();

    const pokemonId = id;
    
        const pokemon: any = usePokemonDetail(pokemonId || '1');
          const pokemonStats= pokemon.stats;
    
    return (
<>
      <Header></Header>
      <div className="containerDetail">
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
                  <div >
                  <progress max="100" value={s.base_stat}></progress>
                  </div>
                </div>
              ))}
</div>
</div>
      </div>
       
        </>
    )
}
export default PokemonsDetailsPage;