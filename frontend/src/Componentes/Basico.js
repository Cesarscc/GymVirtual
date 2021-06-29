import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import UpdateIcon from '@material-ui/icons/Update';

import './Style/Basico.css'
import Titulo from "./Titulo";
import Footer from "./Footer";
import Subcategoria from "./Subcategoria"


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
      if(ejercicios === null || random === 1){
        return fetch(`http://localhost:4000/api/exercise/exercises/${match.nameCategory}/${match.level}`, {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
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
  },[random]);

  const getRandomExercises = () => {
      console.log('ayuda :V')
      setRandom(1);
  }

  const postRoutine = () => {

    const a = ejercicios.map((ejercicio) => (ejercicio._id))
    console.log(a)

  //   return fetch(`http://localhost:4000/api/routine/createroutine`, {
  //   crossDomain: true,
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     "exerciseIds": 1,

  //   }),
  // })
  //   .then((response) => {
  //     console.log(response);
  //     window.location.href = "/login";
  //     return response.json();
  //   })
  //   .then(console.log)
  //   .catch((err) => console.log(err));
  }


  return (
      <div>
          <Titulo />

          <button className="update" onClick={getRandomExercises}><UpdateIcon fontSize= "large" /></button>

          <div className="nota">
              <h1 className="pregunta">¿LISTO PARA EMPEZAR?</h1>
          </div>

          <div>
              {ejercicios && ejercicios.map((ejercicio, i=1) => (
                  <div className="container" key={ejercicio._id}>
                      <Subcategoria title={ejercicio.tittle} image={ejercicio.exercisePhoto} id={i = i+1}/>
                  </div>
              ))}
          </div>

          <div>
              <button className="boton" onClick={postRoutine}>INICIAR</button>
          </div>

          <footer className="foot">
              <Footer />
          </footer>
      </div>
  )
}

export default Basico;
