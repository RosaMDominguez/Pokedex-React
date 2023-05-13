import './Header.scss';

const Header = () => {
  const HeaderTitle: string = 'Pokédex';
  const UrlIcon: string = '../../../assets/images/pngegg (1).png';
  
return(
<div className='containerHeaders'>
{/* <img src='../../../assets/images/pngegg (1).png' alt={HeaderTitle} /> */}
<h1>{HeaderTitle}</h1>
</div>
)
}

export default Header;