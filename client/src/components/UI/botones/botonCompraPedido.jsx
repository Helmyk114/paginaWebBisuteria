// BotonComprar.js
import React from "react";
import { Button } from "@nextui-org/react";
import "./contenedor2.css"; // Ajusta la ruta según la ubicación real del archivo CSS

export default function BotonComprar2({ fontSize, text, type, children, ...props }) {
  return (
    <div className="container2">
      <Button
        radius="full"
        type="submit"
        {...props}
        className="button2"
      >
        {text}
      </Button>
      {children}
    </div>
  );
}
