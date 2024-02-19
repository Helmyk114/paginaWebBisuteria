import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Spacer } from "@nextui-org/react";

export default function CardProduct({ producto, precio, img }) {
  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyItems: "center",
  };

  const cardContainerStyle = {
    gridColumn: "span 1",
    width: "70%",
  };

  return (
    <div style={cardStyle}>
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} style={cardContainerStyle}>
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
              <Icon icon={"gridicons:user-circle"} width="32" height="32" style={{ color: " #fff" }} />
            </div>
            <div>
              <p className="text-default-500 " style={{ color: "#fff" }}>
                Precio: {precio} $
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}