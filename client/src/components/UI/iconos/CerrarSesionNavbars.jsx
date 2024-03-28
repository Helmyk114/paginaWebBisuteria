import React from "react";
import { Link } from "react-router-dom";

const CerrarSesionNav = ({ eliminarCookie }) => {

  return (
    <Link to={"/"} onClick={eliminarCookie}>
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="#6977E4"
        >
          <path d="M20.592 12.5H9.154v-1h11.438l-2.088-2.088l.708-.72L22.519 12l-3.307 3.308l-.708-.72zm-5.188-3.77V5H5v14h10.404v-3.73h1V20H4V4h12.404v4.73z" />
        </svg>
        <h1 style={{ fontFamily: "roboto" }}>CERRAR SESION</h1>
      </div>
    </Link>
  );
};

export default CerrarSesionNav;