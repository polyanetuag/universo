import './Header.css';

function Header() {
  return (
    <header className="content-App">
      {/* <span>Logo</span> */}
      <a href='/'>Sobre</a>
      <a href='/'>Planetas</a>
      <a href='/'>Curiosidades</a>
    </header>
  );
}

export default Header;