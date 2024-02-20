import React from "react";
import { Spacer } from "@nextui-org/react";
import CardPerfil from "../components/UI/perfil/cardInfo";
import Navigate, { Notificacion, Retroceder, Titulo } from "../components/UI/navbar/navbar";
import { IconoCard,Texto1Card, Texto2Card } from "../components/UI/perfil/cardInfo";
import Avatares from "../components/UI/avatar/Avatares";
import Footer from "../components/Footer/Footer";

export default function Perfilinfo() {
  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Perfil" />
        <Notificacion />
      </Navigate>
      <div style={{ width:"100%", height:"35%", padding: "10px", display:"flex", alignItems:"center", gap:"30px", position:"absolute", backgroundColor:"#454F96"}}>
      <Avatares
      className={"w-15 h-15 "}
      radio={"full"}
      src={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
      />
      <div>
      <p className="text-xl font-semibold leading-none text-white">Zoey Lang</p>
       <h2 className="text-small tracking-tight text-white ">@zoeylang</h2>
      </div>
      </div>
      <Spacer y={4} />
      <div style={{ backgroundColor: "#EEEEEE", width: "90%", padding: "1px", borderRadius: "13px", margin: "0 auto", marginBottom:"30px", position:"relative", top:"185px", zIndex:"1" }}>
        <Spacer y={4} />
        <CardPerfil>
        <IconoCard icon={"gridicons:user-circle"}/>
        <div style={{display:"block"}}>
        <Texto1Card
          texto={"Usuario"}/>
         <Texto2Card
         texto2={"Usuario1"}/>
         </div>
        </CardPerfil>
        <Spacer y={3} />
        <CardPerfil>
        <IconoCard icon={"mdi:user-card-details"}/>
        <div style={{display:"block"}}>
        <Texto1Card
          texto={"Cedula"}/>
         <Texto2Card
         texto2={"1323445"}/>
         </div>
        </CardPerfil>
        <Spacer y={3} />
        <CardPerfil>
        <IconoCard icon={"mdi:email"}/>
        <div style={{display:"block"}}>
        <Texto1Card
          texto={"Email"}/>
         <Texto2Card
         texto2={"Usuario1@gmial.com"}/>
         </div>
        </CardPerfil>
        <Spacer y={3} />
        <CardPerfil>
        <IconoCard icon={"mdi:telephone"}/>
        <div style={{display:"block"}}>
        <Texto1Card
          texto={"Telefono"}/>
         <Texto2Card
         texto2={"2342342"}/>
         </div>
        </CardPerfil>
        <Spacer y={3} />
        <CardPerfil>
        <IconoCard icon={"mdi:cash-multiple"}/>
        <div style={{display:"block"}}>
        <Texto1Card
          texto={"Numero de cuenta"}/>
         <Texto2Card
         texto2={"4848499"}/>
         </div>
        </CardPerfil>
        <Spacer y={3} />
        <CardPerfil alignItems={"center"}
        gap={"70px"}
        style={{display:"flex", justifyContent:" space-between" }}>
        <IconoCard icon={"akar-icons:edit"} />
          <Texto1Card
          texto={"Editar"}
          fontSize={"20px"}/>
        <IconoCard icon={"akar-icons:arrow-right"}
        width={"35"}
        height={"35"}/>
        </CardPerfil>
        <Spacer y={4} />
      </div> 
      <Footer
      /> 
     
    </div>
    
    
    
  );
}
