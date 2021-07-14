import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { CameraFilled } from "@ant-design/icons";
import { Upload, Button } from "antd";

const fotoPerfil = (props) => {
  return (
    <div className="fotoPerfil">
      <Avatar size={150} src={props.foto} />
      <br></br>
      <Upload>
        <Button icon={<CameraFilled />}>Cambiar</Button>
      </Upload>
      ,
    </div>
  );
};
export default fotoPerfil;
