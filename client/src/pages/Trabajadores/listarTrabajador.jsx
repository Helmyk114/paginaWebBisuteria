import React, { useEffect, useState } from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Flotante from '../../components/Botones/BotonFlotante/Flotante';
import CustomCard from '../../components//Card/card'; 
import { CardContent, Editar, Eliminar, Nombre } from '../../components/Card/card';
import { eliminarInformacion, listarInformacionApi } from "../../api/productos";

function ListarTrabajador() {

  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const endPoint = 'trabajadores';
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() =>{
    
    const data = async() =>{
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
      await eliminarInformacion(endPoint, idCardWorker)
      const nuevaInformacion = informacion.filter((datos) => datos.idCardWorker !== idCardWorker);
      setInformacion(nuevaInformacion)
      console.log('se elimino el registro')
    } catch (error) {
      console.error('error al eliminar: ',error)
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
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path 
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>}
          ruta="/crear/trabajador"
      />

      <Navbar>
        <BotonRetroceder/>
        <Titulo texto="Trabajadores" />
        <Notificacion />
      </Navbar>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div>
          {informacion && informacion.length > 0 ?(
            informacion.map((datos) => (
              <CustomCard 
                key={datos.idCardWorker} 
                img={`${urlImage}/${datos.photo}`}>
                <CardContent />
                <Nombre nombre={datos.workerName} />
                <Editar
                  ruta={`/editar/trabajador/${datos.idCardWorker}`}
                />
                <Eliminar eliminar={() => eliminarTrabajador(datos.idCardWorker)}/>
              </CustomCard>
          ))
          ) : (
            <p>No hay trabajadores disponibles.</p>
          )}
        </div>
      )}
      <Footer/>
    </>
  );
};

export default ListarTrabajador;

