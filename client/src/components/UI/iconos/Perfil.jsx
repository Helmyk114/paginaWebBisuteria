import React from "react";
import { Link } from "react-router-dom";

const PerfilIcono = ({ ruta }) => {
  return (
    <Link to={ruta}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
          color="#6977E4"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </div>
    </Link>
  );
};

export default PerfilIcono;