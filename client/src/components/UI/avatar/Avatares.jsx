import React from "react";
import {Image} from "@nextui-org/react";

const Avatares = ({ radio, tamaño, src, className }) => {
  return (
    <div>
      <Image 
        radius={radio} 
        src={src}
        size={tamaño}
        className={className}
      />
    </div>
  );
};

export default Avatares;