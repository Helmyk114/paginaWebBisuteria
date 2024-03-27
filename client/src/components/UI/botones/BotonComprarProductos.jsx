import React from "react";
import { Button } from "@nextui-org/react";
import "./contenedor.css";

export default function BotonComprar({ fontSize, text, onClick, type, ...props }) {

  return (
    <div className="container">
      <Button
        radius="full"
        type={type}
        {...props}
        onClick={onClick}
        className="button"
      >
        {text}
      </Button>
    </div>
  );
};