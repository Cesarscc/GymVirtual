import React from "react";
import Subcategoria from "./Subcategoria";
import abdominales from "../images/abdominales.jpg";
import sentadillas from "../images/sent_salto.jpg";
import React, {useState, useEffect} from 'react'
import Subcategoria from './Subcategoria';
import {useParams} from "react-router-dom";

const ejercicios_random = [
  {
    id: 1,
    nombre: "Abdominales",
    image: abdominales,
  },
  {
    id: 2,
    nombre: "Sentadillas con Salto",
    image: sentadillas,
  },
];
function Ejercicio_sub(props) {

function Ejercicio_sub(props) {
  return (
    <div>
      {ejercicios_random.map((ejercicio) => (
        <div className="container" key={ejercicio.id}>
          <Subcategoria
            title={ejercicio.nombre}
            image={ejercicio.image}
            id={ejercicio.id}
          />
    const [ejercicios, setEjercicios] = useState(null);
    let match = useParams();

    useEffect(() => {
        console.log(match);
        if(ejercicios === null){
          return fetch(`http://localhost:4000/api/exercise/exercises/${match.nameCategory}/${match.level}`, {
            crossDomain: true,
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then((data) => {
              if (!data.error) {
                console.log(data.data);
                setEjercicios(data.data);
              }
            })
            .catch((error) => console.log(error));
        }
      },[ejercicios]);

    return (
        <div>
            {ejercicios && ejercicios.map((ejercicio, i=1) => (
                <div className="container" key={ejercicio._id}>
                    <Subcategoria title={ejercicio.tittle} image={ejercicio.exercisePhoto} id={i = i+1}/>
                </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Ejercicio_sub;
