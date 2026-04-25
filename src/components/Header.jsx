import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>ZENITH BONSAI</h1>

      <nav>
        <ul>
          <li><Link to="/">Filosofía</Link></li>
          <li><Link to="/">Galería</Link></li>
          <li><Link to="/">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;