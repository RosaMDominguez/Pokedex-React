
import pokemonsTeam from '../../assets/images/pokemonTeam.png'
import './PokemonHome.styles.scss';

const appName: string = 'Welcome Pokedex';


export const PokemonsHome =()=>{
    return (
        <div className='containerHome'>
        <h1>{ appName }</h1>
        <img src={pokemonsTeam} alt="imgPokemons" />
        <a href='../PokemonList/PokemonList.tsx'>Enter</a>
        </div>
    ) 
}
export default PokemonsHome;