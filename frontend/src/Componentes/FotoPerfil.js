import React, { useState } from "react";
//import imagenPerfil from './fp.jpg';
import { CameraFilled } from "@ant-design/icons";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { Upload, Button } from "antd";
import "./Style/foto.css";
const FotoPerfil = (props) => {
  const [b64File, setFile] = useState(props.foto);

  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }

  return (
    <div className="fotoPerfil">
      <Avatar size={150} src={b64File} />
      <br></br>
      <Upload
        beforeUpload={(file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            props.recojoData(e.target.result);
            setFile(e.target.result);
          };
          reader.readAsDataURL(file);
          return false;
        }}
      >
        <Button 
          style={{ minWidth: 50, background: "#636262" }}
          icon={<CameraFilled />}
        >
          Cambiar
        </Button>
      </Upload>
    </div>
  );
};
export default FotoPerfil;
