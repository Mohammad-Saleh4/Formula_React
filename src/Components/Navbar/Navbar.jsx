import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">F1Zone</div>
        
        <ul className="nav-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/explore" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/teams" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Teams
            </NavLink>
          </li> 
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Players
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link nav-contact active" : "nav-link nav-contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {}
        <div className="nav-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;