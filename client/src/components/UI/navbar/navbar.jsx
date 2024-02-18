import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Campana from "../iconos/Notificacion";
import BotonRetroceder from "../iconos/Retroceder";

export default function Navigate({ children }) {
  return (
    <Navbar style={{ backgroundColor: "#6977E4" }} height="80px">
      {children}
    </Navbar>
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
            color: "#fff"
          }}
        >
          {titulo}
        </h1>
      </NavbarItem>
    </NavbarContent>
  );
};

const Notificacion = () => {
  return (
    <NavbarContent style={{ marginTop: "10px" }} justify="end">
      <NavbarItem>
        <Campana/>
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


export {
  Titulo,
  Notificacion,
  Retroceder
};