import "./ModeladoHada.css";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

function ModeladoHada() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="h1-hada">Modelado 3D: Hada</h1>
                        <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className="modelado3d-container">
                <model-viewer
                    src="/images/3D/HADA-PARA-WEB.glb"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    disable-zoom
                    tone-mapping="neutral"
                    shadow-intensity="1"
                >
                    <div className="progress-bar hide" slot="progress-bar">
                        <div className="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
                </model-viewer>

            </div>
            <Footer />
        </div>
    );
}

export default ModeladoHada;
