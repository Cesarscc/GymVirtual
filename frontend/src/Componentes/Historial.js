import "./Style/Historial.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import Footer from "./Footer";
//import Registro from "./Registro_logros"
import { Modal } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Historial() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>GYM VIRTUAL</h1>
      </div>
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
}

export default Historial;
