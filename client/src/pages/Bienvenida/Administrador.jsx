import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { decodificarToken, obtenerToken } from '../../utils/token'
import { detalleInformacionApi } from '../../api/productos'

import Navigate, { Notificacion, Retroceder, Titulo } from '../../components/UI/navbar/navbar'
import PerfilIcono from '../../components/UI/iconos/Perfil'
import ListaTrabajoIcono from '../../components/UI/iconos/ListaTrabajo'
import ProductoIcono from '../../components/UI/iconos/Producto'
import TrabajadorIcono from '../../components/UI/iconos/Trbajador'
import PedidoIcono from '../../components/UI/iconos/Pedido'
import CerrarSesionIcono from '../../components/UI/iconos/CerrarSesion'

function BienvenidaAdmi() {
  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = obtenerToken();
  const idCardWorker = decodificarToken(token).userId;
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const informacionTrabajador = await detalleInformacionApi(
          "bienvenida",
          idCardWorker
        );
        setInformacion(informacionTrabajador.data);
        setCargando(false);
      } catch (error) {
        console.error("Error al acceder a la informacion: ", error);
        setCargando(false);
      }
    };
    data();
  }, [idCardWorker]);

	return (
		<div style={{ minHeight: '100%' }}>
      <Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Bienvenido" />
				<Notificacion />
			</Navigate>
			{/* {cargando ? (
				<p>Cargando informacion del NAvbar...</p>
			) : (
				<div>
					{informacion && informacion.length > 0 ? (
						informacion.map((datos) => (
							<Navegar key={idCardWorker}>
								<ImagenPerfil img={`${urlImage}/${datos.photo}` || ""} />
								<TituloBienvenido
									texto="Bienvenido"
									nombretrabajador={`${datos.workerName} ${datos.workerLastName}` || ""}
									rol="Administrador" />
								<Notificacion />
							</Navegar>

						))
					) : (
						<p>No hay informacion disponible.</p>
					)}
				</div>
			)}; */}

      <PerfilIcono ruta="/perfil" />
      <ListaTrabajoIcono ruta="/listaTrabajo" />
      <ProductoIcono ruta='/productos' />
      <TrabajadorIcono ruta='/trabajadores' />
      <PedidoIcono ruta='/pedidos' />
      <CerrarSesionIcono ruta='/' />

			<Footer />
		</div>
	);
};

export default BienvenidaAdmi;
