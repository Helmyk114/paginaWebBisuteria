import React, { useEffect, useState } from "react"

import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import CardPerfil, { Texto1Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";
import Footer from "../../components/UI/Footer/Footer";
import { useParams } from "react-router-dom";
import { detalleInformacionApi } from "../../api/axiosServices";
import { Spacer } from "@nextui-org/react";
import Loader from "../../components/UI/cargando/loader";


function DetalleTrabajo() {

	const [informacion, setInformacion] = useState([]);
	const [cargando, setCargando] = useState(true);
	const { idWorkList } = useParams();
	const urlImage = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const datos = async () => {
			try {
				const response = await detalleInformacionApi('detalleListaTrabajo', idWorkList);
				setInformacion(response.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion Detalle lista: ', error);
				setCargando(false);
			}
		};
		datos();
	}, [idWorkList]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<NavigateTRJ>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateTRJ>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div>
					{informacion && informacion.length > 0 ? (
						informacion.map((detalle) => (
							<div style={{ flex: '1' }}>
								<CardPerfil
									className1={"cardListaPro"}
									className2={"cardListaProGap"}>
									<Avatares
										src={`${urlImage}/${detalle.image}`}
										radio={"full"} />
									<div >
										<Texto1Card
											className={"texto1CardListaPro"}
											textAlign={"start"}
											texto={detalle.nameProduct} />
									</div>
									<div >
										<Texto1Card
											className={"texto1CardListaPro"}
											textAlign={detalle.quantity}
											texto={"2"} />
									</div>
									<div >
										<Texto1Card
											className={"texto1CardListaPro"}
											textAlign={"start"}
											texto={`${detalle.subTotal} $`} />
									</div>
								</CardPerfil>
								<Spacer y={4} />
							</div>
						))
					) : (
						<p>No hay detalles para esta lista </p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<div >
				<Footer style={{ marginTop: "auto" }} />
			</div>
		</div>
	)
};

export default DetalleTrabajo