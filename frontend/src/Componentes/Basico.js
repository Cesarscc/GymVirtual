import React from 'react'
import Titulo from "./Titulo";
import Footer from "./Footer";
import Ejercicio_sub from './Ejercicio_sub';
import './Style/Basico.css'
import UpdateIcon from '@material-ui/icons/Update';



function Basico() {
    return (
        <div>
            <Titulo />

            <div className="update">
                <UpdateIcon fontSize= "large" />
            </div>

            <div className="nota">
                <h1 className="pregunta">¿LISTO PARA EMPEZAR?</h1>
            </div>

            <Ejercicio_sub />

            <div>
                <button className="boton">INICIAR</button>
            </div>

            <footer className="foot">
                <Footer />
            </footer>
        </div>
    )
}

export default Basico;
