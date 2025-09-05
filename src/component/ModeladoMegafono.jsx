import "./ModeladoMegafono.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function ModeladoMegafono() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="h1-hada">Modelado 3D: Megáfono</h1>
            <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className="modelado3d-container">
                <model-viewer src="/images/3D/Megafono.glb" 
                ar 
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                disable-zoom 
                tone-mapping="neutral" poster="poster.webp" shadow-intensity="1">

                    <div class="progress-bar hide" slot="progress-bar">
                        <div class="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        
                    </button>
                </model-viewer>

            </div>
            <Footer />
        </div>
    );
}

export default ModeladoMegafono;;
