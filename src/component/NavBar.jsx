import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
    return (
        <header>
            <div className="navegacion">
                <Link to="/">
                    <img src="\images\logo.png" alt="Logotipo de EQUA" />
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/PORTFOLIO">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/QUIENESSOMOS">QUIENES SOMOS</NavLink></li>
                    <li><NavLink to="/CONTACTO">CONTACTO</NavLink></li>
                </ul>

            </nav>
        </header>
    );
}

export default NavBar;
