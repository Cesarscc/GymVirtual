import React from 'react'
import Subcategoria from './Subcategoria';
import abdominales from "../images/abdominales.jpg";
import sentadillas from "../images/sent_salto.jpg";

const ejercicios_random = [
    {
        id: 1,
        nombre: "Abdominales",
        image: abdominales
    },
    {
        id: 2,
        nombre: "Sentadillas con Salto",
        image: sentadillas
    }
];

function Ejercicio_sub(props) {
    return (
        <div>
            {ejercicios_random.map((ejercicio) => (
                <div className="container" key={ejercicio.id}>
                    <Subcategoria title={ejercicio.nombre} image={ejercicio.image} id={ejercicio.id}/>
                </div>
            ))}
        </div>
    )
}

export default Ejercicio_sub;
