import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { añadirInformacionAPI } from "../../api/productos";
import '../Trabajadores/trabajadores.css'

import Swal from 'sweetalert2'

import { Card, Spacer } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import SubirImagen from "../../components/UI/formulario/Imagen/imagen";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import InputPassword from "../../components/UI/formulario/Inputs/password/inputPassword";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import Footer from "../../components/UI/Footer/Footer";

function CrearTrabajador() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [selectedImage, setSelectedImage] = useState();
	const refs = useRef({
		workerName: null,
		workerLastName: null,
		workerEmail: null,
		wokerPhone: null,
		idCardWorker: null,
		userName: null,
		password: null,
		idRole: null,
		numberBank: null,
		idBank: null,
	});

	const onSubmit = async (data) => {
		const trabajador = {
			...data,
			photo: selectedImage,
		};
		console.log('objeto creado: ', trabajador)
		try {
			await añadirInformacionAPI(trabajador, 'trabajador')
			Swal.fire({
				icon: "success",
				title: "Se ha creado un trabajador!",
				showConfirmButton: false,
				timer: 1500
			});
		} catch (error) {
			console.error('Error al crear un trabajador', error)
			Swal.fire({
				icon: "error",
				title: "No Se puede crear un trabajador!",
				showConfirmButton: false,
				timer: 1500
			});
		}
	};

	return (
		<div >
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Registrar trabajador" />
				<Notificacion />
			</Navigate>
			<Spacer y={4} />
			<div  className="container-crear">
			<form className="formularioCrear"  onSubmit={handleSubmit(onSubmit)}>
				<div className="imagen">
				<SubirImagen onImageChange={setSelectedImage} />
				<Spacer y={4} />
				<Card className="card2">
				<h4>Datos perosnales</h4>
				<Spacer y={4} />
                 
              <InputText ref={(el) => { refs.current.workerName = el; }}
	{...register("workerName", { required: { value: true, message: 'El nombre del trabajador es requerido' } })}
	key="workerName"
	type="text"
	label={<span className="custom-label">Nombre</span>}
	labelPlacement="outside"
	placeholder={"Escriba el nombre del trabajador"}
	size="md"
       />
               {errors.workerName && <span>{errors.workerName.message}</span>}
 
				</Card>
				</div>
				<Spacer y={4} />

				<Card className='card' >
					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.workerName = el; }}
						{...register("workerName", { required: { value: true, message: 'El nombre del trabajador es requerido' } })}
						key="workerName"
						type="text"
						label={<span className="custom-label">Nombre</span>}
						labelPlacement="outside"
						placeholder={"Escriba el nombre del trabajador"}
						size="md"
					/>
					{errors.workerName && <span>{errors.workerName.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.workerLastName = el; }}
						{...register("workerLastName", { required: { value: true, message: 'El apellido del trabajador es requerido' } })}
						key="workerLastName"
						type="text"
						label={<span className="custom-label">Apellido</span>}
						labelPlacement="outside"
						placeholder={"Escriba el apellido del trabajador"}
						size="md"
					/>
					{errors.workerLastName && <span>{errors.workerLastName.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.workerEmail = el; }}
						{...register("workerEmail", { required: { value: true, message: 'El correo del trabajador es requerido' } })}
						key="workerEmail"
						type="text"
						label={<span className="custom-label">Correo electronico</span>}
						labelPlacement="outside"
						placeholder={"Escriba el correo del trabajador"}
						size="md"
					/>
					{errors.workerEmail && <span>{errors.workerEmail.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.workerPhone = el; }}
						{...register("workerPhone", { required: { value: true, message: 'El número de celular es requerido' } })}
						key="workerPhone"
						type="text"
						label={<span className="custom-label">Celular</span>}
						labelPlacement="outside"
						placeholder={"Escriba el número de celular"}
						size="md"
					/>
					{errors.workerPhone && <span>{errors.workerPhone.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.idCardWorker = el; }}
						{...register("idCardWorker", { required: { value: true, message: 'El número de cédula es requerido' } })}
						key="idCardWorker"
						type="text"
						label={<span className="custom-label">Cédula</span>}
						labelPlacement="outside"
						placeholder={"Escriba el número de cédula"}
						size="md"
					/>
					{errors.idCardWorker && <span>{errors.idCardWorker.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.userName = el; }}
						{...register("userName", { required: { value: true, message: 'El usuario es requerido' } })}
						key="userName"
						type="text"
						label={<span className="custom-label">Usuario</span>}
						labelPlacement="outside"
						placeholder={"Escriba el usuario"}
						size="md"
					/>
					{errors.userName && <span>{errors.userName.message}</span>}

					<Spacer y={4} />

					<InputPassword
						ref={(el) => { refs.current.password = el; }}
						{...register("password", { required: { value: true, message: 'La contraseña requerida' } })}
						key="password"
						label={<span className="custom-label">Contraseña</span>}
						labelPlacement={"outside"}
						placeholder={"Escriba una contraseña"}
						size="md"
					/>
					{errors.password && <span>{errors.password.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.idRole = el; }}
						{...register("idRole", { required: { value: true, message: 'El rol es requerido' } })}
						key="idRole"
						type="number"
						label={<span className="custom-label">Rol</span>}
						labelPlacement="outside"
						placeholder={"Soy un comboBox D:"}
						size="md"
					/>
					{errors.idRole && <span>{errors.idRole.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.numberBank = el; }}
						{...register("numberBank", { required: { value: true, message: 'El número de cuenta es requerido' } })}
						key="numberBank"
						type="text"
						label={<span className="custom-label">Número de cuenta</span>}
						labelPlacement="outside"
						placeholder={"Escriba su número de cuenta"}
						size="md"
					/>
					{errors.numberBank && <span>{errors.numberBank.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.idBank = el; }}
						{...register("idBank", { required: { value: true, message: 'La entidad bancaria es requerido' } })}
						key="idBank"
						type="number"
						label={<span className="custom-label">Banco</span>}
						labelPlacement="outside"
						placeholder={"Soy un comboBox D:"}
						size="md"
					/>
					{errors.idBank && <span>{errors.idBank.message}</span>}

					<Spacer y={4} />

					<BotonEnviar
						text="Registrar trabajador"
						type="submit"
					/>
					<Spacer y={4} />

				</Card>
			</form>
		</div>
		<Spacer y={4} />

		
			<Footer />

		</div>
	);
};

export default CrearTrabajador;