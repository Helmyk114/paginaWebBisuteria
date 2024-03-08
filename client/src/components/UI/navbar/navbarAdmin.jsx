import React from "react";
import "./navbar.css";

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Avatares from "../avatar/Avatares";
import Campana from "../iconos/Notificacion";
import BotonRetroceder from "../iconos/Retroceder";
import AgregarTrabajador from "../iconos/agregar/Trabajador";
import AgregarProducto from "../iconos/agregar/Producto";
import AgregarPedido from "../iconos/agregar/Pedido";
import AgregarListaTrabajo from "../iconos/agregar/ListaTrabajo";
import CerrarSesionNav from "../iconos/CerrarSesionNavbars";
import PerfilNav from "../iconos/PerfilNavbar";
import Inicio from "../iconos/Inicio";

export default function NavigateADM({ children, height }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      style={{ backgroundColor: "#6977E4" }}
      height={height || "90px"}
      onMenuOpenChange={setIsMenuOpen}
    >
      {children}
      <NavbarContent justify="end" style={{ color: "white" }}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <DesplegableADM />
      </NavbarContent>
    </Navbar>
  );
}

const Icono = ({ radio, imagen, height, width, className }) => {
  return (
    <NavbarBrand className="justify-center" style={{ marginTop: "5px" }}>
      <Avatares
        radio={radio}
        src={imagen}
        height={height}
        width={width}
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
            marginBottom: "5px",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "40px",
            color: "#fff",
          }}
        >
          {titulo}
        </h1>
        <h2
          className="nombre"
          style={{
            marginTop: "5px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {nombre}
        </h2>
        <h3
          className="rol"
          style={{
            marginTop: "-9px",
            marginBottom: "15px",
            fontFamily: "Roboto, sans-serif",
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
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <Campana />
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

const AgregamosTrabajador = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <AgregarTrabajador />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const AgregamosProducto = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <AgregarProducto />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const AgregamosPedido = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <AgregarPedido />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const AgregamosListaTrabajo = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <AgregarListaTrabajo />
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
          <CerrarSesionNav />
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
          <Inicio ruta="/Administracion" />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const DesplegableADM = () => {
  const menuItems = [
    <Inicios/>,
    <Notificacion />,
    <Perfil />,
    <AgregamosTrabajador />,
    <AgregamosProducto />,
    <AgregamosPedido />,
    <AgregamosListaTrabajo />,
    <CerrarSesion />,
  ];

  return (
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link className="w-full" size="lg">
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export {
  Titulo,
  Inicios,
  Notificacion,
  Retroceder,
  Icono,
  Texto,
  AgregamosTrabajador,
  AgregamosProducto,
  AgregamosPedido,
  AgregamosListaTrabajo,
  DesplegableADM,
  CerrarSesion,
  Perfil
};
