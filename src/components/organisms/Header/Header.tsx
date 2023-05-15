import "./Header.scss";

const HEADER_TITLE: string = "Pokédex";

const Header = () => {

  return (
    <div className="containerHeaders">
      <h1>{HEADER_TITLE}</h1>
    </div>
  );
};

export default Header;
