import React from "react";
import Titulo from "./Titulo";
import "./Style/Niveles.css";
import Footer from "./Footer";
import {Link,  useParams} from "react-router-dom";

function Niveles() {
  let match = useParams();
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }

  return (

    <div className="App">
      <Titulo />

      <div className="niveles">
        <Link to={`/${match.nameCategory}/Básico`}> 
          <div className="basico">BASICO</div>
        </Link>
        <Link to={`/${match.nameCategory}/Intermedio`}>
          <div className="intermedio">INTERMEDIO</div>
        </Link>
        <Link to={`/${match.nameCategory}/Avanzado`}>
          <div className="avanzado">AVANZADO</div>
        </Link>
        <Link to={`/${match.nameCategory}/Personal`}>
          <div className="personalizado">Personal</div>
        </Link>

      </div>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Niveles;
