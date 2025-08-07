import { useNavigate,Link } from "react-router-dom";
import "./Motion.css";
import Footer from "./Footer";

function Motion() {
    const navigate = useNavigate();

    return (
        <div className='motion-container'>
            <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>

            <div className='titulo-imagen'>
                <h1 className='h1-motion'>MOTION <br /> GRAPHICS</h1>
                <div className='imagensimbolo'>
                    <img src="/images/circuloMotion.png" alt="forma" />
                </div>
                <p className="p-de-motionp">Crea magia SVG. Transforma, dibuja, anima y mucho más.</p>
                <div>
                    <p className="p-de-motion">COLLAGE</p>
                    <p className="p-de-motion">SVG</p>
                    <p className="p-de-motion">VFX</p>
                    <p className="p-de-motion">TIPOGRAFÍA</p>
                    <p className="p-de-motion">MATTE PAINTING</p>
                </div>

            </div>
            <div class="container-motion">
                <div class="foto1"><Link to="/motion-LasPepas"><img src="/images/foto-1.png" alt="" /></Link></div>
                <div class="foto2"><Link to="/motion-BSAS"><img src="/images/foto-2.png" alt="" /></Link></div>
                <div class="foto3"><Link to="/motion-Charly"><img src="/images/foto-3.png" alt="" /></Link></div>
                <div class="foto4"><Link to="/motion-Nike"><img src="/images/foto-4.png" alt="" /></Link></div>
            </div>
            <Footer />
        </div>
    );
}

export default Motion;

