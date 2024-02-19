import React from "react";
import {Image} from "@nextui-org/react";

const Avatares = ({ radio, imagen, height, width }) => {
  return (
    <div>
      <Image 
        radius={radio} 
        src={imagen}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Avatares;