import { Link } from "react-router-dom";
import './DiseniaWeb.css';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

function DisenioWeb() {
    const navigate = useNavigate(); 
    return (
        <div>
            <div className='disenio-web'>
            <button className="boton-atras" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className='titulo-imagen'>
                <h1 className='h1-web'>DISEÑO WEB</h1>
                <div className='imagensimbolo'>
                    <img src="\images\forma3-inicio.png" alt="forma" />
                </div>
                </div>
                <p className='branding-subtitle'>Desde branding hasta diseño de webs, equa lo hace realidad.</p>
            </div>
            <div className="contenedor-web">
                
                <div className='imgweb'>
                    <Link to="https://oh-tea.netlify.app/"target="_blank" className="imgs" >
                    <img src="\images\web1.png" alt="" /></Link>
                    <Link to="https://oh-tea.netlify.app/"target="_blank"><button className="buton-web">Ver</button></Link>
                </div>
                <div className='imgweb'>
                    <Link to="https://may-belli-ne.netlify.app/" target="_blank" className="imgs">
                    <img src="\images\web2.png" alt="" /></Link>
                    <Link to="https://may-belli-ne.netlify.app/"target="_blank"><button className="buton-web">Ver</button></Link>
                    </div>
                <div className='imgweb'>
                    <Link to="https://ba-kery.netlify.app/"  target="_blank" className="imgs">
                    <img src="\images\web3.png" alt="" /></Link>
                    <Link to="https://ba-kery.netlify.app/" target="_blank" ><button className="buton-web">Ver</button></Link>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DisenioWeb;
