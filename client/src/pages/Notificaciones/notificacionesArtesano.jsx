import React, { useEffect, useState } from 'react';

import { Spacer } from '@nextui-org/react';
import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Loader from '../../components/UI/cargando/loader';
import Footer from '../../components/UI/Footer/Footer';

import { listarInformacionConParametroApi } from '../../api/axiosServices';
import { decodificarToken, obtenerToken } from '../../utils/token';

function NotificacionesArtesano() {
  const [notificacion, setNotificacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = obtenerToken();
	const id = decodificarToken(token).userId;

  useEffect(() => {
		const data = async () => {
			try {
				const notificaciones = await listarInformacionConParametroApi('notificacion', id);
				setNotificacion(notificaciones.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a las notificaciones: ', error);
				setCargando(false);
			}
		};
		data();
	}, [notificacion, id])


  return (
    <div>
      <NavigateTRJ>
				<Retroceder />
				<Titulo espacio="center" titulo="Notificaciones" />
			</NavigateTRJ>
      <Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", }}>
					{notificacion && notificacion.length > 0 ? (notificacion.map((noti) => (
							<div key={noti.idNotification}>
								<h1>{noti.title}</h1>
                <h3>{noti.message}</h3>
                <p>fecha: {noti.fecha}</p>
                <p>hora: {noti.hora}</p>
							</div>
						))
					) : (
						<p>No hay notificaiones disponibles.</p>
					)}
				</div>
			)}
      <Spacer y={4} />
      <Footer />
    </div>
  );
};

export default NotificacionesArtesano;
