import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Loader from "../../components/UI/cargando/loader";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import Avatares from "../../components/UI/avatar/Avatares";
import CheckboxInfo from "../../components/UI/formulario/CheckBox/CheckBox";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import Texto3 from "../../components/UI/botones/total";
import BotonCantidad from "../../components/UI/botones/botonCantidad/botonCantidadSimple";
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import Footer from "../../components/UI/Footer/Footer";

import { añadirInformacionSinImagenAPI, listarInformacionApi, listarInformacionConParametroApi } from "../../api/axiosServices";
import { notificacionConfirmar, notificacionError } from "../../utils/notificacionCliente";

function CrearListaTrabajo() {
    const { register, handleSubmit, formState: { errors } , watch} = useForm();
    const [informacionArtesano, setInformacionArtesano] = useState([]);
    const [informacionProductos, setInformacionProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const urlImage = process.env.REACT_APP_API_URL;
    const location = useLocation();
    const [pedidosSeleccionados, setPedidosSeleccionados] = useState(location.state.pedidosSeleccionados);
    const idOrders = pedidosSeleccionados.map(pedido => pedido.idOrder);
    const nombreLista = watch("nombreLista"); 

    const refs = useRef({
        idCardWorker: [],
    });

    useEffect(() => {
        const dataArtesano = async () => {
            try {
                const artesanoInformacion = await listarInformacionApi('artesano-Activo');
                setInformacionArtesano(artesanoInformacion.data);
                setCargando(false);
            } catch (error) {
                console.error('Error al acceder a la información del artesano: ', error);
                setCargando(false);
            }
        };
        dataArtesano();
    }, []);

    useEffect(() => {
    const dataProductos = async () => {
        try {
            const productosInformacion = await Promise.all(idOrders.map(idOrder =>
                listarInformacionConParametroApi('orden-CrearLista', idOrder)
            ));
            setInformacionProductos(productosInformacion);
            setCargando(false);
        } catch (error) {
            console.error('Error al acceder a la información de los productos: ', error);
            setCargando(false);
        }
    };

    // Solo ejecutar la carga de datos si informacionProductos está vacío
    if (informacionProductos.length === 0) {
        dataProductos();
    }
}, [idOrders, informacionProductos.length]); // Dependencias actualizadas


	let array = [];

    const handleDeletePedido = (index) => {
        const updatedPedidos = [...pedidosSeleccionados];
        updatedPedidos.splice(index, 1);
        setPedidosSeleccionados(updatedPedidos);
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedIdCardWorker, setSelectedIdCardWorker] = useState(null);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setSelectedIdCardWorker(option.idCardWorker);
    };

    const [laborPrices, setLaborPrices] = useState({}); // Estado para almacenar los laborPrice actualizados

    const handleCantidadChange = (productId, newCantidad) => {
        const productInfo = informacionProductos.find(productos =>
            productos.data.some(producto => producto.idProduct === productId)
        );
        if (productInfo && productInfo.data && productInfo.data.length > 0) {
            const laborPrice = productInfo.data.find(producto => producto.idProduct === productId).laborPrice;
            setLaborPrices(prevPrices => ({
                ...prevPrices,
                [productId]: newCantidad * laborPrice
            }));
        } else {
            console.error('No se pudo encontrar la información del producto:', productId);
        }
    };

    const [sumaPrecios, setSumaPrecios] = useState(0); // Estado para almacenar la suma de precios

	useEffect(() => {
		let suma = 0;
		informacionProductos.forEach(producto => {
			producto.data.forEach(item => {
				suma += parseFloat(laborPrices[item.idProduct]) || 0;
			});
		});
		setSumaPrecios(suma);
	}, [informacionProductos, laborPrices]);
	
	
    const onSubmit = async (data) => {
        console.log("Formulario enviado");
        const listaTrabajo = {
			listName: data.nombreLista, // Obtener el nombre de la lista desde el input
			total: sumaPrecios.toString(), // Utilizar el total calculado
			idCardWorker: selectedIdCardWorker,
			idState: '1',
			details: array
		};

		console.log("Lista de trabajo:", listaTrabajo);

        try {
            await añadirInformacionSinImagenAPI(listaTrabajo, 'listaTrabajo')
            notificacionConfirmar({ titulo: "Se ha creado una lista de trabajo!" });
        } catch (error) {
            console.error('Error al crear una lista de trabajo', error);
            notificacionError({ titulo: "No Se puede crear la lista de trabajo!" });
        }
    };


	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear lista" />
			</NavigateADM>
			<Spacer y={4} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Acordeon titulo={"Pedido"} className={"acordeonListaT"}>
					{pedidosSeleccionados && pedidosSeleccionados.map((pedido, index) => (
						<div key={pedido.idOrder}>
						<CardPerfil
							key={index}
							className1={"cardCrearListaT"}
							className2={"cardCrearListaTGap"}
						>
							<div className="cont2CrListaT">
								<Texto2Card className="txtTituloCrListaT" texto2={pedido.clientname} fontSize={"20px"} fontWeight={"400"} />
								<p>Código: {pedido.idOrder}</p>
							</div>
							<div style={{ display: "flex" }}>
								<Tooltip content="Eliminar pedido">
									<span
										className="text-lg text-danger cursor-pointer active:opacity-50"
										onClick={() => handleDeletePedido(index)}
									>
										<DeleteIcon />
									</span>
								</Tooltip>
							</div>
						</CardPerfil>
						<Spacer y={4} />
						</div>
					))}
					{(!pedidosSeleccionados || pedidosSeleccionados.length === 0) && <p>No hay pedidos seleccionados.</p>}
				</Acordeon>
				<Spacer y={4} />
				<Acordeon titulo={"Artesanos"} className={"acordeonListaT"}>
					{cargando ? (
						<Loader />
					) : (
						<div>
							{informacionArtesano && informacionArtesano.length > 0 ? (
								informacionArtesano.map((datos) => (
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
				<Acordeon titulo={"Lista de productos"} className={"acordeonListaT"}>
					{cargando ? (
						<Loader />
					) : (
						<div>
							{informacionProductos && informacionProductos.length > 0 ? (
								informacionProductos.map((datos, index) => (
									<div key={index}>
										{datos.data && datos.data.map((productos, productIndex) => ( // Verificar si datos.data está definido
											<div key={productos.nameProduct}>
												<CardPerfil
													className1={"cardProCrearListaT"}
													className2={"cardProCrearPedidoGap"}
													key={productos.idOrder}
												>
													<div className="divcardProCrearPedido" >
														<div>
															<div className="cont1ProCrListaT" >
																<Avatares src={`${urlImage}/${productos.image}`} alt={"imagen"} radio={"full"} />
																<Texto1Card texto={productos.nameProduct} />
															</div>
														</div>
														<div >
															<div className="cont2ProCrListaT">
																<Texto2Card texto2={`Cantidad disponible: ${productos.maxQuantity}`} />
																{/* Verificar si laborPrices[productIndex] está definido */}
																<Texto2Card
																	texto2={`Precio labor: ${laborPrices[productos.idProduct] !== undefined ? laborPrices[productos.idProduct] : 0}`}
																/>
																<div>
																	<BotonCantidad
																		maxCantidad={productos.maxQuantity}
																		laborPrice={productos.laborPrice}
																		onCantidadChange={(newCantidad) => handleCantidadChange(productos.idProduct, newCantidad)}
																	/>
																</div>
															</div>
														</div>
													</div>
												</CardPerfil>
												<Spacer y={3} />
											</div>
										))}
									</div>
								))
							) : (
								<p>No hay productos disponibles.</p>
							)}
						</div>
					)}
				</Acordeon>
				<Spacer y={4} />
				<Acordeon className={"acordeonListaT"} titulo={"Nombre de la lista"}>
					<InputText nputText {...register("nombreLista")} />
				</Acordeon>
				<Spacer y={4} />
				<BotonComprar2 text={"Enviar Lista"}>
 			 		<Texto3 precio={`Total: ${sumaPrecios}`} />
				</BotonComprar2>


			</form>
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo;