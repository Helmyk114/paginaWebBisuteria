import React from "react";
import Footer from "../../components/Footer/Footer"
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";

function ListarPedidoAdministrador() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
				<Notificacion />
			</Navigate>

			<Footer />
		</div>
	);
};

export default ListarPedidoAdministrador;