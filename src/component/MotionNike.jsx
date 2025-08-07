import { useNavigate,Link } from "react-router-dom";
import "./MotionLasPepas.css";
import Footer from "./Footer";

function MotionNike() {
    const navigate = useNavigate();

    return (
        <div className='motionlaspepas-container'>
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
                <div>
                    <h2 className="h2-laspepas">MOTION DE NIKE</h2>
                    <p className="p-de-motionp">Animación hecha en after acerca de la marca deportiva Nike</p>
                </div>
                <div className="img-motionp">
                    <img src="/images/motionnike.png" alt="Collage Flores" />
                    </div>
                </div>    
            <Footer />
        </div>
    );
}

export default MotionNike;