import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CardPerfil({children,alignItems, gap }) {

  return (
    <Card style={{ width: "90%", margin: "0 auto" }}>
      <CardHeader className="">
      <div className="flex gap-5" style={{ alignItems:alignItems || "start", gap:gap|| "13px"}}>
        {children}
      </div> 
      </CardHeader>
    </Card>
  );
}
export function IconoCard ({icon, width, height, color}){
  return(
    <div>
          <Icon icon={icon} style={{ color: color || "#6977e4", width:width || "45", height:height ||"45" }} />
     </div>
 )
}
export function Texto1Card ({texto, fontSize}){
  return(
    
    <h4 className="text-base font-semibold leading-none text-default-600" style={{fontSize:fontSize}}>{texto} </h4>
  )
}

export function Texto2Card ({texto2}){
  return(
    <h5 className="text-small tracking-tight text-default-400">{texto2}</h5>
  )
}
