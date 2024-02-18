import React from "react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import PerfilIcono from "../../components/UI/iconos/Perfil";
import ListaTrabajoIcono from "../../components/UI/iconos/ListaTrabajo";
import CerrarSesionIcono from "../../components/UI/iconos/CerrarSesion";

function BienvenidaTrabajador() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Bienvenido" />
				<Notificacion />
			</Navigate>

			<PerfilIcono ruta="/perfil" />
			<ListaTrabajoIcono ruta="/listaTrabajo" />
			<CerrarSesionIcono ruta='/' />

			<div className="footerBienvenido">
				<Footer />
			</div>
		</div>
	);
}

export default BienvenidaTrabajador;
