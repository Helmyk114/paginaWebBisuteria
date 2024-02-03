import React, { useState, useEffect } from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomCard from '../../components//Card/card';
import { CardContent, Editar, Eliminar, Nombre, PrecioPC, PrecioPO } from '../../components/Card/card';
import Flotante from '../../components/Botones/BotonFlotante/Flotante';
import { eliminarInformacionApi, listarInformacionApi } from "../../api/productos";
import Swal from "sweetalert2";

function ListarProducto() {

	const [informacion, setInformacion] = useState([]);
	const [cargando, setCargando] = useState(true);
	const endPoint = 'productos';
	const urlImage = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionProducto = await listarInformacionApi(endPoint);
				setInformacion(informacionProducto.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion: ',error);
				setCargando(false);
			}
		};
		data();
	}, []);

	const eliminarProducto = async (idProduct) => {
    try {
      const result = await Swal.fire({
        title: "¿Quieres eliminar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6977E4",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      });
      if (result.isConfirmed) {
        await eliminarInformacionApi(endPoint, idProduct)
        const nuevaInformacion = informacion.filter((datos) => datos.idProduct !== idProduct);
        setInformacion(nuevaInformacion)

        Swal.fire({
          title: "Producto elimindao",
          icon: "success"
        });
      }
    } catch (error) {
      console.error('error al eliminar: ', error)
    }
  };


	return (
		<div>
			< Flotante
				addIcon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="47"
						height="47"
						fill="#fff"
						className="bi bi-bag-plus-fill"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
					</svg>
				}
				ruta="/crear/producto"
			/>

			<Navbar>
				<BotonRetroceder />
				<Titulo
					texto='Productos'
				/>
				<Notificacion />
			</Navbar>

			{cargando ? (
				<p>Cargando información de los productos...</p>
			) : (
				<div>
					{informacion && informacion.length > 0 ? (
						informacion.map((datos) => (
							<CustomCard
								key={datos.idProduct}
								img={`${urlImage}/${datos.image}`}>
								<CardContent />
								<Nombre nombre={datos.nameProduct} />
								<PrecioPC precio1={datos.price} />
								<PrecioPO precio2={datos.laborPrice} />
								<Editar ruta={`/editar/producto/${datos.idProduct}`} />
								<Eliminar eliminar={() => eliminarProducto(datos.idProduct)}/>
							</CustomCard>
						))
					) : (
						<p>No hay productos disponibles.</p>
					)}
					</div>
				)}

			<Footer />
		</div>
	);
};

export default ListarProducto