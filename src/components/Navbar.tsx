import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          {/* <img src="public/images/dragon.png" alt="Dragon Agency" className="navbar-logo" /> */}
          home
        </Link>
        <Link to="/talent">talent</Link>
        <Link to="/work">work</Link>
      </div>
      <div className="navbar-right">
        <Link to="/contact">contact</Link>
      </div>
    </nav>
  )
}

export default Navbar