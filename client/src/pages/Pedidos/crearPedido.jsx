import React from "react";
import Footer from "../../components/UI/Footer/Footer";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";

function CrearPedido() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear pedido" />
				<Notificacion />
			</Navigate>

			<Footer />
		</div>
	);
};

export default CrearPedido;