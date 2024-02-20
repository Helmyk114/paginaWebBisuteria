import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import img from "../../img/collar.jpg";
import { Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CardProduct from "../../components/UI/cardProduct/card";
import Categorias from "../../components/UI/cardProduct/categorias";
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/Footer/Footer";
// import Navigate, { Notificacion, Titulo, BotonRetroceder} from "../../components/UI/navbar/navbar";

export default function ListProduct() {
  return (
    <div>
       <Navigate>
				<Retroceder/>
				<Titulo espacio="center" titulo="PRODUCTOS"/>
				<Notificacion/>
			</Navigate>
      <Spacer y={5}/>
      <Categorias/>
      <CardProduct img={img} producto="collar de oro" precio="3000" />
      <CardProduct img={img} producto="collar de oro" precio="3000" />
      <Footer/>
    </div>
  );
}