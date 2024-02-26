import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Icon } from "@iconify/react"
import './card.css';

export default function CardProduct({ producto, precio, img, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    onSelect({ producto, precio, img, isSelected: !isSelected });
  };

  return (
    <div className={`card1 ${isSelected ? 'selected' : ''}`}>
      <Card shadow="sm" isPressable onPress={handleCardClick} className="card2">
        <CardBody className="overflow-visible p-0" style={{ background: "#6977E4" }}>
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={"hola"}
            className="w-full object-cover h-[140px]"
            src={img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between" style={{ background: "#6977E4" }}>
          <div className="flex flex-col items-start">
              <b style={{ color: "#fff" }}>{producto}</b>
              <div className="relative flex">
                <div className="flex flex-col items-start"> 
                  <p className="text-default-500 " style={{ color: "#fff", marginRight: '39px' }}>
                  Precio:
                  </p>
                  <p className="text-default-500 " style={{ color: "#fff", marginRight: '39px' }}>
                  {precio} $
                  </p>
                </div>
                  <Icon icon={"gridicons:user-circle"} width="32" height="32" />
                  
              </div>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
