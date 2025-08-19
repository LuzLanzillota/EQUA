import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Modelado3D.css";
import Footer from "./Footer";

function Modelado3d() {
    const navigate = useNavigate();
    const [botonActivo, setBotonActivo] = useState(null);
    const handleClick = (boton) => {
        setBotonActivo(botonActivo === boton ? null : boton);
    };
    return (
        <div className="modelado3d-container">
            <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className='titulo-imagen'>
                <h1 className='h1-modelado'>MODELADO 3D</h1>
                <div className='imagensimbolo'>
                    <img src="/images/formas/logoModelado.png" alt="forma" />
                </div>
                <p className="p-de-modeladop">Vuelve realidad tus personajes, los objetos que te gustan, escenarios y mucho más.</p>
            </div>
            <div className="container-modelado">
                <button
                    onClick={() => handleClick("objetos")}
                    className={`buton-modelado ${botonActivo === "objetos" ? "activo" : ""}`}
                >
                    OBJETOS
                </button>
                <button
                    onClick={() => handleClick("personajes")}
                    className={`buton-modelado ${botonActivo === "personajes" ? "activo" : ""}`}
                >
                    PERSONAJES
                </button>
                <button
                    onClick={() => handleClick("escenarios")}
                    className={`buton-modelado ${botonActivo === "escenarios" ? "activo" : ""}`}
                >
                    ESCENARIOS
                </button>
            </div>

            {botonActivo === null && (
                <div className="container-imagenes">
                    <div className="imagen1">
                        <Link to="/">
                            <img src="/images/3D/1parte/1.png" alt="" /></Link>
                    </div>
                    <div className="imagen2">
                        <img src="/images/3D/1parte/2.png" alt="" />
                    </div>
                    <div className="imagen3">
                        <img src="/images/3D/1parte/3.png" alt="" />
                    </div>
                    <div className="imagen4">
                        <img src="/images/3D/1parte/4.png" alt="" />
                    </div>
                    <div className="imagen5">
                        <img src="/images/3D/1parte/5.png" alt="" />
                    </div>
                    <div className="imagen6">
                        <img src="/images/3D/1parte/6.png" alt="" />
                    </div>
                </div>
            )}
            {botonActivo === "objetos" && (
            <div className="container-objetos">
                <div className="imagen1"> <img src="/images/3D/1parte/1.png" alt="" /></div>
                <div className="imagen2"> <img src="/images/3D/2parte/2.png" alt="" /></div>
                <div className="imagen3"> <img src="/images/3D/2parte/3.png" alt="" /></div>
                <div className="imagen4"> <img src="/images/3D/2parte/4.png" alt="" /></div>
                <div className="imagen5"> <img src="/images/3D/2parte/5.png" alt="" /></div>
                <div className="imagen6"><img src="/images/3D/1parte/5.png" alt="" /></div>
            </div>
            )}
            {botonActivo === "escenarios" && (
                <div className="container-escenarios">
                    <div className="imagen1"><img className="img-wrapper" src="/images/3D/3parte/1.png" alt="" /></div>
                    <div className="imagen2"><img className="img-wrapper" src="/images/3D/3parte/2.png" alt="" /></div>
                    <div className="imagen3"><img src="/images/3D/1parte/3.png" alt="" /></div>
                </div>
            )}
            {botonActivo === "personajes" && (
                <div className="container-personajes">
                    <div className="imagen1"><img src="/images/3D/4parte/1.png" alt="" /></div>
                    <div className="imagen2"><img src="/images/3D/4parte/2.png" alt="" /></div>
                    <div className="imagen3"><img src="/images/3D/4parte/3.png" alt="" /></div>
                    <div className="imagen4"><img src="/images/3D/4parte/4.png" alt="" /></div>
                    <div className="imagen5"><img src="/images/3D/4parte/5.png" alt="" /></div>
                    <div className="imagen6"><img src="/images/3D/4parte/6.png" alt="" /></div>
                    </div>
                )}
            <Footer />
        </div>
    );
}

export default Modelado3d;

