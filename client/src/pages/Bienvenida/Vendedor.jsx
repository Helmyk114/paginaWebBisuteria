import React, { useEffect, useState } from "react";
import Navigate, {
  Icono,
  Notificacion,
  Retroceder,
  Texto,
  Titulo,
} from "../../components/UI/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import PerfilIcono from "../../components/UI/iconos/Perfil";
import PedidoIcono from "../../components/UI/iconos/Pedido";
import ProductoIcono from "../../components/UI/iconos/Producto";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";

import Logo from "../../img/1-removebg-preview - copia.png";
import { decodificarToken, obtenerToken } from "../../utils/token";
import { detalleInformacionApi } from "../../api/productos";

function BienvenidaVendedor() {
  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = obtenerToken();
  const id = decodificarToken(token).userId;

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
              <Navigate height={"100px"}>
                <Icono
                  radio={""}
                  imagen={Logo}
                  height={"80px"}
                  width={"80px"}
                />

                <Texto
                  titulo={"Bienvenido"}
                  nombre={`${(datos.workerName)} ${(datos.workerLastName)}`}
                  rol={"Vendedor"}
                />

                <Notificacion />
              </Navigate>
              
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
          
        </div>
      )}

      <PerfilIcono ruta="/perfil" />
      <ProductoIcono ruta="" />
      <PedidoIcono ruta="" />
      <CerrarSesionIcono ruta="/" />

      <div className="footerBienvenido">
        <Footer />
      </div>
    </div>
  );
}

export default BienvenidaVendedor;
