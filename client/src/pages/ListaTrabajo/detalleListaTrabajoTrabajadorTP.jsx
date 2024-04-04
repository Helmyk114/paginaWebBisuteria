import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { Spacer } from "@nextui-org/react";
import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Loader from "../../components/UI/cargando/loader";
import CardPerfil, { Texto1Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import Texto3 from "../../components/UI/botones/total";
import Footer from "../../components/UI/Footer/Footer";

import { detalleInformacionApi } from "../../api/axiosServices";

function DetalleTrabajoTP() {

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
						informacion.map((detalle, index) => (
							<div style={{ flex: '1' }} key={index}>
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
											textAlign={"start"}
											texto={detalle.quantity} />
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
				{informacion.length > 0 && (
					<BotonComprar2 text={"Completar lista"}>
						<Texto3 precio={`Total: ${informacion[0].total}`} />
					</BotonComprar2>
				)}
			<div >
				<Footer style={{ marginTop: "auto" }} />
			</div>
		</div>
	)
};

export default DetalleTrabajoTP;