import React from "react";
import {Card, CardHeader, Image} from "@nextui-org/react";



export default function CardPerfil({icono, texto}) {
 

  return (
    <Card className="w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Image
          height={40}
          radius="sm"
          width={40}
          className="rounded-full w-10 h-11 bg-none"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{texto}</h4>
           
          </div>
        </div>
      
      </CardHeader>
      
      
    </Card>
  );
}
