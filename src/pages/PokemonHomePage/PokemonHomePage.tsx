
import pokemonsTeam from '../../assets/images/pokemonTeam.png'
import './PokemonHomePage.scss';
import Button from '../../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const LINK_TITLE : string = 'Enter';
const ALT_IMG: string = 'imgPokemons'
const URL_LINK: string = '/pokemonListPage';


const PokemonsHomePage =()=>{

    const navigate = useNavigate();

    return (
        <div className='containerHome'>
        {/* <h1>{ APP_NAME }</h1> */}
        <img src = "https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"></img>
        <img src={pokemonsTeam} alt={ALT_IMG} />
        <Button title = {LINK_TITLE} onClickButton={()=>{ navigate(URL_LINK)}} />
        </div>
    ) 
}
export default PokemonsHomePage;