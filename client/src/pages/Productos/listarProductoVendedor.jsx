import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './listarProductoVendedor.css'; 

import { Spacer, Button } from "@nextui-org/react";
import Navigate, { Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionApi } from "../../api/productos";

export default function ListProduct() {
  const [informacion, setInformacion] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const urlImage = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const informacionProducto = await listarInformacionApi('productos');
        setInformacion(informacionProducto.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion: ', error);
        setCargando(false);
      }
    };
    data();
  }, []);

  const handleSelectProduct = (selectedProduct) => {
    const isProductSelected = selectedProducts.some((p) => p.producto === selectedProduct.producto);

    if (isProductSelected) {
      const updatedSelection = selectedProducts.filter((p) => p.producto !== selectedProduct.producto);
      setSelectedProducts(updatedSelection);
    } else {
      setSelectedProducts([...selectedProducts, selectedProduct]);
    }
  };

  const handleCrearPedidosClick = () => {
    navigate('/crear/pedidos', { state: { selectedProducts } });
  };
  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Productos" />
      </Navigate>
      <Spacer y={5} />
      <Categorias />

      {cargando ? (
        <Loader />
      ) : (
        <div className="grid">
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <CardProduct 
                className="item"
                key={datos.idProduct}
                idProduct={datos.idProduct}
                img={`${urlImage}/${datos.image}`}
                producto={datos.nameProduct}
                precio={datos.price}
                onSelect={handleSelectProduct}
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      )}

      {/* Botón para ir a la vista /crear/pedidos */}
      <Button onClick={handleCrearPedidosClick}>Crear Pedidos</Button>

      <Footer />
    </div>
  );
}
