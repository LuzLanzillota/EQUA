import './Cartas-inicio.css';
import React, { useEffect } from 'react';

function Cartasinicio() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const cartas = document.querySelectorAll('.carta-animada');
        cartas.forEach(carta => observer.observe(carta));

        return () => observer.disconnect();
    }, []); // ← correcto: sin dependencias innecesarias

    return (
        <div>
            <h1 className='titulo-carta'>Pensálo, nosotras le damos forma</h1>
            <p className='servicios'>Estos son algunos de nuestros servicios ;)</p>
            <div className='trescaartas'>
                <div className='imagencarta carta-animada delay-1'>
                    <img src="/images/carta1.png" alt="" />
                </div>
                <div className='imagencarta carta-animada delay-2'>
                    <img src="/images/carta2.png" alt="" />
                </div>
                <div className='imagencarta carta-animada delay-3'>
                    <img src="/images/carta3.png" alt="" />
                </div>
            </div>
            <div className='imagencarta2'>
                <div className='carta-animada delay-4'>
                    <img src="/images/carta4.png" alt="" />
                </div>
                <div className='carta5 carta-animada delay-5'>
                    <img src="/images/carta5.png" alt="" />
                </div>
                <div className='carta6 carta-animada delay-6'>
                    <img src="/images/carta6.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Cartasinicio;
