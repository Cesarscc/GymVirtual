import React , {useState, useEffect} from 'react'
import Titulo from "./Titulo";
import Footer from "./Footer";
import './Style/Primer_basico.css'
import './Style/Basico.css'
import abdominales from "../images/abdominales.jpg";
import {useParams} from 'react-router-dom';

const Primer_Basico = () => {

    let userobj = localStorage.getItem("usuario");
    if (!userobj) {
      window.location.href = "/login";
    }

    let user = JSON.parse(userobj);
    
    const [ex, setEx]=useState(null);
    const [item, setItem]=useState(null);

    let match = useParams();
    const [id, i] = match.idRoutine.split('=');
    console.log(id, i);

    useEffect(() => {

        return fetch(`http://localhost:4000/api/routine/${id}`, {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            setEx(data);
          }
        })
        .catch((error) => console.log(error));

    }, []);

    useEffect(() => {
      if(ex!== null){
        return fetch(`http://localhost:4000/api/exercise/${ex.exerciseIds[i]}`, {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            console.log(data)
            setItem(data);
          }
        })
        .catch((error) => console.log(error));
      }
    }, [ex]);

    return (
        <div>
            <Titulo />

            <h1 className="primero">
              {item && item.tittle}
            </h1>

            <div className="box_random">
                <img src={item && item.exercisePhoto} />
            </div>

            <h3 className="primero">
              Reps: {item && item.reps}
            </h3>
            <h3 className="primero">
              Desc: {item && item.rest}
            </h3>

            <div>
                <button className="boton">INICIAR</button>
            </div>

            <footer className="foot">
                <Footer />
            </footer>
        </div>
    )
}

export default Primer_Basico;
