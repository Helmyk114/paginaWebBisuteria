import React from "react";
import { Link } from "react-router-dom";

const AgregarListaTrabajo = ({ props }) => {
  return (
    <Link to={"/pedidos/administracion"}>
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="#6977E4"
          {...props}
        >
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m1 9h3v2h-3v3h-2v-3H8v-2h3V9h2z" />
        </svg>
        <h1>AGREGAR LISTA DE TRABAJO</h1>
      </div>
    </Link>
  );
};

export default AgregarListaTrabajo;
