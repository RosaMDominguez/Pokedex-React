
import pokemonsTeam from '../../assets/images/pokemonTeam.png'
import './PokemonHome.scss';
import Button from '../../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const APP_NAME: string = 'Welcome Pokedex';
const LINK_TITLE : string = 'Enter';
const ALT_IMG: string = 'imgPokemons'
const URL_LINK: string = '/pokemonList';


const PokemonsHome =()=>{

    const navigate = useNavigate();

    return (
        <div className='containerHome'>
        <h1>{ APP_NAME }</h1>
        <img src={pokemonsTeam} alt={ALT_IMG} />
        <Button title = {LINK_TITLE} onClickButton={()=>{ navigate(URL_LINK)}} />
        </div>
    ) 
}
export default PokemonsHome;