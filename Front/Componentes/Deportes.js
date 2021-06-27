import React from "react";
import Deporte from "./Deporte";
import image1 from "../images/triceps.jpg";
import image2 from "../images/piernas.jpg";
import image3 from "../images/brazos.jpg";

const deportes = [
  {
    id: 1,
    nombre: "Triceps",
    image: image1,
  },
  {
    id: 2,
    nombre: "Piernas",
    image: image2,
  },
  {
    id: 3,
    nombre: "Brazos",
    image: image3,
  },
];

const Deportes = (props) => {
  return (
    <div>
      {deportes.map((deporte) => (
        <div className="deporteP" key={deporte.id}>
          <Deporte title={deporte.nombre} image={deporte.image} />
        </div>
      ))}
    </div>
  );
};

export default Deportes;
