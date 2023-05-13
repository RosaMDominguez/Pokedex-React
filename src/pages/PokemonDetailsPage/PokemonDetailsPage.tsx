import { useParams } from "react-router-dom";
import Header from "../../components/organisms/Header/Header";
import './PokemonDetailPage.scss';
import usePokemonDetail from "../../services/UsePokemonDetails";

export const PokemonsDetailsPage = (): React.ReactElement => {
    const id  = useParams();

    const pokemonId = id.id;
    console.log('**este es el pokemon', pokemonId)
    // if( pokemonId ) {
        const pokemon: any = usePokemonDetail(pokemonId || '1');
        // console.log('**este es el pokemon', pokemonId)
    // }
    
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
{/* <p>{pokemon.}</p>
<p>{pokemon.}</p>
<p>{pokemon.}</p>
<p>{pokemon.}</p> */}
{pokemon.stats.map((s: any) => (
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