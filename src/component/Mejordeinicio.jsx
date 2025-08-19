import React, { useRef, useEffect } from "react";
import "./Mejordeinicio.css";


const Mejora = () => {
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
        <div className="mejorreturn"> 
            {/* Encabezado */}
            {/* Proyectos con scroll horizontal */}
            <h1 className="titulo-rol">Lo mejor de lo mejor </h1>
            <p className="p-rol">Nuestros mejores trabajos B)</p>
            <section className="integrantes-scroll">
                <div className="scroll-container" ref={scrollRef}>
                    {[
                        {
                            titulo: "Flowers motion",
                            descripcion: "Este es un motion que hicimos...",
                            img: "/inciomejorestps/mejor1.png"
                        },
                        {
                            titulo: "Music motion",
                            descripcion: "Este es un motion que hicimos...",
                            img: "/inciomejorestps/mejor2.png"
                        },
                        {
                            titulo: "Habitación 3D",
                            descripcion: "Esta es una de las habitaciones modeladas. Tocá para ver más.",
                            img: "/inciomejorestps/mejor3.png"
                        },
                        {
                            titulo: "Personaje 3D",
                            descripcion: "Un personaje modelado por nosotras. Click para saber más.",
                            img: "/inciomejorestps/mejor4.png"
                        },
                        {
                            titulo: "Motion",
                            descripcion: "Este es uno de nuestros mejores motions animados, hacé click para verlo.",
                            img: "/inciomejorestps/mejor5.png"
                        },
                    ].map((item, i) => (
                        <div className="proyecto-card" key={i}>
                            <img src={`/images/${item.img}`} alt={item.titulo} />
                            <h3 className="h3-mejor">{item.titulo}</h3>
                            <p className="pe">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Mejora;