import React, { useState, useEffect } from "react";
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
  const [id, i, len] = match.idRoutine.split("=");
  console.log(id, i, len);

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
  }, [id]);

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
  }, [ex, i]);

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
    changeData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    final();
  };

  const changeData = () => {
    if (i < len){
      let j = parseInt(i) + 1;
      window.location.href = `/rutina/${id}=${j}=${len}`;
    }
    else{
      final();
    }
  }

const final = () => {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: '¡Lo lograste!',
    content: `Monedas obtenidas: ${item.coins}`,
    onOk() {
      window.location.href = `/dashboard`;
    }
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
    window.location.href = `/dashboard`;
  }, secondsToGo * 1000);
}

  return (
    <div>
        <div className="GymVirtual">
          <h1>GYM VIRTUAL</h1>
        </div>

      <h1 className="primero">{item && item.tittle}</h1>

      <div className="box_random">
        <img src={item && item.exercisePhoto} alt='Deporte'/>
      </div>

      <div>
        <div className="cronometro">
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
          <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
          <span> {("0" + ((time/10)%100)).slice(-2)} </span>
        </div>
      </div>

      <div>
        {!timerOn && (
          <button className="boto" onClick={() => setTimeOn(true)} >Iniciar</button>
        )}
        {timerOn && (
          <button className="boto" onClick={() => setTimeOn(false)} >Reiniciar</button>
        )}
      </div>

      <div className="premio">
        <h3 className="premio">Recompensa:</h3>
        {item && item.coins}
      </div>

      <div>
        <button className="boton" onClick={changeData}>Siguiente</button>
      </div>

      <div>
        <button className="cancelar">Cancelar <CancelIcon /> </button>
      </div>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal" okText="Sí" cancelText="No">
          <h2>¿Podemos continuar?</h2>
      </Modal>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
};

export default Primer_Basico;
