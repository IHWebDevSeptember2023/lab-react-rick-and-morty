import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar-container">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/characters" className={({ isActive }) => isActive ? "selected" : ""}>
                        Characters
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;