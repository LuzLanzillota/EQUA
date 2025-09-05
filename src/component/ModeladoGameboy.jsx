import "./ModeladoGameboy.css";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

function ModeladoGameboy() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="h1-hada">Modelado 3D: Gameboy</h1>
                        <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className="modelado3d-container">
                <model-viewer
                    src="/images/3D/Gameboy.glb"
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
                        
                    </button>
                </model-viewer>

            </div>
            <Footer />
        </div>
    );
}

export default ModeladoGameboy;
