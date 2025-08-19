import { useEffect } from "react";
import "./ModeladoHada.css";
import Footer from "./Footer";

function ModeladoHada() {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="modelado3d-container">
            <model-viewer
                src="/images/HADA-PARA-WEB.glb"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="neutral"
                poster="poster.webp"
                shadow-intensity="1"
            >
                <div className="progress-bar hide" slot="progress-bar">
                    <div className="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                    View in your space
                </button>
            </model-viewer>

            <Footer />
        </div>
    );
}

export default ModeladoHada;