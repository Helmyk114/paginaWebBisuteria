import React from "react";
import { Tooltip } from "@nextui-org/react";
import DeleteIcon from "../iconos/Eliminar";

const BotonEliminar = ({ texto, funcEliminar}) => {
  return (
    <Tooltip content={texto}>
      <span className="text-lg text-danger cursor-pointer active:opacity-50">
        <DeleteIcon eliminar={funcEliminar} />
      </span>
    </Tooltip>
  );
};

export default BotonEliminar;