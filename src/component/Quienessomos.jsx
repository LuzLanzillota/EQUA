import React, { useRef, useEffect } from "react";
import "./Quienessomos.css";
import Footer from "./Footer";


const Quienessomos = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            console.log("mousedown");
            scrollContainer.classList.add('dragging');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        };

        const handleMouseLeaveOrUp = () => {
            isDown = false;
            scrollContainer.classList.remove('dragging');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        const handleTouchStart = (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = scrollContainer.scrollLeft;
        };

        const handleTouchMove = (e) => {
            const x = e.touches[0].pageX;
            const walk = (x - startX) * -1;
            scrollContainer.scrollLeft = scrollLeft + walk;
        };

        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mouseleave', handleMouseLeaveOrUp);
        scrollContainer.addEventListener('mouseup', handleMouseLeaveOrUp);
        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('touchstart', handleTouchStart);
        scrollContainer.addEventListener('touchmove', handleTouchMove);

        return () => {
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeaveOrUp);
            scrollContainer.removeEventListener('mouseup', handleMouseLeaveOrUp);
            scrollContainer.removeEventListener('mousemove', handleMouseMove);
            scrollContainer.removeEventListener('touchstart', handleTouchStart);
            scrollContainer.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div>
            {/* Encabezado */}
            <section className="quienes-somos">
                <div className="equipo-container">
                    <img src="/images/EquipoEqua.png" alt="Equipo Equa" className="equipo" />
                </div>

                <div className="descripcion-logo">
                    <div className="texto">
                        <h2 className="h2">EQUA</h2>
                        <p className="p">
                            EQUA es equilibrio en acción.<br /> Mezclamos opuestos, rompemos <br /> moldes y creamos algo nuevo. <br /> Diseño, comunicación y estrategia <br /> con personalidad.
                        </p>
                    </div>
                    <img src="/images/Q.png" alt="Logo Equa" className="logo" />
                </div>
            </section>

            {/* Integrantes con scroll horizontal */}
            <section className="integrantes-scroll">
                <div className="scroll-container" ref={scrollRef}>
                    {[
                        { nombre: 'Camila Urretabizcaya', rol: 'Directora de Arte', clase: 'camila', img: '/nosotras/camila.png' },
                        { nombre: 'Luz Lanzillota', rol: 'Programadora', clase: 'luz', img: '/nosotras/luz.png' },
                        { nombre: 'Malena Battista', rol: 'Project Manager', clase: 'malena', img: '/nosotras/malena.png' },
                        { nombre: 'Lucía Massigoge', rol: 'Directora Creativa', clase: 'lucia', img: '/nosotras/lucia.png' },
                        { nombre: 'Rocio Larreguy', rol: 'Estratega de Marca', clase: 'rocio', img: '/nosotras/rocio.png' },
                        { nombre: 'Federica Zago', rol: 'Diseñadora Gráfica', clase: 'federica', img: '/nosotras/federica.png' },
                    ].map((integrante, i) => (
                        <div className="integrante" key={i}>
                            <div className={`nombres ${integrante.clase}`}>
                                <h3>{integrante.nombre.split(' ')[0]} <br />{integrante.nombre.split(' ')[1]}</h3>
                                <p className="p">{integrante.rol}</p>
                            </div>
                            <img src={`/images/${integrante.img}`} alt={integrante.nombre} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Por qué Equa */}
            <section className="porque">
                <h2 className="h2-por">¿POR QUÉ EQUA?</h2>
                <div className="valores">
                    {[
                        { titulo: 'Equilibrio', texto: 'Buscamos el balance entre opuestos para encontrar soluciones creativas y únicas.', img: '/iconos/equilibrio.png' },
                        { titulo: 'Colaboración', texto: 'Creemos que las mejores ideas nacen cuando diferentes perspectivas se potencian entre sí.', img: '/iconos/colaboracion.png' },
                        { titulo: 'Innovación', texto: 'Pensamos distinto para crear algo nuevo, desafiando lo establecido con ideas frescas y relevantes.', img: '/iconos/innovacion.png' },
                    ].map((valor, i) => (
                        <div className="valor" key={i}>
                            <img src={`/images/${valor.img}`} alt={valor.titulo} />
                            <h3>{valor.titulo}</h3>
                            <p className="p-nosotras">{valor.texto}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Quienessomos;