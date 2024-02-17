import React from "react";
import {Avatar} from "@nextui-org/react";

const Avatares = ({ radio, tamaño }) => {
  return (
    <div className="flex items-center">
      <Avatar 
        radius={radio} 
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        size={tamaño}
      />
    </div>
  );
}

export default Avatares;