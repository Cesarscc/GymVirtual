import React from "react";
import "./Style/Perfil.css";
//  import imagen from './componentes/imagen2.png';
import FotoPerfil from "./FotoPerfil";
import Datos from "./Datos";
import { Button } from "antd";
import "antd/dist/antd.css";
import Footer from "./Footer";
import Titulo from "./Titulo";
const crypto = require("crypto");

function Perfil() {
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }
  let usuario = JSON.parse(usuariobj);
  let salt = "f844b09ff50c";
  function cerrarSesion() {
    localStorage.clear();
    window.location.href = "/login";
  }

  function updateUser(idUsuario, usuario) {
    return fetch(`http://localhost:4000/api/auth/updUsuario/${idUsuario}`, {
      crossDomain: true,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    })
      .then((data) => data.json())
      .then((json) => {
        localStorage.removeItem("usuario");
        localStorage.setItem("usuario", JSON.stringify(json.usuario));
      });
  }

  function onChangeNombre(nombre) {
    usuario.first_name = nombre;
    updateUser(usuario._id, usuario);
  }
  function onChangeApellido(apellido) {
    usuario.last_name = apellido;
    updateUser(usuario._id, usuario);
  }
  function onChangeCorreo(correo) {
    usuario.email = correo;
    updateUser(usuario._id, usuario);
  }
  function onChangeNickname(nickname) {
    usuario.nickname = nickname;
    updateUser(usuario._id, usuario);
  }
  function onChangePassword(password) {
    usuario.password = password;
    usuario.password = crypto
      .pbkdf2Sync(usuario.password, salt, 1000, 64, `sha512`)
      .toString(`hex`);
    updateUser(usuario._id, usuario);
  }
  function onChangePhoto(base64String) {
    usuario.photo = base64String;
    updateUser(usuario._id, usuario);
  }
  let nombre = usuario.first_name;
  let apellido = usuario.last_name;
  let correo = usuario.email;
  let nickname = usuario.nickname;
  let passw = "******";
  let photo = usuario.photo;

  return (
    <div className="App">
      <Titulo />

      <FotoPerfil foto={photo} recojoData={onChangePhoto} />
      <br />
      <h2>
        <Datos recojoData={onChangeNombre} info={nombre} />
      </h2>
      <h2>
        <Datos recojoData={onChangeApellido} info={apellido} />
      </h2>
      <div className="datos2">
        E-mail:
        <Datos recojoData={onChangeCorreo} info={correo} />
        Nickname:
        <Datos recojoData={onChangeNickname} info={nickname} />
        Contraseña:
        <Datos recojoData={onChangePassword} info={passw} />
      </div>

      <Button
        onClick={cerrarSesion}
        type="primary"
        size="large"
        className="cerrar"
      >
        CERRAR SESIÓN
      </Button>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}
export default Perfil;
