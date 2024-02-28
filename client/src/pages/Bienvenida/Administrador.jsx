import React, { useEffect, useState } from "react";

import { decodificarToken, obtenerToken } from "../../utils/token";
import { detalleInformacionApi } from "../../api/productos";
import '../Bienvenida/bienvenida.css'

import { Spacer } from "@nextui-org/react";
import Navigate, {Icono, Notificacion, Texto} from "../../components/UI/navbar/navbar";
import PerfilIcono from "../../components/UI/iconos/Perfil";
import ListaTrabajoIcono from "../../components/UI/iconos/ListaTrabajo";
import ProductoIcono from "../../components/UI/iconos/Producto";
import TrabajadorIcono from "../../components/UI/iconos/Trabajador";
import PedidoIcono from "../../components/UI/iconos/Pedido";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";
import Footer from "../../components/UI/Footer/Footer";

function BienvenidaAdmi() {
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
        <p>Cargando información</p>
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <Navigate key={id}>
                <Icono
                  className="justify-end"
                  radio={""}
                  imagen={`${urlImage}/${datos.photo}`}
                  height={"80px"}
                  width={"80px"}
                />
                <Texto
                  titulo={"Bienvenido"}
                  nombre={`${datos.workerName} ${datos.workerLastName}`}
                  rol={"Administrador"}
                />
                <Notificacion />
              </Navigate>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
        </div>
      )}
      <Spacer y={5} />
      <div className="flex flex-col items-center">
        <div className="relative flex gap-4">
          <div className=" flex flex-col items-center">
            <PerfilIcono className="icono" ruta="/perfil" />
            <h1>Perfil</h1>
          </div>
          <Spacer x={2} />
          <div className=" flex flex-col items-center">
            <ListaTrabajoIcono ruta="/listaTrabajo/administracion" />
            <h1>Lista de trabajo</h1>
          </div>
          <Spacer x={2} />
          <div className=" flex flex-col items-center">
            <ProductoIcono ruta="/productos" />
            <h1>Productos</h1>
          </div>
        </div>
      </div>

      <Spacer y={5} />

      <div className="flex flex-col items-center">
        <div className="relative flex gap-4">
          <div className= " flex flex-col items-center" >
            <TrabajadorIcono ruta="/trabajadores" />
            <h1>Trabajadores</h1>
          </div>
          <Spacer x={2} />
          <div className=" flex flex-col items-center">
            <PedidoIcono ruta="/pedidos/administracion" />
            <h1>Pedidos</h1>
          </div>
          <Spacer x={2} />
          <div className=" flex flex-col items-center">
            <CerrarSesionIcono ruta="/" />
            <h1>Cerrar sesión</h1>
          </div>
        </div>
      </div>

      <Spacer y={5} />

      <div className="footerBienvenido">
        <Footer />
      </div>
    </div>
  );
}

export default BienvenidaAdmi;
