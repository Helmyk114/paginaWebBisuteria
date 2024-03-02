import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader } from "@nextui-org/react";
import '../perfil/cardInfo.css'

export default function CardPerfil({ children, alignItems, justifyContent, display, gap, flexDirection, width, height }) {

  return (
    <Card className="cardprincipal" style={{ width: width, height: height }}>
      <CardHeader>
        <div className="cardGap" style={{ display: display || "flex", alignItems: alignItems || "center", justifyContent: justifyContent, gap: gap || "13px", flexDirection: flexDirection || "row" }}>
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

export function Texto1Card({ texto, fontSize, fontWeight, color, textAlign }) {
  return (

    <h4 style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "16px", fontWeight: fontWeight || "600", color: color || "#000", textAlign: textAlign }}>
      {texto} 
    </h4>
  );
};

export function Texto2Card({ texto2, fontSize, fontWeight, color }) {
  return (
    <h5 style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "14px", fontWeight: fontWeight || "100", color: color || "#000"}}>
      {texto2}
    </h5>
  );
};
