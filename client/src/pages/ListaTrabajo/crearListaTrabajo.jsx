import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import Avatares from "../../components/UI/avatar/Avatares";
import CheckboxInfo from "../../components/UI/formulario/CheckBox/CheckBox";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionApi } from "../../api/axiosServices";
import BotonCantidad from "../../components/UI/botones/botonCantidad";
import img from '../../img/anillo.jpg'

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
				const informacionProducto = await listarInformacionApi('artesano-Activo');
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
	};

	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear lista" />
			</NavigateADM>
			<Spacer y={4} />
			<form onSubmit={handleSubmit(onSubmit)}>

				<Acordeon titulo={"Nombre pedidos"}
				  className={"acordeonListaT"}>
					<CardPerfil
						className1={"cardCrearListaT"}
						className2={"cardCrearPedidoGap"}>
					
						<div className="cont2CrP">
							<Texto2Card
								texto2={"nombre del pedido"}
							/>
						</div>

					</CardPerfil>
					<p>No hay pedidos seleccionados.</p>
				</Acordeon>
				<Spacer y={4} />

				<Acordeon titulo={"Artesanos"}
				className={"acordeonListaT"}>
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
								<p>No hay artesanos disponibles.</p>
							)}
							{errors.idCardWorker && <span>{errors.idCardWorker.message}</span>}
						</div>
					)}
				</Acordeon>
				<Spacer y={4} />


				<Acordeon titulo={"Lista productos"}
				className={"acordeonListaT"}>
					<CardPerfil
						className1={"cardCrearListaT"}
						className2={"cardCrearPedidoGap"}>
						<Avatares
							src={img} alt={"hola"}
							radio={"full"} />
						<Texto1Card
							texto={"anillo"} />
						<div style={{ display: "flex", justifyContent: "center" }}>

						</div>
						<div className="cont2CrP">
							<Texto2Card
								texto2={"Cantidad"}
							/>
						</div>

						<div
								style={{ display: "flex" }}>
								<Tooltip content="Eliminar producto">
									<span className="text-lg text-danger cursor-pointer active:opacity-50" >
										<DeleteIcon  />
									</span>
								</Tooltip>
							</div>

					</CardPerfil>
					<p>No hay pedidos seleccionados.</p>
				</Acordeon>

				<Spacer y={4} />
				<BotonEnviar text={"Enviar lista"} type={"submit"}
				className="botonCrearListaT" />
			</form>
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo;