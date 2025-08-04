import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="hero-card">
                <div className="hero-top">
                    <img src="/images/Pensando.png" alt="Pensando distinto nos encontramos" className="hero-text-img" />
                    <Link to="/quienessomos" className="nav-link">
                        <img src="/images/sobrenosotros.png" alt="Sobre Nosotras" />
                    </Link>
                </div>
                                    <div className="forma-azul">
                        <img src="/images/circulo.png" alt="Decorativo azul" />
                    </div>
                <div className='al-lado'> <p className="descripcion">
                    Somos una agencia de diseño multimedial especializada en diseño y comunicación,
                    ofrecemos soluciones creativas y personalizadas :)</p>
                
                    </div>

            </div>
        </div>
    );
};

export default Hero;

