import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <header className="header">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bad-page">BadPage</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
