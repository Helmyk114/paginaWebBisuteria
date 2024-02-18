import React from "react";
import { Spacer } from "@nextui-org/react";
import CardPerfil from "../components/UI/perfil/cardInfo";
import Navigate, { Notificacion, Retroceder, Titulo } from "../components/UI/navbar/navbar";

export default function Perfilinfo() {
  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Perfil" />
        <Notificacion />
      </Navigate>
      <div style={{ backgroundColor: "red", width: "100%", padding: "1px", borderRadius: "13px" }}>
        <Spacer y={4} />
        <CardPerfil
          texto={"Usuario"}
          texto2={"Usuario1"}
          icon={"gridicons:user-circle"}>
        </CardPerfil>
        <Spacer y={4} />
        <CardPerfil
          texto={"Cedula"}
          texto2={"012345"}
          icon={"mdi:user-card-details"}>
        </CardPerfil>
        <Spacer y={4} />
        <CardPerfil
          texto={"Email"}
          texto2={"Usuario1@gmial.com"}
          icon={"mdi:email"}>
        </CardPerfil>
        <Spacer y={4} />
        <CardPerfil
          texto={"Celular"}
          texto2={"301393939"}
          icon={"mdi:telephone"}>
        </CardPerfil>
        <Spacer y={4} />
        <CardPerfil
          texto={"Numero de cuenta"}
          texto2={"00001"}
          icon={"mdi:cash-multiple"}>
        </CardPerfil>
        <Spacer y={4} />
      </div>
    </div>
  );
}
