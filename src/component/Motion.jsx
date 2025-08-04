import { useNavigate } from "react-router-dom";
import "./Motion.css";

function Motion() {
    const navigate = useNavigate(); 

    return (
        <div className='motion-container'>
            <button className="boton-atras" onClick={() => navigate(-1)}>
                <img src="/images/flecha.png" alt="" />
            </button>

            <div className='titulo-imagen'>
                <h1 className='h1-motion'>MOTION <br /> GRAPHICS</h1>
                <div className='imagensimbolo'>
                    <img src="/images/circuloMotion.png" alt="forma" />
                </div>
                    <p >Crea magia SVG. Transforma, dibuja, anima y mucho más.</p>
            </div>
        </div>
    );
}

export default Motion;

