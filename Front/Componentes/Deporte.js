import React from "react";
import { AudioFilled } from "@ant-design/icons";

const Deporte = (props) => {
  console.log(props);
  return (
    <div className="deporte">
      <div className="conten">
        <h1 className="nombre">{props.title}</h1>
        <a href="https://www.youtube.com/">
          <AudioFilled />
        </a>
      </div>
      <div className="conten">
        <div className="box">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default Deporte;
