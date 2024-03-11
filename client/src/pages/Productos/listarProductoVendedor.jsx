import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './listarProductoVendedor.css'; 

import { Spacer, Button } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo }from "../../components/UI/navbar/navbarVendedor";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionApi } from "../../api/productos";
import BotonComprar from "../../components/UI/botones/BotonComprarProductos";

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
    // Puedes navegar a la nueva vista y pasar la información de los productos seleccionados
    navigate('/crear/pedidos', { state: { selectedProducts } });
  };
  return (
    <div>
      <NavigateVEN>
        <Retroceder />
        <Titulo espacio="center" titulo="Bienvenido" />
      </NavigateVEN>
      
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
      <BotonComprar onClick={handleCrearPedidosClick} text={"Comprar"} type={"Submit"}/>
      <Footer />
        
    </div>
  );
}
