import React from "react";
import { Link } from "react-router-dom";

const Inicio = ({ ruta }) => {
  return (
    <Link to={ruta}>
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 35 35"
          fill="currentColor"
          color="#6977E4"
        >
          <path
            d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19"
            className="clr-i-solid clr-i-solid-path-1"
          />
          <path
            d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
            className="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>

        <div>
          <h1>INICIO</h1>
        </div>
      </div>
    </Link>
  );
};

export default Inicio;