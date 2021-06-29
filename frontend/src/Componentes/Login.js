import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const onFinish = (values) => {
    console.log(values);
    return fetch(`http://localhost:4000/api/auth/signin`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nickname: values.username,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          localStorage.setItem("usuario", JSON.stringify(data));
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Todo">
      <div className="GymVirtual">
        <h1>GYM VIRTUAL</h1>
      </div>
      <div className="Log">
        <h1 className="login">LOGIN</h1>
      </div>
      <Form className="Llena" {...layout} name="basic" onFinish={onFinish}>
        <div style={{ color: "white", marginLeft: 30 }}>Usuario:</div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div style={{ color: "white", marginLeft: 30 }}>Contraseña:</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            style={{ marginRight: 30, minWidth: 160, background: "#FC683A" }}
          >
            Ingresar
          </Button>
          <Button
            href="/registration"
            type="primary"
            shape="round"
            size="large"
            style={{ minWidth: 160, background: "#0077E4" }}
          >
            Registrarse
          </Button>
        </div>
        <div></div>
      </Form>
    </div>
  );
};

export default Login;
