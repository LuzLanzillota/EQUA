import { Link } from "react-router-dom";
import './DiseniaWeb.css';
import Footer from './Footer';

function DisenioWeb() {
    return (
        <div>
            <div className='titulo-imagen'>
                <h1 className='h1-web'>DISEÑO WEB</h1>
                <div className='imagensimbolo'>
                    <img src="\images\forma3-inicio.png" alt="forma" />
                </div>
                <p className='p-web'>Desde branding hasta diseño de webs, equa lo hace realidad.</p>
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
