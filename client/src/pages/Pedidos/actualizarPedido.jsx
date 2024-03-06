import React from "react";

import Footer from "../../components/UI/Footer/Footer";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";

function ActualizarPedido() {
	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Editar pedido" />
			</NavigateVEN>

			<Footer />
		</div>
	);
};

export default ActualizarPedido