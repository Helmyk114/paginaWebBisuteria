import React, { useEffect, useState } from "react";
import { listarInformacionApi } from "../../api/productos";
import { Spacer, Button } from "@nextui-org/react";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";
import img from "../../img/pulsera.jpg";
import './listarProductoVendedor.css'; 
import { useNavigate } from "react-router-dom";

export default function ListProduct() {
  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const endPoint = 'productos';
  const urlImage = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

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

  const handleSelectProduct = (selectedProduct) => {
    const updatedSelection = selectedProducts.filter((p) => p.producto !== selectedProduct.producto);
    setSelectedProducts([...updatedSelection, selectedProduct]);
  };

  const handleCrearPedidosClick = () => {
    // Puedes navegar a la nueva vista y pasar la información de los productos seleccionados
    navigate('/crear/pedidos', { state: { selectedProducts } });
  };

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
        <div className="grid">
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <CardProduct
                key={datos.idProduct}
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
