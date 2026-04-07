import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-name"> MiniTienda </span>
            </div>
            <div className="navbar-links">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    🏠 Home
                </NavLink>
                <NavLink to="/productos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    🛒 Productos
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;