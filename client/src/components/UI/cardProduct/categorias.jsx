import React from "react";
import { Card, Image, Button } from "@nextui-org/react";
import "./categorias.css";
import img1 from "../../../../src/img2/anillo.png";
import img2 from "../../../../src/img2/collar.png";
import img3 from "../../../../src/img2/joyeria.png";
import img4 from "../../../../src/img2/perla (1).png";
import img5 from "../../../../src/img2/pulsera (2).png";

const Categorias = ({ onCategorySelect }) => {
  const handleClick = (categoryId) => {
    onCategorySelect(categoryId);
  };

  return (
    <div className="grid-container">
         <Button className="card3" style={{ backgroundColor: "#454F96" }} onClick={() => handleClick(0)}>
          <Image
            className="img"
            objectfit="cover"
            name="hola"
            src={img3}
          />
          <Card className="card-footer boton-personalizado">
            <div className="category-name">Todo</div>
          </Card>
        </Button>
        <Button className="card3" style={{ backgroundColor: "#454F96" }} onClick={() => handleClick(1)}>
          <Image
            className="img"
            objectfit="cover"
            src={img2}
          />
          <Card className="card-footer boton-personalizado">
            <div className="category-name">Pulseras</div>
          </Card>
        </Button>
        <Button className="card3" style={{ backgroundColor: "#454F96" }} onClick={() => handleClick(2)}>
          <Image
            className="img"
            objectfit="cover"
            src={img4}
          />
          <Card className="card-footer boton-personalizado">
            <div className="category-name">Chokers</div>
          </Card>
        </Button>
        <Button className="card3" style={{ backgroundColor: "#454F96" }} onClick={() => handleClick(3)}>
          <Image
            className="img"
            objectfit="cover"
            src={img1}
          />
          <Card className="card-footer boton-personalizado">
            <div className="category-name">Anillos</div>
          </Card>
        </Button>
        <Button className="card3" style={{ backgroundColor: "#454F96" }} onClick={() => handleClick(4)}>
          <Image
            className="img"
            objectfit="cover"
            src={img5}
          />
          <Card className="card-footer boton-personalizado">
            <div className="category-name">Aretas</div>
          </Card>
        </Button>
    </div>
  );
};

export default Categorias;