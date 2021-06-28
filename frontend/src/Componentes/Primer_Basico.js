import React from 'react'
import Titulo from "./Titulo";
import Footer from "./Footer";
import './Style/Primer_basico.css'
import './Style/Basico.css'
import abdominales from "../images/abdominales.jpg";

function Primer_Basico(props) {
    return (
        <div>
            <Titulo />

            <h1 className="primero">1° ABDOMINALES</h1>

            <div className="box_random">
                <img src={abdominales} />
            </div>

            <div>
                <button className="boton">INICIAR</button>
            </div>

            <footer className="foot">
                <Footer />
            </footer>
        </div>
    )
}

export default Primer_Basico;
