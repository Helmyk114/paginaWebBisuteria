import React, { useState, useEffect } from 'react';
import '../Notificaciones/notificaciones.css'

import { Spacer, Tooltip } from '@nextui-org/react';
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import Loader from '../../components/UI/cargando/loader';
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from '../../components/UI/perfil/cardInfo';
import DeleteIcon from '../../components/UI/iconos/Eliminar';
import Footer from '../../components/UI/Footer/Footer';

import { eliminarInformacionApi, listarInformacionConParametroApi } from '../../api/axiosServices';
import { decodificarToken, obtenerToken } from '../../utils/token';
import { notificacionActivarInactivar, notificacionInformativa } from '../../utils/notificacionCliente';

function NotificacionesVendedor() {
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
	}, [notificacion, id]);

	const eliminarNotificacion = async (idNotification) => {
		try {
			const result = await notificacionActivarInactivar({ titulo: "¿Quieres eliminar este trabajador?", boton: "Eliminar" });
			if (result.isConfirmed) {
				await eliminarInformacionApi('notificacion', idNotification);
				const nuevaNotificacion = notificacion.filter((datos) => datos.idNotification !== idNotification);
				setNotificacion(nuevaNotificacion);
				notificacionInformativa({ icono: "success", titulo: "Notificación eliminada" });
			}
		} catch (error) {
			console.error("error al eliminar: ", error);
			notificacionInformativa({ icono: "error", titulo: "No es posible eliminar esta notificación" });
		}
	};

	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Notificaciones" />
			</NavigateVEN>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", }}>
					{notificacion && notificacion.length > 0 ? (notificacion.map((noti) => (
						<div key={noti.idNotification}>
							<CardPerfil
								className1={"cardNotificaciones"}
								className2={"cardNotificacionesGap"}>
								<div className='contNotificaciones'>
									<div className='cont1Notificaciones'>
										<div className='contIconoN'>
											<IconoCard
												icon="mingcute:notification-line"
												width={"25px"}
											/>
										</div>
										<div className='contTxtPrincipal'>
											<Texto1Card texto={noti.title} />
											<Texto2Card texto2={noti.message} />
										</div>
										<div className='iconoEliminarN'>
											<Tooltip content="Eliminar ">
												<span className="text-lg text-danger cursor-pointer active:opacity-50">
													<DeleteIcon eliminar={() => eliminarNotificacion(noti.idNotification)} />
												</span>
											</Tooltip>
										</div>
									</div>
									<Spacer y={2} />
									<div className='cont2Notificaciones'>
										<div className='contFecha'>
											<Texto2Card
												texto2={"Fecha: "}
												fontSize={"13px"}
											/>
											<Spacer x={1} />
											<Texto2Card
												texto2={noti.fecha}
												fontSize={"13px"}
											/>
										</div>
										<div className='contHora'>
											<Texto2Card
												texto2={"Hora: "}
												fontSize={"13px"}
											/>
											<Spacer x={1} />
											<Texto2Card
												texto2={noti.hora}
												fontSize={"13px"}
											/>
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

export default NotificacionesVendedor;