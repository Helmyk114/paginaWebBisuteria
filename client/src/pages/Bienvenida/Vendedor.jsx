import React, { useEffect, useState } from "react";
import '../Bienvenida/bienvenida.css'

import { Spacer } from "@nextui-org/react";
import Loader from '../../components/UI/cargando/loader'
import NavigateVEN, { Icono, Texto } from "../../components/UI/navbar/navbarVendedor";
import PerfilIcono from "../../components/UI/iconos/Perfil";
import PedidoIcono from "../../components/UI/iconos/Pedido";
import ProductoIcono from "../../components/UI/iconos/Producto";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";
import Footer from "../../components/UI/Footer/Footer";

import { decodificarToken, eliminarCookie, obtenerToken } from "../../utils/token";
import { detalleInformacionApi } from "../../api/axiosServices";

function BienvenidaVendedor() {
  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = obtenerToken();
  const id = decodificarToken(token).userId;
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const infobd = await detalleInformacionApi("bienvenida", id);
        setInformacion(infobd.data);
        setCargando(false);
      } catch (error) {
        console.error("Error a traer la información", error);
      }
    };
    data();
  }, [id]);

  return (
    <div>
      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <NavigateVEN key={id}>
                <Icono className=" iconoPerfil justify-end"
                  radio={"full"}
                  maxWidth={"100px"}
                  imagen={`${(urlImage)}/${datos.photo}`}
                />
                <Texto
                  titulo={"Bienvenido"}
                  nombre={`${(datos.workerName)} ${(datos.workerLastName)}`}
                  rol={"Vendedor"}
                />
              </NavigateVEN>
            ))
          ) : (
            <p>No hay informacion disponible.</p>
          )}
        </div>
      )}
      <Spacer y={5} />
      <div className=" cartas flex flex-col items-center" >
        <div className=" cartaEspacio relative flex gap-4">
          <div className="carta flex flex-col items-center">
            <PerfilIcono className={"perfilPrincipal"} ruta="/perfil/Vendedor" />
            <h1 className="textoPrincipal">Perfil</h1>
          </div>
          
          <div className=" carta flex flex-col items-center">
            <ProductoIcono ruta="/productos/vendedor"
              className={"producto"} />
            <h1 className="textoPrincipal">Productos</h1>
          </div>
          <Spacer x={1}  />
          <div className=" carta flex flex-col items-center">
            <PedidoIcono ruta="/pedidos/vendedor"
              className={"pedidos"} />
            <h1 className="textoPrincipal">Pedidos</h1>
          </div>
          <div className=" carta flex flex-col items-center">
            <CerrarSesionIcono ruta="/"
              eliminarCookie={eliminarCookie}
              className={"producto"} />
            <h1 className="textoPrincipal">Cerrar sesión</h1>
          </div>
        </div>
      </div>
      <Spacer x={2} />
      <div className="footerBienvenido">
        <Footer />
      </div>
    </div>
  );
}

export default BienvenidaVendedor;