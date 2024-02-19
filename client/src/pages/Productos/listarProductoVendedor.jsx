import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import img from "../../img/fondo.png";
import { Icon } from "@iconify/react";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import BotonRetroceder from "../../components/UI/iconos/Retroceder";
// import Navigate, { Notificacion, Titulo, BotonRetroceder} from "../../components/UI/navbar/navbar";

export default function ListProduct() {
  return (
    <div>
       <Navigate>
				{/* <BotonRetroceder/> */}
				<Titulo espacio="center" titulo="Bienvenido"/>
				<Notificacion/>
			</Navigate>
      <Categorias
      imgC={img}
      />
      <CardProduct img={img} producto="collar de oro" precio="3000" />
      <CardProduct img={img} producto="collar de oro" precio="3000" />
    </div>
  );
}