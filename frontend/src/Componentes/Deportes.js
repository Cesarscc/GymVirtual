import React , { useState, useEffect}from "react";
import Deporte from "./Deporte";
import image1 from "../images/triceps.jpg";
import image2 from "../images/piernas.jpg";
import image3 from "../images/brazos.jpg";


const Deportes = () => {

  const [deportes, setDeportes] = useState([]);

  useEffect(() => {

    return fetch(`http://localhost:5000/api/ejercicio/ejercicios`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data.data);
          // setDeportes(data)
        }
      })
      .catch((error) => console.log(error));

  });

  return (
    <div>
      {deportes && deportes.map((deporte) => (
        <div className="deporteP" key={deporte.id}>
          <Deporte title={deporte.nombre} image={deporte.image} />
        </div>
      ))}
    </div>
  );
};

export default Deportes;
