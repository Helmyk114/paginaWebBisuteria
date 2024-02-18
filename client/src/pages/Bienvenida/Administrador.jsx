import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { decodificarToken, obtenerToken } from '../../utils/token'
import { detalleInformacionApi } from '../../api/productos'

import { Spacer } from '@nextui-org/react'
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
			<Spacer y={5} />
			<div className="flex flex-col items-center">
				<div className="relative flex gap-4">
					<div className="flex flex-col items-center">
						<PerfilIcono ruta="/perfil" />
						<h1>Perfil</h1>
					</div>
					<Spacer x={2} />
					<div className="flex flex-col items-center">
						<ListaTrabajoIcono ruta="/listaTrabajo" />
						<h1>Lista de trabajo</h1>
					</div>
					<Spacer x={2} />
					<div className="flex flex-col items-center">
						<ProductoIcono ruta='/productos' />
						<h1>Productos</h1>
					</div>
				</div>
			</div>

			<Spacer y={5} />

			<div className="flex flex-col items-center">
				<div className="relative flex gap-4">
					<div className="flex flex-col items-center">
						<TrabajadorIcono ruta='/trabajadores' />
						<h1>Trabajadores</h1>
					</div>
					<Spacer x={2} />
					<div className="flex flex-col items-center">
						<PedidoIcono ruta='/pedidos' />
						<h1>Pedidos</h1>
					</div>
					<Spacer x={2} />
					<div className="flex flex-col items-center">
						<CerrarSesionIcono ruta='/' />
						<h1>Cerrar sesión</h1>
					</div>
				</div>
			</div>

			<Spacer y={5} />

			<Footer />
		</div>
	);
};

export default BienvenidaAdmi;
