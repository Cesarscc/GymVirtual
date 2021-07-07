import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateIcon from "@material-ui/icons/Update";

import "./Style/Basico.css";
import Titulo from "./Titulo";
import Footer from "./Footer";
import Subcategoria from "./Subcategoria";

function Basico() {
  let userobj = localStorage.getItem("usuario");
  if (!userobj) {
    window.location.href = "/login";
  }
  let user = JSON.parse(userobj);

  const [ejercicios, setEjercicios] = useState(null);

  const [random, setRandom] = useState(1);

  let match = useParams();

  useEffect(() => {
    if (ejercicios === null || random === 1) {
      return fetch(
        `http://localhost:4000/api/exercise/exercises/${match.nameCategory}/${match.level}`,
        {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            //console.log(data.data);
            setEjercicios(data.data);
            setRandom(0);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [random]);

  const getRandomExercises = () => {
    setRandom(1);
  };

  const postRoutine = () => {
    const exerciseIds = ejercicios.map((ejercicio) => ejercicio._id);

    console.log(user);

    return fetch(`http://localhost:4000/api/routine/createroutine`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        exerciseIds: exerciseIds,
        userId: user._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          window.location.href = `/${data._id}=0`;
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Titulo />

      <button className="update" onClick={getRandomExercises}>
        <UpdateIcon fontSize="large" />
      </button>

      <div className="nota">
        <h1 className="pregunta">¿LISTO PARA EMPEZAR?</h1>
      </div>

      <div>
        {ejercicios &&
          ejercicios.map((ejercicio, i = 1) => (
            <div className="container" key={ejercicio._id}>
              <Subcategoria
                title={ejercicio.tittle}
                image={ejercicio.exercisePhoto}
                id={(i = i + 1)}
              />
            </div>
          ))}
      </div>

      <div>
        <button className="boton" onClick={postRoutine}>
          INICIAR
        </button>
      </div>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Basico;
