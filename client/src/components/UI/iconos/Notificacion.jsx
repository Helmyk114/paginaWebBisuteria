import React from "react";

function Campana() {
    return (
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
          color="#6977E4"
        >
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <h1 style={{fontFamily: "roboto"}}>NOTIFICACIONES</h1>
      </div>
    );
  };

  export default Campana;