import React from 'react'
import './Style/Ranking.css';
import 'antd/dist/antd.css';
import Usuario from './Usuario.js';
import Titulo from './Titulo.js';
import Footer from './Footer.js';
import "./Style/prueba.css";

function Ranking() {
  return (
    <div className="App">

      <Titulo />

      <div className="titulo-ranking">
        RANKING SEMANAL
      </div>
      
      <Usuario num="1" nickname="JESUSM" ganancia="390"/>

      <Usuario num="2" nickname="TVJESUS" ganancia="390"/>

      <footer className="foot">
        <Footer />
      </footer>

    </div>
  )
}

export default Ranking