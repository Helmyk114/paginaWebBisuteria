import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader} from "@nextui-org/react";
import '../perfil/cardInfo.css'

export default function CardPerfil({children,alignItems, justifyContent,  display, gap }) {

  return (
    <Card className="cardprincipal">
      <CardHeader>
      <div className="cardGap" style={{ display:display|| "flex", alignItems:alignItems || "start", justifyContent:justifyContent, gap:gap||"13px"}}>
        {children}
      </div> 
      </CardHeader>
    </Card>
  );
}
export function IconoCard ({icon, width, height, color}){
  return(
    <div>
          <Icon icon={icon} className="iconoCard"style={{ color: color, width:width, height:height}} />
     </div>
 )
}
export function Texto1Card ({texto, fontSize,  fontWeight}){
  return(
    
    <h4 className="text-base  leading-none text-default-600" style={{fontSize:fontSize, fontWeight:fontWeight || "600"}}>{texto} </h4>
  )
}

export function Texto2Card ({texto2, fontSize}){
  return(
    <h5 className=" tracking-tight text-default-400" style={{fontSize:fontSize}}>{texto2}</h5>
  )
}
