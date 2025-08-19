import './Inicio.css';
import Footer from './Footer';
import Hero from './Hero';
import Portfolioinico from './Portfolio-inicio';
import Cartasinicio from './Cartas-inicio';
import Mejora from './mejordeinicio';
import Accordion from './Accordion';

function Inicio() {
    return (
        <div>
            <div className="fondo">
                <video
                    src="/images/equa.mp4"
                    autoPlay
                    muted
                    onEnded={(e) => e.target.pause()}
                    style={{
                        width: "30%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                        margin: "0 auto",
                        position: "relative",
                        top: "0",
                        zIndex: "1"
                    }}
                />

            </div>

            <div className='fondo-inicio'>
                <img src="\images\fondos\fondo.png" alt="" />
            </div>
            <Hero />
            <div className='fondo-2'>
                <img src="\images\fondos\fondo 2.png" alt="" />
            </div>

            <div className='fondo-3'>
                <img src="\images\fondos\fondo 3.png" alt="" />
            </div>
            <div className="cartasinicio">
                <Cartasinicio />
            </div>
            <div>
                <Mejora />
            </div>
            <div className='prot'>
                <Portfolioinico />
            </div>
            <div className='acor'>
                <Accordion />
            </div>
            <Footer />

        </div>
    );
}

export default Inicio;