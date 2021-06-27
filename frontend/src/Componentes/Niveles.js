import React from "react";
import Titulo from "./Titulo";
import "./Style/Niveles.css";
import Footer from "./Footer";
import HomeIcon from "@material-ui/icons/Home";

function Niveles() {
  return (
    <div className="App">
      <Titulo />

      <div className="niveles">
        <div className="basico">BASICO</div>
        <div className="intermedio">INTERMEDIO</div>
        <div className="avanzado">AVANZADO</div>
        <div className="personalizado">Personal</div>
      </div>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Niveles;
