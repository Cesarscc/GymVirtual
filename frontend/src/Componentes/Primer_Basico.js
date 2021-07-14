import React, {useRef, useState, useEffect } from "react";
import Titulo from "./Titulo";
import Footer from "./Footer";
import "./Style/Primer_basico.css";
import "./Style/Basico.css";
import { useParams } from "react-router-dom";

import { Modal } from "antd";
import CancelIcon from '@material-ui/icons/Cancel';

const Primer_Basico = () => {
  let userobj = localStorage.getItem("usuario");
  if (!userobj) {
    window.location.href = "/login";
  }

  const [ex, setEx] = useState(null);
  const [item, setItem] = useState(null);

  let match = useParams();
  const [id, i] = match.idRoutine.split("=");
  console.log(id, i);

  useEffect(() => {
    return fetch(`http://localhost:4000/api/routine/${id}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setEx(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (ex !== null) {
      return fetch(`http://localhost:4000/api/exercise/${ex.exerciseIds[i]}`, {
        crossDomain: true,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            console.log(data);
            setItem(data);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [ex]);

  const [time, setTime] = useState(3000)  //el numero representa 300 segundos = 5 min
  const [timerOn, setTimeOn] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 10)
      }, 10)
    } else {
      setTime(3000);
      clearInterval(interval);
    }
  

    if (time === 0) { // segundos = cero
      reset();
      vent_emergente();
      clearInterval(interval);
    }

    return ()=>clearInterval(interval)

  }, [time,timerOn])

  function vent_emergente() {
    setIsModalVisible(true);
  }

  function reset() {
    setTime(0);// pisa el estado 'segundos' con cero
    setTimeOn(false); // pisa el estado 'activo' con false
    setTimeOn(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <Titulo />

      <h1 className="primero">{item && item.tittle}</h1>

      <div className="box_random">
        <img src={item && item.exercisePhoto} />
      </div>

      <h3 className="primero">Reps: {item && item.reps}</h3>
      <h3 className="primero">Desc: {item && item.rest}</h3>

      <div>
        <div className="cronometro">
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
          <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
          <span> {("0" + ((time/10)%100)).slice(-2)} </span>
        </div>
      </div>

      <div>
        {!timerOn && (
          <button className="boto" onClick={() => setTimeOn(true)} >INICIAR</button>
        )}
        {timerOn && (
          <button className="boto" onClick={() => setTimeOn(false)} >REINICIAR</button>
        )}
      </div>

      <div className="premio">
        <h3 className="premio">Recompensa</h3>
        
      </div>

      <div>
        <button className="boton">SIGUIENTE</button>
      </div>
      <div>
        <button className="cancelar">Cancelar <CancelIcon /> </button>
      </div>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal">
        <div className="logros">
          <br />
          <h1>60</h1>
          <h3>planchas</h3>
        </div>
      </Modal>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
};


export default Primer_Basico;
