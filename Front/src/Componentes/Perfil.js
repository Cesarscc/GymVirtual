import React from "react";
import "./Style/Perfil.css";
//  import imagen from './componentes/imagen2.png';
import FotoPerfil from "./FotoPerfil";
import Datos from "./Datos";
import { Button } from "antd";
import "antd/dist/antd.css";

function Perfil() {
  return (
    <div className="App">
      <div className="titulo">
        <h1>GYM VIRTUAL</h1>
      </div>

      <FotoPerfil foto="https://static.vecteezy.com/system/resources/thumbnails/000/068/776/small/monkey-d-vector.jpg" />
      <br />
      <h2>
        <Datos info="Jesús Moreno" />
      </h2>
      <div className="datos2">
        E-mail:
        <Datos info="jesusmor@gmail.com" />
        Edad:
        <Datos info="22" />
        Contraseña:
        <Datos info="********" />
      </div>

      <Button type="primary" size="large" className="cerrar">
        CERRAR SESIÓN
      </Button>

      <div className="footer"></div>
    </div>
  );
}
export default Perfil;
