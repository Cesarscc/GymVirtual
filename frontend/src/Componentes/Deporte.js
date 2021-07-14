import React from "react";
import {Link} from "react-router-dom";

const Deporte = (props) => {
  console.log(props);
  return (
    <div className="deporte">
      <Link to={`/${props.tittle}/Niveles`}> 
        <div className="conten">
          <h1 className="nombre">{props.tittle}</h1>
        </div>
      </Link>
      <Link to={`/${props.tittle}/Niveles`}> 
        <div className="conten">
          <div className="box">
            <img src={props.image} alt="Deporte"/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Deporte;
