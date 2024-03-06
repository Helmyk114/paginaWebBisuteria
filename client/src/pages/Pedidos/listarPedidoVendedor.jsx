import React from "react";

import Footer from "../../components/UI/Footer/Footer";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";

function ListarPedidoVendedor() {
	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateVEN>

			<Footer />
		</div>
	);
};

export default ListarPedidoVendedor;