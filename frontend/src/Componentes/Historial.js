import "./Style/Historial.css";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import Footer from "./Footer";
//import Registro from "./Registro_logros"
import { Modal } from "antd";
import Titulo from "./Titulo";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Historial() {

  let userobj = localStorage.getItem("usuario");
  if (!userobj) {
    window.location.href = "/login";
  }
  let user = JSON.parse(userobj);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allRoutines, setAllRoutines] = useState(null);
  const [routines, setRoutines] = useState(null);

  useEffect(() => {
      return fetch(`http://localhost:4000/api/routine/routines/${user._id}`, {
        crossDomain: true,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            setAllRoutines(data.data);
          }
        })
        .catch((error) => console.log(error));
  }, [setAllRoutines, user]);


  const showModal = (value) => {
    setRoutines(getMatch(value._d));
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setRoutines(null);
  };

  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const getMatch = (currentDate) => {
    const routines = [];
    for (let i = 0; i < allRoutines.length; i++) {
      
      if (convert(currentDate) === convert(allRoutines[i].createdAt)){
        console.log("match");
        routines.push(allRoutines[i]);
      }
    }
    return routines;
  }

  return (
    <div className="App">
      <Titulo />
      <div className="titulo2">HISTORIAL</div>
      <div className="site-calendar-demo-card">
        <Calendar
          fullscreen={false}
          onSelect={showModal}
          onPanelChange={onPanelChange}
        />
      </div>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal"
      >
        <div className="logros">
        {routines.length ? 0 : 
          <h3>No tuviste rutinas este día.</h3>
        }
        {routines && routines.map( routine => (
          routine.exercises.map( exercise => (
            <div className="exer" key= {exercise._id}>
              <h2>{exercise.tittle}</h2>
              <h3>{exercise.time} s</h3>
            </div>
          ))
      ))}

        </div>
      </Modal>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Historial;
