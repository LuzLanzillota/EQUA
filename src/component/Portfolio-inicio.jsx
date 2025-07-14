import "./Portfolio-inicio.css";
function Portfolioinico() {
    return (
        <div>
            <div className="header-port">
                <h1>Portfolio</h1>
                <p>Observá en lo que somos buenas B)</p>
            </div>
            <div className='formas'>
                <div className='forma1'>
                    <img src="\images\forma1-inicio.png" alt="Imagen de Motion graphics" />
                    <h2>Motion graphics</h2>
                    <p>Crea magia SVG, transforma, anima y mucho más.</p>
                </div>
                <div className='forma1'>
                    <img src="\images\forma2-inicio.png" alt="Imagen de Modelado 3D" />
                    <h2>Modelado 3D</h2>
                    <p>Vuelve realidad tus personajes, objetos, escenarios y más.</p>
                </div>
                <div className='forma1'>
                    <img src="\images\forma3-inicio.png" alt="Imagen de Diseño web" />
                    <h2>Diseño web</h2>
                    <p>Te ayudamos con tu diseño; y si ya lo tenes, lo hacemos funcionar.</p>
                </div>
                <div className='forma1'>
                    <img src="\images\forma4-inicio.png" alt="Imagen de Branding" />
                    <h2>Branding</h2>
                    <p>Si no tenes resuelta tu marca, nosotras resolvemos.</p>
                </div>

            </div>
        </div>
    );
}
export default Portfolioinico;