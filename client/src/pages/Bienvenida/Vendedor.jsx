import React from "react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import PerfilIcono from "../../components/UI/iconos/Perfil";
import PedidoIcono from "../../components/UI/iconos/Pedido";
import ProductoIcono from "../../components/UI/iconos/Producto";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";

function BienvenidaVendedor() {
  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Bienvenido" />
        <Notificacion />
      </Navigate>

      <PerfilIcono ruta="/perfil" />
      <ProductoIcono ruta='' />
      <PedidoIcono ruta='' />
      <CerrarSesionIcono ruta='/' />

      <div className="footerBienvenido">
        <Footer />
      </div>
    </div>
  );
}

export default BienvenidaVendedor;
