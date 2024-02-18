import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer"

import { actualizarInformacionApi, detalleInformacionApi } from "../../api/productos";
import procesarImagen from "../../utils/procesadorImagenes";
import Swal from "sweetalert2";

import { Card, Spacer } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import SubirImagen from "../../components/UI/formulario/Imagen/imagen";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import BotonEnviar from "../../components/UI/botones/botonEnviar";

function ActualizarProducto() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [selectedImage, setSelectedImage] = useState("");
	const [informacionProducto, setInformacionProducto] = useState({});
	const { idProduct } = useParams();
	const raizUrl = process.env.REACT_APP_API_URL;

	const refs = useRef({
		nameProduct: null,
		price: null,
		laborPrice: null,
		idCategory: null,
	});


	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const response = await detalleInformacionApi('productos', idProduct);
				setInformacionProducto(response.data);
				if (response.data[0] && response.data[0].image) {
					const imagen = response.data[0].image;
					setSelectedImage(`${raizUrl}/${imagen}`);
				}
			} catch (error) {
				console.error('Error al obtener la informacion de losproductos: ', error)
			}
		};
		obtenerDatos();
	}, [idProduct, raizUrl]);

	const onSubmit = async (data) => {
		const producto = {
			...data,
			image: procesarImagen(selectedImage)
		};
		console.log(producto);

		// try {
		// 	await actualizarInformacionApi('productos', idProduct, producto);
		// 	Swal.fire({
		// 		icon: "success",
		// 		title: "Se ha actualizado un producto!",
		// 		showConfirmButton: false,
		// 		timer: 1500
		// 	});
		// } catch (error) {
		// 	console.error('Error al crear un producto', error)
		// 	Swal.fire({
		// 		icon: "error",
		// 		title: "No Se puede crear el producto",
		// 		showConfirmButton: false,
		// 		timer: 1500
		// 	});
		// }
	};

	if (!informacionProducto || Object.keys(informacionProducto).length === 0) {
		return <div>Cargando...</div>
	};

	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Editar producto" />
				<Notificacion />
			</Navigate>

			<form style={{ display: 'block', justifyContent: 'center', padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
				<SubirImagen onImageChange={setSelectedImage} defaultImageSrc={informacionProducto || ""} />
				<Card>

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.nameProduct = el; }}
						{...register("nameProduct", { required: { value: true, message: 'El nombre del producto es requerido' } })}
						key="nameProduct"
						type="text"
						label={<span className="custom-label">Nombre del producto</span>}
						labelPlacement="outside"
						placeholder={"Escriba el nombre del producto"}
						size="md"
						defaultValue={informacionProducto[0].nameProduct}
						fontSize={"14px"}
					/>
					{errors.nameProduct && <span>{errors.nameProduct.message}</span>}

					<Spacer y={4} />

					<InputText ref={(el) => { refs.current.price = el; }}
						{...register("price", { required: { value: true, message: 'El precio del producto es requerido' } })}
						key="price"
						type="number"
						label={<span className="custom-label">Precio comercial (PC)</span>}
						labelPlacement="outside"
						placeholder={"0.00"}
						defaultValue={informacionProducto[0].price}
						fontSize={"14px"}
						size="md"
						endContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-default-400 text-small">$COP</span>
							</div>
						}
					/>
					{errors.price && <span>{errors.price.message}</span>}

					<Spacer y={4} />

					<InputText
						ref={(el) => { refs.current.laborPrice = el; }}
						{...register("laborPrice", { required: { value: true, message: 'El precio de mano de obra es requerido' } })}
						key="laborPrice"
						type="number"
						label={<span className="custom-label">Precio mano de obra (PO)</span>}
						labelPlacement="outside"
						placeholder={"0.00"}
						defaultValue={informacionProducto[0].laborPrice}
						fontSize={"14px"}
						size="md"
						endContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-default-400 text-small">$COP</span>
							</div>
						}
					/>
					{errors.laborPrice && <span>{errors.laborPrice.message}</span>}

					<Spacer y={4} />

					<BotonEnviar
						text="Editar producto"
						type="submit"
					/>

					<Spacer y={4} />

				</Card>
			</form>
			<Footer />
		</div>
	);
};

export default ActualizarProducto;