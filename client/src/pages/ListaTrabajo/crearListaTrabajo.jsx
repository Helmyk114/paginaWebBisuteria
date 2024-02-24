import React from "react";

import { Card, CardBody, CardHeader, Divider, Spacer } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";
import ListBoxCompound from "../../components/UI/formulario/Combox/ListBoxCompound";

function CrearListaTrabajo() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Añadir producto" />
				<Notificacion />
			</Navigate>
			<Spacer y={4} />
			<Card className="" style={{ width: "90%", margin: "0 auto" }}>
				<CardHeader className="flex gap-3">
					<p style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "bold" }}>Lista de pedidos</p>
				</CardHeader>
				<Divider />
				<CardBody>
				
				</CardBody>
			</Card>
			<Spacer y={5} />
			<Card className="" style={{ width: "90%", margin: "0 auto" }}>
				<CardHeader className="flex gap-3">
					<p style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "bold" }}>Productos</p>
				</CardHeader>
				<Divider />
				<CardBody>


				</CardBody>
			</Card>
			<Spacer y={5} />
			<Card className="" style={{ width: "90%", margin: "0 auto" }}>
				<CardHeader className="flex gap-3">
					<p style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "bold" }}>Artesano</p>
				</CardHeader>
				<Divider />
				<CardBody>

				<ListBoxCompound
				key="idCategory"
				titulo="Categoria"
				apiEndpoint="artesano"
				imagen={"photo"}
				idOpcion={"idCardWorker"}
				nombre={"workerName"} />
				</CardBody>
			</Card>


			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo