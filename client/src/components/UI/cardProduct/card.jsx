import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import './card.css';

export default function CardProduct({ producto, precio, img }) {
  return (
    <div className="card1">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="card2">
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
          <div className="display-flex flex-col-2">
            <div className="relative flex gap-2">
              <b style={{ color: "#fff" }}>{producto}</b>
              <div>
                <Icon icon={"gridicons:user-circle"} width="32" height="32" />
              </div>
            </div>
            <div>
              <p className="text-default-500 " style={{ color: "#fff", marginRight: '39px' }}>
                Precio: {precio} $
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}