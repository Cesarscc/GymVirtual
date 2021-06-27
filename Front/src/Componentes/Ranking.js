import React from "react";
import { Button } from "antd";
import Footer from "./Footer";

const Ranking = () => {
  return (
    <div className="Todo">
      <div className="GymVirtual">
        <h1>GYM VIRTUAL</h1>
      </div>
      <div>
        <h2 style={{ color: "white", font: "revert" }}>Ranking Semanal</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{ marginRight: 30, minWidth: 160, background: "#FC683A" }}
        >
          Igresar
        </Button>
      </div>
      <div>
        <footer className="foot">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default Ranking;
