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
    return fetch(`http://localhost:4000/api/auth/signin`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
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
      <div className="Usuario">
        <h2>Usuario:</h2>
      </div>
      <div className="Llena">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <div style={{ color: "white", marginLeft: 30 }}>Usuario:</div>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <div style={{ color: "white", marginLeft: 30 }}>Contraseña:</div>
            <Input.Password />
          </Form.Item>
        </Form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          htmlType="submit"
          type="primary"
          shape="round"
          size="large"
          style={{ marginRight: 30, minWidth: 160, background: "#FC683A" }}
        >
          Ingresar
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{ minWidth: 160, background: "#0077E4" }}
        >
          Registrarse
        </Button>
      </div>
      <div>
        <Form.Item
          {...tailLayout}
          name="remember"
          style={{ margin: 15, marginRight: 80 }}
        >
          <Checkbox>Términos y condiciones</Checkbox>
        </Form.Item>
      </div>
    </div>
  );
};

export default Login;
