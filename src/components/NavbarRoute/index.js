import {Link} from 'react-router-dom'

import './index.css'

const NavbarRoute = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        className="logo"
        alt="website logo"
      />
    </Link>
  </nav>
)

export default NavbarRoute
