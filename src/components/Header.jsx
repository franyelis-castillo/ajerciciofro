import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        ZENITH BONSAI
      </NavLink>
      <nav className="navbar__links">
        <NavLink to="/philosophy" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
          Filosofía
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
          Galería
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
          Reservas
        </NavLink>
      </nav>
    </header>
  )
}

export default Header