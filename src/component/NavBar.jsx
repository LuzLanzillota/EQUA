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
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/quienessomos">QUIENES SOMOS</NavLink></li>
                    <li><NavLink to="/contacto">CONTACTO</NavLink></li>
                    <li><NavLink to="/branding"></NavLink></li>
                    <li><NavLink to="/diseñoweb"></NavLink></li>
                    <li><NavLink to="/motion"></NavLink></li>
                </ul>

            </nav>
        </header>
    );
}

export default NavBar;
