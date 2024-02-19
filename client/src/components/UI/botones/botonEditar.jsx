import React from "react";
import { Tooltip } from "@nextui-org/react";
import EditIcon from "../iconos/Editar";


const BotonEditar = ({ texto, ruta }) => {
  return (
    <Tooltip content={texto}>
      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
        <EditIcon ruta={ruta} />
      </span>
    </Tooltip>
  );
};

export default BotonEditar;