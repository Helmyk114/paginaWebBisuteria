import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './listarProductoVendedor.css';

import { Spacer } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Loader from "../../components/UI/cargando/loader";
import BotonComprar from "../../components/UI/botones/BotonComprarProductos";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionConParametroApi } from "../../api/axiosServices";

export default function ListProduct() {
  const [informacionInicial, setInformacionInicial] = useState([]);
  const [informacionCategoria, setInformacionCategoria] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const urlImage = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const informacionProducto = await listarInformacionConParametroApi('productos/Activo-Inactivo', "4");
        setInformacionInicial(informacionProducto.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion inicial de productos: ', error);
        setCargando(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataByCategory = async () => {
      try {
        const informacionProducto = await listarInformacionConParametroApi('categorias', selectedCategory.toString());
        setInformacionCategoria(informacionProducto.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion de la categoría seleccionada: ', error);
        setCargando(false);
      }
    };
    fetchDataByCategory();
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

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
      <NavigateVEN>
        <Retroceder />
        <Titulo espacio="center" titulo="PRODUCTOS" />
      </NavigateVEN>
      <Spacer y={5} />
      <div className="gridCategorias">
        <Categorias onCategorySelect={handleCategorySelect} />
      </div>
      {cargando ? (
        <Loader />
      ) : (
        <div className="grid">
          {selectedCategory === 0 ? (
            informacionInicial.map((datos) => (
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
            informacionCategoria.map((datos) => (
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
          )}
        </div>
      )}
      <BotonComprar onClick={handleCrearPedidosClick} text={"Comprar"} type={"Submit"} />
      <Footer />
    </div>
  );
};