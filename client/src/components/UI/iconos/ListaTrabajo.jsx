import React from "react";
import { Link } from "react-router-dom";

const listaTrabajoIcono = ({ ruta }) => {
  return (
    <Link to={ruta}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          fill="currentColor"
          className="bi bi-file-earmark-text-fill"
          viewBox="0 0 16 16"
          color="#6977E4"
        >
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
        </svg>
      </div>
    </Link>
  )
};

export default listaTrabajoIcono;