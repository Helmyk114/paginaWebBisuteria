import React from "react";
import "./contenedor2.css"; // Ajusta la ruta según la ubicación real del archivo CSS

const Texto3 = ({ precio }) => {
  return (
     <div>
        <label className="label">
           Total: <p>{precio}$</p>
        </label>
     </div>
  );
};

export default Texto3;
