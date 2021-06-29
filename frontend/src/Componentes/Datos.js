import React, { Fragment, useState } from "react";
import { Typography } from "antd";
import "antd/dist/antd.css";

const { Paragraph } = Typography;

const Datos = (props) => {
  const [editar, setEditar] = useState(<Fragment>{props.info}</Fragment>);
  const onChange = (editVal) => {
    console.log(props);
    props.recojoData(editVal);
    setEditar(<Fragment>{editVal}</Fragment>);
  };
  return (
    <div className="datos">
      <Paragraph editable={{ onChange: onChange }} className="hola">
        {editar}
      </Paragraph>
    </div>
  );
};
export default Datos;
