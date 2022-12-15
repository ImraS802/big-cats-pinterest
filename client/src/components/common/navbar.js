import { Link } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'
import logo from './images/logo.png'

const Navbar = () => {

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a className="navbar-logo" href="/">
            <img src={logo} alt="Logo" width="50" height="50"/>          
          </a>
          <Link to="/bigcat" className="navbar-object-bigcat">Big Cat Pinterest</Link>
          { isAuthenticated() && <Link to="/bigcat/new" className="navbar-object-add">Add Big Cat</Link>}
        </div>
        <div className="navbar-end">
          { !isAuthenticated() && <Link to="/register" className="navbar-object">Register</Link> }
          { !isAuthenticated() && <Link to="/login" className="navbar-object">Log in</Link> }
          { isAuthenticated() && <Link to="/profile" className="navbar-object">Profile</Link> }
          { isAuthenticated() && <Link to="/" onClick={handleLogout} className="navbar-object">Logout</Link>}
        </div>
      </div>
    </nav>
  )

}

export default (Navbar)