import React, { useState } from "react";
import "./Accordion.css";

const faqs = [
    {
        question: "¿Cómo puede una estrategia de contenidos mejorar la presencia de mi marca?",
        answer: "Una estrategia de contenidos mejora la visibilidad, coherencia y conexión con tu audiencia.",
    },
    {
        question: "¿Qué tipos de contenido puede crear EQUA para mejorar mi marca?",
        answer: "Desde videos, diseño gráfico, redes sociales, hasta campañas personalizadas.",
    },
    {
        question: "¿Me pueden ayudar si solo tengo una idea y no un concepto desarrollado?",
        answer: "¡Claro! Trabajamos desde la idea inicial hasta el desarrollo completo del concepto.",
    },
    {
        question: "¿Cómo funciona el proceso de trabajo?",
        answer: "Tenemos una metodología ágil y colaborativa, en la que te incluimos en cada etapa.",
    },
    {
        question: "¿Cómo manejan los derechos de autor sobre los diseños creados?",
        answer: "Los derechos de autor se definen en el contrato inicial, y puedes conservarlos si así se pacta.",
    },
    {
        question: "¿Pueden actualizar o mejorar un diseño existente?",
        answer: "Sí! Podemos actualizar, optimizar y rediseñar cualquier material preexistente que tengas.",
    },
];

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="container py-5 bg-black text-white mt-5 mb-5">
            <h1 className="h1-ac">Preguntas frecuentes</h1>
            <p className="p">Por si tenías alguna duda sobre cómo trabajamos :)</p>

            <div className="accordion-custom">
                {faqs.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div key={index} className="mb-3">
                            <button
                                className={`btn w-100 d-flex justify-content-between align-items-center py-3 px-4 rounded ${isActive ? "bg-fluo text-black" : "btn-outline-light text-white"
                                    }`}
                                onClick={() => toggle(index)}
                            >
                                <span className="pregunta">{item.question}</span>
                                <img
                                    src={isActive ? "/images/icono2.png" : "/images/icono.png"}
                                    alt="icono estrella"
                                    className={`icon-img ${isActive ? "rotate" : ""}`}
                                />


                            </button>

                            {isActive && (
                                <div className="p-3 bg-fluo text-black rounded-bottom">
                                    <div className="respuesta">{item.answer}</div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
