import React from "react";
import {Image} from "@nextui-org/react";

const Avatares = ({ radio, tamaño, src, className, height, width, maxWidth }) => {
  return (
    <div>
      <Image 
        radius={radio} 
        src={src}
        size={tamaño}
        className={className}
        height={height}
        width={width}
        style={{maxWidth:maxWidth || "50px"}}
      />
    </div>
  );
};

export default Avatares;