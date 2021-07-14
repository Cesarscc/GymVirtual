import './Style/Ranking.css';
import React from 'react';
import 'antd/dist/antd.css';
import coin from '../images/moneda.png';


function Usuario(props) {
  return (
    <div className="usuario">
        <div className="usuario2">
        <div className="nro">
            {props.num}
        </div>
        <div className="np">
            <div className="nombre-ranking">
                {props.nickname}
            </div>
            <div className="ganancia">
                {props.ganancia}
            </div>
            <div className="coin">
                <img src={coin} alt=""/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Usuario;
