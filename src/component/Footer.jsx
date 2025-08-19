import React from 'react';
import './Footer.css';
import logo from '/images/equa.png';
import { Link } from 'react-router-dom';

function Footer() {
return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-left">
        <p>Empezá a trabajar con nosotros!</p>
        <Link to="/contacto">
            <button className="contact-btn">Contactanos</button>
        </Link>
        </div>



        <div className="footer-right">
        <a href="https://www.artstation.com/equa" target='_blanck' className="footer-link">ART STATION</a>
        <a href="#" className="footer-link">BEHANCE</a>
        <a href="https://www.instagram.com/equa.agencia/" target='_blanck' className="footer-link">INSTAGRAM</a>
        <a href="#" className="footer-link">LINKEDIN</a>
        </div>
    </div>

    <div className="footer-bottom">
        <img src={logo} alt="Logo EQUA" className="footer-logo" />
        <p className='texto'>© EQUA 2025 <br /> TODOS LOS DERECHOS RESERVADOS</p>
    </div>
    </footer>
);
}

export default Footer;
