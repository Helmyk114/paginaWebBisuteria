import React, { useEffect, useState } from 'react';

import { Spacer, Tooltip } from '@nextui-org/react';
import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Loader from '../../components/UI/cargando/loader';
import Footer from '../../components/UI/Footer/Footer';
import '../Notificaciones/notificaciones.css'

import { listarInformacionConParametroApi } from '../../api/axiosServices';
import { decodificarToken, obtenerToken } from '../../utils/token';
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from '../../components/UI/perfil/cardInfo';
import DeleteIcon from '../../components/UI/iconos/Eliminar';

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
				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", }}>
					{notificacion && notificacion.length > 0 ? (notificacion.map((noti) => (
							<div key={noti.idNotification}>
								<CardPerfil className1={"cardNotificaciones"}
								className2={"cardNotificacionesGap"}>
									
								<div className='contNotificaciones'>
									
									<div className='cont1Notificaciones'>
									<div className='contIconoN'>
										<IconoCard
											icon="mingcute:notification-line"
											width={"25px"} />
									</div>
                                        <div className='contTxtPrincipal'>
										<Texto1Card texto={noti.title} />
										<Texto2Card texto2={noti.message} />
										</div>
										<div className='iconoEliminarN'>
											<Tooltip content="Eliminar ">
												<span className="text-lg text-danger cursor-pointer active:opacity-50">
													<DeleteIcon />
												</span>
											</Tooltip>
										</div>
									</div>
									
									<Spacer y={2} />
									<div className='cont2Notificaciones'>
										<div className='contFecha'>
											<Texto2Card texto2={"Fecha: "}
												fontSize={"13px"} />
											<Spacer x={1} />
											<Texto2Card texto2={noti.fecha}
												fontSize={"13px"} />
										</div>

										<div className='contHora'>
											<Texto2Card texto2={"Hora: "}
												fontSize={"13px"} />
											<Spacer x={1} />
											<Texto2Card texto2={noti.hora}
												fontSize={"13px"} />
										</div>
										<Spacer y={4} />
										
									</div>
									
								</div>
							</CardPerfil>

							<Spacer y={2} />
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
