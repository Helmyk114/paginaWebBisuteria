import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Card, Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import SubirImagen from "../../components/UI/formulario/Imagen/imagen";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import ListBoxSimple from "../../components/UI/formulario/Combox/listBoxSimple";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import Footer from "../../components/UI/Footer/Footer";

import { añadirInformacionAPI } from "../../api/productos";
import { notificacionConfirmar, notificacionError } from "../../utils/notificacionCliente"

function CrearProducto() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [selectedImage, setSelectedImage] = useState();
  const refs = useRef({
    nameProduct: null,
    price: null,
    laborPrice: null,
    idCategory: null,
  });

  const onSubmit = async (data) => {
    const producto = {
      ...data,
      image: selectedImage,
    };
    console.log(producto)

    try {
      await añadirInformacionAPI(producto, "producto");
      notificacionConfirmar({ titulo: "Se ha añadido un producto!" })
    } catch (error) {
      console.error("Error al crear un producto", error);
      notificacionError({ titulo: "No Se puede crear el producto!" })
    }
  };

  return (
    <div>
      <NavigateADM>
        <Retroceder />
        <Titulo espacio="center" titulo="Añadir producto" />
      </NavigateADM>
      <Spacer y={4} />
      <form
        style={{ display: "block", justifyContent: "center", padding: "10px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SubirImagen onImageChange={setSelectedImage} />
        <Spacer y={4} />
        <div className="content1">
          <Card className="card" style={{ width: "90%" }}>
            <Spacer y={4} />
            <InputText
              ref={(el) => { refs.current.nameProduct = el; }}
              {...register("nameProduct", { required: { value: true, message: "El nombre del producto es requerido" }, })}
              key="nameProduct"
              type="text"
              label={<span className="custom-label">Nombre del producto</span>}
              labelPlacement="outside"
              placeholder={"Escriba el nombre del producto"}
              size="md"
            />
            {errors.nameProduct && <span>{errors.nameProduct.message}</span>}
            <Spacer y={4} />
            <InputText
              ref={(el) => { refs.current.price = el; }}
              {...register("price", { required: { value: true, message: "El precio del producto es requerido" }, })}
              key="price"
              type="number"
              label={<span className="custom-label">Precio comercial (PC)</span>}
              labelPlacement="outside"
              placeholder={"0.00"}
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
              {...register("laborPrice", { required: { value: true, message: "El precio de mano de obra es requerido" }, })}
              key="laborPrice"
              type="number"
              label={<span className="custom-label">Precio mano de obra (PO)</span>}
              labelPlacement="outside"
              placeholder={"0.00"}
              size="md"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$COP</span>
                </div>
              }
            />
            {errors.laborPrice && <span>{errors.laborPrice.message}</span>}
            <Spacer y={4} />
            <ListBoxSimple
              ref={(el) => { refs.current.idCategory = el; }}
              {...register("idCategory", { required: { value: true, message: "La categoria es requerido" }, })}
              key="idCategory"
              type="text"
              label={<span className="custom-label">Categoria</span>}
              labelPlacement="outside"
              placeholder="Seleccione una categoria"
              size="md"
              apiEndpoint="categorias"
              idOpcion="idCategory"
              texto="categorys"
            />
            {errors.idCategory && <span>{errors.idCategory.message}</span>}
            <Spacer y={4} />
            <BotonEnviar text="Añadir producto" type="submit" />
            <Spacer y={4} />
          </Card>
        </div>

      </form>
      <Spacer y={4} />
      <Footer />
    </div>
  );
}

export default CrearProducto;
