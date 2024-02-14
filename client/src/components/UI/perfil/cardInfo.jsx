import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function CardPerfil({icono, texto}) {
 

  return (
    <Card className="w-[30px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar size="lg" 
          src={icono}/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{texto}</h4>
           
          </div>
        </div>
      
      </CardHeader>
      
      
    </Card>
  );
}
