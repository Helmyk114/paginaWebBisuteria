import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CardPerfil({ icon, texto, texto2 }) {

  return (
    <Card style={{ width: "90%", margin: "0 auto" }}>
      <CardHeader className="">
        <div className="flex gap-3" style={{ alignItems: "start" }}>
          <Icon icon={icon} width="32" height="32" style={{ color: " #6977e4" }} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{texto}</h4>
            <h5 className="text-small tracking-tight text-default-400">{texto2}</h5>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
