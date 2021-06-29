import React from "react";
import "./Style/Dashboard.css";
import Deportes from "./Deportes";
import Footer from "./Footer";

function Dashboard() {
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }

  return (
    <div className="App">
      <div className="titulo">
        <h1>GYM VIRTUAL</h1>
      </div>

      <div>
        <h1 className="mensaje">¡Hora de Entrenar!</h1>
      </div>

      <Deportes />

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
