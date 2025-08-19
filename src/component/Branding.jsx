import "./Branding.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Branding = () => {
    const proyectos = [
        {
            nombre: "PROVECHO",
            titulo: "HAMBURGUESERÍA",
            descripcion:
                "Nosotros somos PROVECHO, la nueva hamburguesería fast food 100% Argentina.",
            imagen: "imgprovecho.png",
            link: '/',
        },
        {
            nombre: "CERMA",
            titulo: "CERÁMICA",
            descripcion:
                "CERMA necesitaba una identidad visual para lanzarse al mercado de artesanías.",
            imagen: "imgcerma.png",
            link: "/quienessomos",
        },
        {
            nombre: "YUNTA",
            titulo: "PRODUCTOS",
            descripcion:
                "YUNTA precisaba de ayuda al momento de crear su identidad visual.",
            imagen: "imgyunta.png",
            link: "yunta.html",
        },
        {
            nombre: "KAI",
            titulo: "BEACH RESORT & SPA",
            descripcion:
                "KAI necesitaba una identidad que la caracterizara como un spa que te transporta al verano.",
            imagen: "imgkai.png",
            link: "kai.html",
        },
    ];
    const navigate = useNavigate();
    return (
        <div className="branding-container">
        <section className="branding-section">
                        <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className="titulo-imagen">
                
            <h1 className="branding-title">BRANDING</h1>
            <div className="branding-logo"><img src="\images/formas\logoBranding.png" alt="" /></div>
            </div>
            <p className="branding-subtitle">
                Si no tenés resuelta tu marca, nosotras resolvemos.
            </p>

            <div className="cards-container">
                {proyectos.map((proyecto, index) => (
                    <a
                        href={proyecto.link}
                        className="branding-card"
                        key={index}
                    >
                        <img
                            src={`images/branding/${proyecto.imagen}`}
                            alt={proyecto.nombre}
                        />
                        <span className="card-tag">{proyecto.nombre}</span>
                        <div className="card-text">
                            <h3 className="card-title">{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
        <Footer/>
        </div>
    );
};

export default Branding;
