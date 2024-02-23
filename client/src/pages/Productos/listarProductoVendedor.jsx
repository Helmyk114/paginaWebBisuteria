import React, { useEffect, useState } from "react";
import { listarInformacionApi } from "../../api/productos";

import { Spacer } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

export default function ListProduct() {

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
        console.error('Error al acceder a la informacion: ', error);
        setCargando(false);
      }
    };
    data();
  }, []);

  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Bienvenido" />
        <Notificacion />
      </Navigate>
      <Spacer y={5} />
      <Categorias />

      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <CardProduct
                key={datos.idProduct}
                img={`${urlImage}/${datos.image}`}
                producto={datos.nameProduct}
                precio={datos.price}
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      )};

      <Footer />
    </div>
  );
};