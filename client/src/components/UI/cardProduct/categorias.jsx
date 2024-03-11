import React from "react";
import { Card, Image, Button } from "@nextui-org/react";
import "./categorias.css";
import img1 from "../../../../src/img2/anillo.png";
import img2 from "../../../../src/img2/collar.png";
import img3 from "../../../../src/img2/joyeria.png";
import img4 from "../../../../src/img2/perla (1).png";
import img5 from "../../../../src/img2/pulsera (2).png";

const Categorias = () => {
  const categories = [
    { name: "Cadenas", img: img3 },
    { name: "Anillos", img: img1 },
    { name: "Collares", img: img2 },
    { name: "Pulseras", img: img5 },
    { name: "Aretes", img: img4 },
  ];

  return (
    <div className="grid-container">
      {categories.map((category, index) => (
        <Card key={index} className="card3" style={{ backgroundColor: "#454F96" }}>
          <Image
            alt={category.name}
            className="img"
            objectFit="cover"
            src={category.img}
          />
          <Button className="card-footer boton-personalizado">
            <div className="category-name">{category.name}</div>
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Categorias;