import React, { useEffect, useRef, useState } from "react";

import { Spacer } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CheckboxInfo from "../../components/UI/formulario/CheckBox/CheckBox";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import { useForm } from "react-hook-form";
import { listarInformacionApi } from "../../api/productos";
import Loader from "../../components/UI/cargando/loader";


function CrearListaTrabajo() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [informacion, setInformacion] = useState([]);
	const [cargando, setCargando] = useState(true);
	const urlImage = process.env.REACT_APP_API_URL;

	const refs = useRef({
		idCardWorker: [],
	});

	useEffect(() => {
		const data = async () => {
			try {
				const informacionProducto = await listarInformacionApi('artesano');
				setInformacion(informacionProducto.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion: ', error);
				setCargando(false);
			}
		};
		data();
	}, []);

	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedIdCardWorker, setSelectedIdCardWorker] = useState(null);
	const handleOptionChange = (option) => {
    setSelectedOption(option);
		setSelectedIdCardWorker(option.idCardWorker);
  };

	const onSubmit = async (data) => {
		console.log("Formulario enviado");
		const listaTrabajo = {
			...data,
			idCardWorker: selectedIdCardWorker,
		};
		console.log(listaTrabajo)
	
}

	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear lista" />
				<Notificacion />
			</Navigate>
			<Spacer y={4} />

			<form  onSubmit={handleSubmit(onSubmit)}>
				<Accordion selectionMode="multiple" style={{ width: "90%", margin: "0 auto" }}>
					<AccordionItem key="3" aria-label="Accordion 3" title="Artesano" style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "bold" }}>
						{cargando ? (
							<Loader />
						) : (
							<div>
								{informacion && informacion.length > 0 ? (
									informacion.map((datos) => (
										<CheckboxInfo
											ref={(el) => { refs.current.idCardWorker = el; }}
											{...register("idCardWorker", { required: { value: false, message: 'La categoria es requerido' } })}
											key={datos.idCardWorker}
											id={datos.idCardWorker}
											name={`${datos.workerName} ${datos.workerLastName}`}
											imagen={`${urlImage}/${datos.photo}`}
											onChange={() => handleOptionChange(datos)}
											value={datos.idCardWorker === selectedOption?.idCardWorker}						
										/>
										
									))
								
								) : (
									<p>No hay productos disponibles.</p>
								)}
								{errors.idCardWorker && <span>{errors.idCardWorker.message}</span>}
							</div>
						)}
					</AccordionItem>
				</Accordion>

				<BotonEnviar text={"Enviar lista"} type={"submit"} />
			</form>


			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo;