import React from "react";

import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Footer from "../../components/UI/Footer/Footer";

function ListarListaTrabajoVendedor() {
	return (
		<div>
				<NavigateTRJ>
					<Retroceder />
					<Titulo espacio="center" titulo="Lista de trabajo" />
				</NavigateTRJ>

				<Footer />
		</div>
	);
};

export default ListarListaTrabajoVendedor;