import React, { useEffect, useState } from "react";
import '../Bienvenida/bienvenida.css'

import { decodificarToken, obtenerToken } from "../../utils/token";
import { detalleInformacionApi } from "../../api/productos";

import { Spacer } from "@nextui-org/react";
import Loader from "../../components/UI/cargando/loader";
import NavigateADM, {Icono, Texto} from "../../components/UI/navbar/navbarAdmin";
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
        <Loader />
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <NavigateADM key={id}>
                <Icono
                  className="justify-end"
                  radio={"full"}
                  imagen={`${urlImage}/${datos.photo}`}
                  maxWidth={"100px"}
                />
                <Texto
                  titulo={"Bienvenido"}
                  nombre={`${datos.workerName} ${datos.workerLastName}`}
                  rol={"Administrador"}
                />
              </NavigateADM>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
        </div>
      )}
      <Spacer y={5} />
      <div className=" cartas flex flex-col items-center">
        <div className=" cartaEspacio relative flex gap-4">
          <div className="carta flex flex-col items-center">
            <PerfilIcono className={"perfilPrincipal"} ruta="/perfil" />
            <h1 className="textoPrincipal">Perfil</h1>
          </div>
          <Spacer x={2} />
          <div className=" carta flex flex-col items-center">
            <ListaTrabajoIcono ruta="/listaTrabajo/administracion" 
            className={"listaTrabajo"}/>
            <h1 className="textoPrincipal">Lista de trabajo</h1>
          </div>
          <Spacer x={2} />
          <div className=" carta flex flex-col items-center">
            <ProductoIcono ruta="/productos" 
            className={"producto"}/>
            <h1 className="textoPrincipal">Productos</h1>
          </div>
        </div>
      </div>
      <Spacer y={5} />
      <div className="flex flex-col items-center">
        <div className=" cartaEspacio relative flex gap-4">
          <div className= " carta flex flex-col items-center" >
            <TrabajadorIcono ruta="/trabajadores" 
            className={"trabajador"}/>
            <h1 className="textoPrincipal">Trabajadores</h1>
          </div>
          <Spacer x={2} />
          <div className=" carta flex flex-col items-center">
            <PedidoIcono ruta="/pedidos/administracion"
            className={"pedidos"} />
            <h1 className="textoPrincipal">Pedidos</h1>
          </div>
          <Spacer x={2} />
          <div className=" carta flex flex-col items-center">
            <CerrarSesionIcono ruta="/" 
            className={"cerrarSesion"}/>
            <h1 className="textoPrincipal">Cerrar sesión</h1>
          </div>
        </div>
      </div>
      <Spacer y={5} />
      <div className="footerBienvenido">
        <Footer
        classNameF={"footer"}
        classNameF2={"footer2"} />
      </div>
    </div>
  );
}

export default BienvenidaAdmi;