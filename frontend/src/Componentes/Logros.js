import React from 'react'
import Titulo from './Titulo.js';
import Footer from './Footer';
import './Style/Logros.css';
import moneda from '../images/moneda.png';
import diasRacha from '../images/diasRacha.png';
import trofeo from '../images/trofeo.png';

function Logros() {
    return (
        <div>
            <Titulo />

            <div className="titulo-logros">
                MIS LOGROS
            </div>

            <div className="racha">
                <img src={diasRacha} alt=""/>
                <div className="días">3</div>
                <div className="descripción">DÍAS EN RACHA</div>
            </div>

            <div className="coins-logros">
                <img src={moneda} alt=""/>  
                <div className="días">190</div>
                <div className="descripción">COINS</div>
            </div>

            <div class="titulo-logros">
                MIS TROFEOS
            </div>

            <img className="trofeo" src={trofeo} alt="" />
            <img className="trofeo" src={trofeo} alt="" />
            <img className="trofeo" src={trofeo} alt="" />
            <img className="trofeo" src={trofeo} alt="" />
            <img className="trofeo" src={trofeo} alt="" />
            <img className="trofeo" src={trofeo} alt="" />

            <footer className="foot">
                 <Footer />
            </footer>
        </div>
    )
}

export default Logros
