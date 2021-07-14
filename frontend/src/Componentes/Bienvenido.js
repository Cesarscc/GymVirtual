import './Style/Bienvenido.css';
import React from 'react';
import 'antd/dist/antd.css';
import imagen from '../images/fondoBienvenida.png';
import titulo from '../images/titulo.png';
import { AudioFilled } from "@ant-design/icons";

function Bienvenido() {
  return (
    <div className="App">
      <img className="titulo" src={titulo} alt=""/>
      <img className="fondo" src={imagen} alt=""/>

      <div className="welcome">
        BIENVENID@
      </div>
      <p>
        Disfruta de la aplicación GYM VIRTUAL para seguir rutinas de entrenamiento de un nivel básico hasta avanzado. 
        <br/>
        ¡Simplemente todo lo que necesitas!
      </p>

      <div>
        <button className="btn-micro">
          <AudioFilled />
        </button>
      </div>
        

      <div>
        <button className="btn">
          COMENZAR
        </button>
      </div>
      
    </div>
  );
}

export default Bienvenido;
