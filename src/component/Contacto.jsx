import React, { useState } from 'react';
import './Contacto.css';

const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        pais: '',
        empresa: '',
        telefono: '',
        email: '',
        servicio: '',
        mensaje: ''
    });

    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const camposObligatorios = ['nombre', 'email', 'mensaje', 'servicio'];
        const incompleto = camposObligatorios.some(campo => formData[campo].trim() === '');

        if (incompleto) {
            alert('Por favor completá todos los campos antes de enviar.');
            return;
        }

        // Acá podrías enviar los datos con fetch/axios si quisieras
        console.log('Datos enviados:', formData);

        setMensajeEnviado(true);
        setTimeout(() => setMensajeEnviado(false), 5000);

        // Resetear formulario
        setFormData({
            nombre: '',
            pais: '',
            empresa: '',
            telefono: '',
            email: '',
            servicio: '',
            mensaje: ''
        });
    };

    return (
        <section className="formulario-contacto">
            <h1>¿Listo para trabajar juntos?</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-left">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="pais"
                        placeholder="País/región"
                        value={formData.pais}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Nombre de la empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Número de teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className='buto'>Enviar</button>

                    {mensajeEnviado && (
                        <div className="mensaje-enviado">
                            <strong>Mensaje enviado</strong>
                            Recibimos tu solicitud de manera exitosa!
                        </div>
                    )}
                </div>

                <div className="form-right">
                    <p>¿Qué servicio te interesa?</p>
                    {['sitio-web', 'diseño', 'consultoria'].map((valor) => (
                        <label className="radio-option" key={valor}>
                            <input
                                type="radio"
                                name="servicio"
                                value={valor}
                                checked={formData.servicio === valor}
                                onChange={handleChange}
                            />
                            <span className="radio-dot"></span>
                            {valor === 'sitio-web' ? 'Sitio Web' :
                                valor === 'diseño' ? 'Diseño' :
                                    'Consultoría'}
                        </label>
                    ))}
                    <textarea
                        name="mensaje"
                        placeholder="Mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    );
};

export default FormularioContacto;