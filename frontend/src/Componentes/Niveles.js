import React from "react";
import Titulo from "./Titulo";
import "./Style/Niveles.css";
import Footer from "./Footer";
import {Link,  useParams} from "react-router-dom";

function Niveles() {
  let match = useParams();

  return (

    <div className="App">
      <Titulo />

      <div className="niveles">
        <Link to={`/${match.name_category}/Basico`}> 
          <div className="basico">BASICO</div>
        </Link>
        <Link to={`/${match.name_category}/Intermedio`}>
          <div className="intermedio">INTERMEDIO</div>
        </Link>
        <Link to={`/${match.name_category}/Avanzado`}>
          <div className="avanzado">AVANZADO</div>
        </Link>
        <Link to={`/${match.name_category}/Personal`}>
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
