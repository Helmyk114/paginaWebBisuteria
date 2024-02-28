import React from "react";
import { Button } from "@nextui-org/react";

export default function BotonEnviar({ fontSize, text, ...props }) {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="flex flex-col gap-2 items-center">
      <Button
        radius="full"
        {...props}
        style={{
          width: isSmallScreen ? "130px" : "350px",
          height: isSmallScreen ? "35px" : "40px",
          marginBottom: isSmallScreen ? "35px" : "95px",
          marginLeft: isSmallScreen ? "20px" : "200px",
          backgroundColor: "#6977E4",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Roboto, sans-serif",
          fontSize: fontSize || "21px",
          borderRadius:"10px",
        }}
      >
        {text}
      </Button>
    </div>
  );
}
