import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Campana from "../iconos/Notificacion";
import BotonRetroceder from "../iconos/Retroceder";
import Avatares from "../avatar/Avatares";

export default function Navigate({ children, height }) {
  return (
    <Navbar style={{ backgroundColor: "#6977E4", marginBottom: "20px" }} height={height || "80px"}>
      {children}
    </Navbar>
  );
}

const Icono = ({ radio, imagen, height, width, className, espacio } ) => {

  return (
    <NavbarBrand justify={espacio} style={{ marginTop: "5px" }}  >
      <Avatares radio={radio} src={imagen} height={height} width={width} className={className} />
    </NavbarBrand>
  );
};

const Titulo = ({ titulo, espacio }) => {
  return (
    <NavbarContent style={{ marginTop: "10px" }} justify={espacio}>
      <NavbarItem>
        <h1
          className="titulo"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "30px",
            color: "#fff",
          }}
        >
          {titulo}
        </h1>
      </NavbarItem>
    </NavbarContent>
  );
};

const Texto = ({ titulo, nombre, rol }) => {
  return (
    <NavbarContent>
      <NavbarItem>
        <h1
          ClassName="titulo"
          style={{
            marginTop: "25px",
            marginBottom:  "5px",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "40px",
            color: "#fff",
          }}
        >
          {titulo}
        </h1>
        <h2
          ClassName="nombre"
          style={{
            marginTop: "15px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {nombre}
        </h2>

        <h3
          ClassName="rol"
          style={{
            marginTop: "-9px",
            marginBottom: "15px",
            //PONER EL ITALIC
            fontFamily: "Roboto italic, sans-serif",
            fontSize: "12px",
            color: "#fff",
          }}
        >
          {rol}
        </h3>
      </NavbarItem>
    </NavbarContent>
  );
};

const Notificacion = () => {
  return (
    <NavbarContent style={{ marginTop: "10px" }} justify="end">
      <NavbarItem>
        <Campana />
      </NavbarItem>
    </NavbarContent>
  );
};

const Retroceder = () => {
  return (
    <NavbarContent style={{ marginTop: "10px" }} justify="start">
      <NavbarItem>
        <BotonRetroceder />
      </NavbarItem>
    </NavbarContent>
  );
};

export { Titulo, Notificacion, Retroceder, Icono, Texto };
