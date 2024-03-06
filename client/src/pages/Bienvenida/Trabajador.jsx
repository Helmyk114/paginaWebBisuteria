import React, { useEffect, useState } from "react";


import PerfilIcono from "../../components/UI/iconos/Perfil";
import ListaTrabajoIcono from "../../components/UI/iconos/ListaTrabajo";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";
import Footer from "../../components/UI/Footer/Footer";

import { decodificarToken, obtenerToken } from "../../utils/token";
import { detalleInformacionApi } from "../../api/productos";
import NavigateTRJ, {Icono, Texto} from "../../components/UI/navbar/navbarTrabajador";


function BienvenidaTrabajador() {
  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState([]);
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
              <NavigateTRJ key={id}>
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
                  rol={"Artesano"}
                />
              </NavigateTRJ>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
        </div>
      )}

      <PerfilIcono ruta="/perfil" />
      <ListaTrabajoIcono ruta="/listaTrabajo/vendedor" />
      <CerrarSesionIcono ruta="/" />

      <div className="footerBienvenido">
        <Footer />
      </div>
    </div>
  );
}

export default BienvenidaTrabajador;
