import React from "react";
import {Image} from "@nextui-org/react";

const Avatares = ({ radio, tamaño, src, className, height, width }) => {
  return (
    <div>
      <Image 
        radius={radio} 
        src={src}
        size={tamaño}
        className={className}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Avatares;