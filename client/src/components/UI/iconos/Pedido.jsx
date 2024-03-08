import React from "react";
import { Link } from "react-router-dom";

const PedidoIcono = ({ ruta, className }) => {
  return (
    <Link to={ruta}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          fill="currentColor"
          className={className}
          viewBox="0 0 16 16"
          color="#6977E4"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default PedidoIcono;