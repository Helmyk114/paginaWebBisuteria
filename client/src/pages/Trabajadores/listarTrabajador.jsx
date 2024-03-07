import React, { useEffect, useState } from "react";
import "../Trabajadores/trabajadores.css";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Loader from "../../components/UI/cargando/loader";
import Avatares from "../../components/UI/avatar/Avatares";
import EditIcon from "../../components/UI/iconos/Editar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Footer from "../../components/UI/Footer/Footer";

import { eliminarInformacionApi, listarInformacionApi } from "../../api/productos";
import Swal from 'sweetalert2'
import Acordeon from "../../components/UI/Acordeon/Acordeon";

function ListarTrabajador() {
  const [informacionA, setInformacionA] = useState([]);
  const [informacionI, setInformacionI] = useState([]);
  const [cargando, setCargando] = useState(true);
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const informacionTrabajadorA = await listarInformacionApi('trabajadoresActivos');
        const informacionTrabajadorI = await listarInformacionApi('trabajadoresInactivos');
        setInformacionA(informacionTrabajadorA.data);
        setInformacionI(informacionTrabajadorI.data)
        setCargando(false);
      } catch (error) {
        console.error("Error al acceder informacion: ", error);
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
        confirmButtonText: "Eliminar",
      });
      if (result.isConfirmed) {
        await eliminarInformacionApi('trabajadores', idCardWorker)
        const nuevaInformacionA = informacionA.filter((datos) => datos.idCardWorker !== idCardWorker);
        const nuevaInformacionI = informacionI.filter((datos) => datos.idCardWorker !== idCardWorker);
        setInformacionA(nuevaInformacionA)
        setInformacionI(nuevaInformacionI)

        Swal.fire({
          title: "Trabajador elimindao",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("error al eliminar: ", error);
    }
  };

  return (
    <>
      <NavigateADM>
        <Retroceder />
        <Titulo espacio="center" titulo="Trabajadores" />
      </NavigateADM>

      <Spacer y={5} />
      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacionA && informacionA.length > 0 ? (
            informacionA.map((datos) => (
              <div key={datos.idCardWorker}>
                <CardPerfil
                  key={datos.idCardWorker}
                  img={`${urlImage}/${datos.photo}`}
                  justifyContent={"space-between"}
                  className="cardPerfil"
                  alignItems={"center"}>
                  <Avatares
                    src={`${urlImage}/${datos.photo}`}
                    radio={"full"} />
                  <div style={{ display: "block" }}>
                    <Texto1Card
                      texto={`${datos.workerName} ${datos.workerLastName}`} />
                    <Texto2Card
                      className={"telefono"}
                      texto2={`Celular: ${datos.workerPhone}`} 
                      fontSize={"11px"} />
                    <Texto2Card
                      className={"rol"}
                      texto2={`Rol: ${datos.roles}`}
                      fontSize={"11px"} />
                  </div>
                  <div className="relative flex items-center gap-1">
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
                </CardPerfil>
                <Spacer y={3} />
              </div>
            ))
          ) : (
            <p>No hay trabajadores disponibles.</p>
          )}
        </div>
      )}
      <Spacer y={5} />

      <Acordeon titulo={"Trabajadores inactivos"}>
      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacionI && informacionI.length > 0 ? (
            informacionI.map((datos) => (
              <div key={datos.idCardWorker}>
                <CardPerfil
                  key={datos.idCardWorker}
                  img={`${urlImage}/${datos.photo}`}
                  justifyContent={"space-between"}
                  className="cardPerfil"
                  alignItems={"center"}>
                  <Avatares
                    src={`${urlImage}/${datos.photo}`}
                    radio={"full"} />
                  <div style={{ display: "block" }}>
                    <Texto1Card
                      texto={`${datos.workerName} ${datos.workerLastName}`} />
                  </div>
                  <div className="relative flex items-center gap-1">
                    <Tooltip content="Eliminar trabajador">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon eliminar={() => eliminarTrabajador(datos.idCardWorker)} />
                      </span>
                    </Tooltip>
                  </div>
                </CardPerfil>
                <Spacer y={3} />
              </div>
            ))
          ) : (
            <p>No hay trabajadores disponibles.</p>
          )}
        </div>
      )}
      </Acordeon>

      <Spacer y={5} />
      <div style={{ position: "flex", bottom: "0", width: "100%", marginTop: "290px" }}>

        <Footer />
      </div>
    </>
  );
};

export default ListarTrabajador;
