import React, { useEffect, useState } from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Flotante from '../../components/Botones/BotonFlotante/Flotante';
import CustomCard from '../../components//Card/card';
import { CardContent } from '../../components/Card/card';
import { eliminarInformacionApi, listarInformacionApi } from "../../api/productos";
import Swal from 'sweetalert2'

import EditIcon from "../../components/UI/iconos/Editar";
import { Spacer, Tooltip } from "@nextui-org/react";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Capoeira from "../../components/UI/navbar/navbar";

function ListarTrabajador() {

  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const endPoint = 'trabajadores';
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {

    const data = async () => {
      try {
        const informacionTrabajador = await listarInformacionApi(endPoint);
        setInformacion(informacionTrabajador.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder informacion: ', error);
        setCargando(false);
      }
    };
    data();
  }, []);

  const eliminarTrabajador = async (idCardWorker) => {
    try {
      const result = await Swal.fire({
        title: "¿Quieres eliminar este trabajador?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6977E4",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      });
      if (result.isConfirmed) {
        await eliminarInformacionApi(endPoint, idCardWorker)
        const nuevaInformacion = informacion.filter((datos) => datos.idCardWorker !== idCardWorker);
        setInformacion(nuevaInformacion)

        Swal.fire({
          title: "Trabajador elimindao",
          icon: "success"
        });
      }
    } catch (error) {
      console.error('error al eliminar: ', error)
    }
  };

  return (
    <>
      <Flotante
        addIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#fff"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>}
        ruta="/crear/trabajador"
      />

      <Capoeira></Capoeira>
      <Spacer y={5} />
      {cargando ? (
        <p>Cargando información de los trabajadores...</p>
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <CustomCard
                key={datos.idCardWorker}
                img={`${urlImage}/${datos.photo}`}>
                <CardContent />
                
                <div className="relative flex items-center gap-4">
                  <Tooltip content="Editar trabajador">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon ruta={`/editar/trabajador/${datos.idCardWorker}`} />
                    </span>
                  </Tooltip>
                  <Tooltip content="Eliminar trabajador">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon eliminar={() => eliminarTrabajador(datos.idCardWorker)} />
                    </span>
                  </Tooltip>
                </div>
              </CustomCard>
            ))
          ) : (
            <p>No hay trabajadores disponibles.</p>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default ListarTrabajador;