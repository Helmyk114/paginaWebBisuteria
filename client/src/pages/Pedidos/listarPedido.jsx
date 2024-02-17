import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ListarPedido() {
	return (
		<div>
			<Navbar>
				<BotonRetroceder />
				<Titulo
					texto='Pedidos'
				/>
				<Notificacion />
			</Navbar>

			<Footer />
		</div>
	);
};

export default ListarPedido