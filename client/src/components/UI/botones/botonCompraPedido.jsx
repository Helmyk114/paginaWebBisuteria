import React from "react";
import { Button } from "@nextui-org/react";
import "./contenedor2.css";

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
};