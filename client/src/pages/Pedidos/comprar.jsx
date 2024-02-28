import React, { useEffect, useState } from "react";
import BotonEnviar from "../../components/UI/botones/botonEnviar";

function Comprar({total}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: windowWidth <= 768 ? "100px" : "160px",
        padding: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Alinea los elementos hacia los extremos
        gap: "30px",
        position: "absolute",
        backgroundColor: "#454F96",
        borderRadius: "100px",
        zIndex: "-1000",
      }}
    >
      <div>
        <BotonEnviar text={"Comprar"} type={"submit"} />
      </div>
      <div style={{marginBottom: windowWidth <= 768 ? "40px" : "100px", marginRight: windowWidth <= 768 ? "30px" : "60px", fontSize: windowWidth <= 768 ? "20px" : "30px", fontFamily: "Roboto, sans-serif", color:"#fff"}}>Total: {total}$</div>
    </div>
  );
}

export default Comprar;

