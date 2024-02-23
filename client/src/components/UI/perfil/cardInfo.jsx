import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader} from "@nextui-org/react";
import '../perfil/cardInfo.css'

export default function CardPerfil({children,alignItems, gap, display }) {

  return (
    <Card className="card">
      <CardHeader>
      <div className="" style={{ display:display|| "flex", alignItems:alignItems || "start", gap:gap|| "13px"}}>
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
export function Texto1Card ({texto, fontSize,  fontWeight}){
  return(
    
    <h4 className="text-base  leading-none text-default-600" style={{fontSize:fontSize, fontWeight:fontWeight || "600"}}>{texto} </h4>
  )
}

export function Texto2Card ({texto2}){
  return(
    <h5 className="text-small tracking-tight text-default-400">{texto2}</h5>
  )
}
