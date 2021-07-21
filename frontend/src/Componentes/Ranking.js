import React, { useState, useEffect } from "react";
import "./Style/Ranking.css";
import "antd/dist/antd.css";
import Usuario from "./Usuario.js";
import Titulo from "./Titulo.js";
import Footer from "./Footer.js";
import { orderBy } from "lodash";

function Ranking() {
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }
  let i = 0;
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    if (Users === null) {
      return fetch(`http://localhost:4000/api/auth/usuarios`, {
        crossDomain: true,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.error) {
            setUsers(orderBy(json.data, ["coins"], ["desc"]));
          }
        })
        .catch((error) => console.log(error));
    }
  }, [Users]);

  return (
    <div className="App">
      <Titulo />

      <div className="titulo-ranking">RANKING SEMANAL</div>

      {Users &&
        Users.map((user) => (
          <div key={user._id}>
            <Usuario
              num={(i += 1)}
              nickname={user.nickname}
              ganancia={user.coins}
            />
          </div>
        ))}

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Ranking;
