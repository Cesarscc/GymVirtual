import React from "react";
import { Form, Input, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 4,
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
        <h1 className="login">INICIAR SESION</h1>
      </div>
      <Form className="Llena" {...layout} name="basic" onFinish={onFinish}>
        <div style={{ color: "white", fontSize:20 }}>Usuario:</div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input style={{ height: 40, fontSize: 18, marginRight: 25}} />
        </Form.Item>

        <div style={{ color: "white", marginLeft: 10, fontSize: 20 }}>Contraseña:</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password style={{  height: 40, fontSize: 18, marginRight: 25 }}/>
        </Form.Item>
        <div>
          <div>
          <Button type="button" class="btn btn-outline-light"
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            style={{  minWidth: 160, background: "#FC683A" }}
          >
            Ingresar
          </Button>
          </div>
          <br/>
          <div>
          <Button type="button" class="btn btn-outline-light"
            href="/registrarse"
            type="primary"
            shape="round"
            size="large"
            style={{ minWidth: 160, background: "#0000" }}
          >
            Registrarse
          </Button>
          </div>
          
          
        </div>
        
      </Form>

      <div>
        <br />
        <button type="button" class="btn btn-outline-light">
          <a href="http://localhost:3000/">HOME</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
