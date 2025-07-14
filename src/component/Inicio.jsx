import './Inicio.css';
import Footer from './Footer';
import Hero from './Hero';
import Portfolioinico from './Portfolio-inicio';

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
        <div className='fondo-3'>
            <img src="\images\fondo 3.png" alt="" />
        </div>
        <div>
            <Portfolioinico/>
        </div>
        
    <Footer/>

</div>
);
}

export default Inicio;