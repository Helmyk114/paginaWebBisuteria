import React from "react";
import {Card, Image} from "@nextui-org/react";
import CardPerfil from "../components/UI/perfil/cardInfo";


export default function Perfilinfo() {
  return (
    <Card style={{width:"90%"}}>
      
      <CardPerfil
      texto={"Usuario1"}
      
      >

      </CardPerfil>
      <div style={{width:"100%", margin:"0 auto", display:"flex", justifyContent:"center", opacity:"100"}}>
      <Image
      src= "https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
      />
        
      </div>

       
      
    </Card>
  );
}
