import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './Portfolio.css';

const Portfolio = () => {
    const videoRef = useRef(null);
    const modalRef = useRef(null);

    const mostrarReel = () => {
        modalRef.current.style.display = 'block';
        videoRef.current.play();
    };

    const cerrarReel = () => {
        modalRef.current.style.display = 'none';
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    useEffect(() => {
        const faders = document.querySelectorAll('.fade-in');

        const appearOnScroll = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.2 }
        );

        faders.forEach((el) => appearOnScroll.observe(el));
    }, []);

    return (
        <div>
            <header className="header-portfolio">
                <div className="logo-container fade-in"></div>
                <img src="/images/PORTFOLIO.png" alt="Decoración barra" className="barra-img" />
            </header>

            <main className="main-portfolio">
                <Link to='/motion'>
                    <section className="card-motion fade-in">
                        <div className="contenido-motion">
                            <p>
                                Creamos motion graphics dinámicos y envolventes, transmitiendo la esencia de tu marca generando
                                impacto visual en tu audiencia.
                            </p>
                        </div>
                        <img src="/images/MotionGraphics.png" className="img-superpuesta izquierda" alt="Motion" />
                    </section>
        </Link>
                    <section className="card-modelado fade-in">
                        <div className="contenido-modelado">
                            <p>Desarrollamos modelos 3D de alta calidad que dan vida a tus ideas.</p>
                        </div>
                        <img src="/images/Modelaodo3D.png" className="img-superpuesta derecha" alt="Modelado 3D" />
                    </section>
                    <Link to='/branding'>
                    <section className="card-branding fade-in">
                        <div className="contenido-branding">
                            <p>
                                Creamos una identidad de marca de gran impacto para su mercado objetivo y destacable entre la competencia.
                            </p>
                        </div>
                        <img src="/images/Branding.png" className="img-superpuesta izquierda" alt="Branding" />
                    </section></Link>
                    <Link to='/diseñoweb'>
                    <section className="card-web fade-in">
                        <div className="contenido-web">
                            <p>
                                Creamos sitios web visualmente deslumbrantes y fáciles de usar que capturan la esencia de su marca y
                                atraen a su audiencia.
                            </p>
                        </div>
                        <img src="/images/DisenoWeb.png" className="img-superpuesta derecha" alt="Diseño Web" />
                    </section>
                    </Link>
                <div className="reel-container fade-in">
                    <button className="boton-reel" onClick={mostrarReel}>
                        VER REEL
                    </button>
                </div>

                <div className="modal" ref={modalRef}>
                    <div className="modal-contenido">
                        <span className="cerrar" onClick={cerrarReel}>
                            &times;
                        </span>
                        <video ref={videoRef} controls>
                            <source src="/images/REEL-FINAL-PORTFOLIO.mp4" type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;
