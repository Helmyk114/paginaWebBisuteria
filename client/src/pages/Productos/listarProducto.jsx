import React, { useState, useEffect } from "react";
import Flotante from '../../components/Botones/BotonFlotante/Flotante';
import { eliminarInformacionApi, listarInformacionApi } from "../../api/productos";
import Swal from "sweetalert2";

import { Spacer, Tooltip } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo"
import Avatares from "../../components/UI/avatar/Avatares";
import Loader from "../../components/UI/cargando/loader";
import EditIcon from "../../components/UI/iconos/Editar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Footer from "../../components/UI/Footer/Footer";

function ListarProducto() {

	const [informacion, setInformacion] = useState([]);
	const [cargando, setCargando] = useState(true);
	const urlImage = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionProducto = await listarInformacionApi('productos');
				setInformacion(informacionProducto.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion: ', error);
				setCargando(false);
			}
		};
		data();
	}, []);

	const eliminarProducto = async (idProduct) => {
		try {
			const result = await Swal.fire({
				title: "¿Quieres eliminar este producto?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#6977E4",
				cancelButtonColor: "#d33",
				confirmButtonText: "Eliminar"
			});
			if (result.isConfirmed) {
				await eliminarInformacionApi('productos', idProduct)
				const nuevaInformacion = informacion.filter((datos) => datos.idProduct !== idProduct);
				setInformacion(nuevaInformacion)

				Swal.fire({
					title: "Producto elimindao",
					icon: "success"
				});
			}
		} catch (error) {
			console.error('error al eliminar: ', error)
		}
	};


	return (
		<div>
			< Flotante
				addIcon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="47"
						height="47"
						fill="#fff"
						className="bi bi-bag-plus-fill"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
					</svg>
				}
				ruta="/crear/producto"
			/>

			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Productos" />
				<Notificacion />
			</Navigate>
			<Spacer y={5} />

			{cargando ? (
				<Loader />
			) : (
				<div>
					{informacion && informacion.length > 0 ? (
						informacion.map((datos) => (
							<div key={datos.idProduct}>
								<CardPerfil
									justifyContent={"space-between"}
									className="cardPerfil"
									alignItems={"center"}
									key={datos.idProduct}>
									<Avatares
										src={`${urlImage}/${datos.image}`}
										radio={"full"} />
									<div style={{ display: "flex", gap: "13px" }}>
										<Texto1Card
											texto={datos.nameProduct} />
									</div>
									<div>
										<Texto2Card
											texto2={`PC ${datos.price} $`}
										/>
										<Texto2Card
											texto2={`PO ${datos.laborPrice} $`} />
									</div>

									<div className="relative flex items-center gap-1" style={{ justifyContent: "center" }}>
										<Tooltip content="Editar producto">
											<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
												<EditIcon ruta={`/editar/producto/${datos.idProduct}`} />
											</span>
										</Tooltip>
										<Tooltip content="Eliminar producto">
											<span className="text-lg text-danger cursor-pointer active:opacity-50">
												<DeleteIcon eliminar={() => eliminarProducto(datos.idProduct)} />
											</span>
										</Tooltip>
									</div>
								</CardPerfil>
								<Spacer y={3} />
							</div>
						))
					) : (
						<p>No hay productos disponibles.</p>
					)}
				</div>
			)}


			<Footer />
		</div>
	);
};

export default ListarProducto;