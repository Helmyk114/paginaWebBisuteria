import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader } from "@nextui-org/react";
import '../perfil/cardInfo.css'

export default function CardPerfil({ children, className1, className2, gap }) {

  return (
    <Card className={className1} >
      <CardHeader>
        <div className={className2} style={{gap:gap}}>
          {children}
        </div>
      </CardHeader>
    </Card>
  );
};

export function IconoCard({ icon, width, height, color }) {
  return (
    <div>
      <Icon icon={icon} className="iconoCard" style={{ color: color, width: width, height: height }} />
    </div>
  );
};

export function Texto1Card({ className, texto, fontSize, fontWeight, color, textAlign }) {
  return (

    <h4 className={className} style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize, fontWeight: fontWeight || "600", color: color || "#000", textAlign: textAlign }}>
      {texto} 
    </h4>
  );
};

export function Texto2Card({ className, texto2, fontSize, fontWeight, color }) {
  return (
    <h5 className={className} style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "15px", fontWeight: fontWeight || "400", color: color || "#000"}}>
      {texto2}
    </h5>
  );
};
