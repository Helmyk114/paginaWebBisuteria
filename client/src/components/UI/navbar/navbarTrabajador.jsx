import React from "react";
import "./navbar.css";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Avatares from "../avatar/Avatares";
import Campana from "../iconos/Notificacion";
import BotonRetroceder from "../iconos/Retroceder";
import CerrarSesionNav from "../iconos/CerrarSesionNavbars";
import PerfilNav from "../iconos/PerfilNavbar";
import Inicio from "../iconos/Inicio";

import { eliminarCookie } from "../../../utils/token";

export default function NavigateTRJ({ children, height }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      style={{ backgroundColor: "#6977E4" }}
      height={height || "140px"}
      onMenuOpenChange={setIsMenuOpen}
    >
      {children}
      <NavbarContent justify="end" style={{ color: "white" }}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <DesplegableTRJ />
      </NavbarContent>
    </Navbar>
  );
}

const Icono = ({ radio, imagen, maxWidth, className }) => {
  return (
    <NavbarBrand className="justify-center" style={{ marginTop: "5px" }}>
      <Avatares
        radio={radio}
        src={imagen}
        maxWidth={maxWidth}
        className={className}
      />
    </NavbarBrand>
  );
};

const Titulo = ({ titulo, espacio }) => {
  return (
    <NavbarContent style={{ marginTop: "0px" }} justify={espacio}>
      <NavbarItem>
        <h1
          className="titulo"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "30px",
            color: "#fff",
            textAlign:"center"
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
          className="titulo"
          style={{
            marginTop: "35px",
            marginBottom: "15px",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "45px",
            color: "#fff",
            textAlign:"center"
          }}
        >
          {titulo}
        </h1>
        <h2
          className="nombre"
          style={{
            margin: "5px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "20px",
            color: "#fff",
           
          }}
        >
          {nombre}
        </h2>
        <h3
          className="rol"
          style={{
            
            marginBottom: "15px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "17px",
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
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <Campana />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const CerrarSesion = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <CerrarSesionNav eliminarCookie={eliminarCookie} />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const Perfil = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <PerfilNav />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const Inicios = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <Inicio ruta="/Artesano" />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const Retroceder = () => {
  return (
    <NavbarContent style={{ marginTop: "0px" }} justify="start">
      <NavbarItem>
        <BotonRetroceder />
      </NavbarItem>
    </NavbarContent>
  );
};

const DesplegableTRJ = () => {
  const menuItems = [
    <Inicios />,
    <Perfil />,
    <Notificacion />,
    <CerrarSesion />
  ];

  return (
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={index} >
          {item}
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export {
  Icono, 
  Titulo, 
  Texto, 
  Notificacion, 
  Retroceder, 
  DesplegableTRJ, 
  Perfil, 
  CerrarSesion, 
  Inicios,
};