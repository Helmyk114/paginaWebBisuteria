import React from "react";
import {Avatar} from "@nextui-org/react";

const Avatares = ({ radio, tamaño, src, className }) => {
  return (
    <div className="flex items-center">
      <Avatar 
        radius={radio} 
        src={src}
        size={tamaño}
        className={className}
      />
    </div>
  );
}

export default Avatares;