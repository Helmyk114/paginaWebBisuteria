import React from "react";
import {Button} from "@nextui-org/react";

export default function BotonEnviar({ fontSize ,text, ...props }) {

  return (
    <div className="flex flex-col gap-2 items-center">
      <Button 
        radius="full" 
        className="w-full" 
        {...props}
        style={{ backgroundColor: "#6977E4", color: "#fff", fontWeight: "bold", fontFamily: "Roboto, sans-serif", fontSize: fontSize || "16px"  }}>
        {text}
      </Button>
    </div>
  );
};
