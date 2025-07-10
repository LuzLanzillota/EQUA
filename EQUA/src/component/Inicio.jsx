import './Inicio.css';
import Footer from './Footer';
import Hero from './Hero';

function Inicio() {
return (
<div>
    <div className='fondo'>
        <img src="\images\equa.png" alt="" />
    </div>
        <div className='fondo-inicio'>
        <img src="\images\fondo.png" alt="" />
    </div>
        <Hero/>
        <div className='fondo-2'>
            <img src="\images\fondo 2.png" alt="" />
        </div>
        
    <Footer/>

</div>
);
}

export default Inicio;