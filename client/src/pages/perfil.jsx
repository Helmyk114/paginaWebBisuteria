import React from "react";
import { Spacer } from "@nextui-org/react";
import CardPerfil from "../components/UI/perfil/cardInfo";
import Navigate, { Notificacion, Retroceder, Titulo } from "../components/UI/navbar/navbar";
import { IconoCard, Texto1Card, Texto2Card } from "../components/UI/perfil/cardInfo";
import Avatares from "../components/UI/avatar/Avatares";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { detalleInformacionApi } from "../api/productos";
import { decodificarToken, obtenerToken } from "../utils/token";
import Loader from "../components/UI/cargando/loader";

export default function Perfilinfo() {

  const [informacion, setInformacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const token = obtenerToken();
  const idCardWorker = decodificarToken(token).userId;
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const informacionPerfil = await detalleInformacionApi("perfil", idCardWorker);
        setInformacion(informacionPerfil.data);
        console.log(informacionPerfil.data)
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion del perfil: ',error);
        setCargando(false);
      }
    };
    data();
  }, [idCardWorker]);

  return (
    <div>
      <Navigate>
        <Retroceder />
        <Titulo espacio="center" titulo="Perfil" />
        <Notificacion />
      </Navigate>

      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <div className="perfil" key={datos.idCardWorker}>
              <div style={{ width: "100%", height: "35%", padding: "10px", display: "flex", alignItems: "center", gap: "30px", position: "absolute", backgroundColor: "#454F96" }}>
              <Avatares
                className={"w-15 h-15 "}
                radio={"full"}
                src={`${urlImage}/${datos.photo}`}
              />
              <div>
                <p className="text-xl font-semibold leading-none text-white">{`${datos.workerName} ${datos.workerLastName}`}</p>
                <h2 className="text-small tracking-tight text-white ">{`${datos.roles}`}</h2>
              </div>
            </div>
            <Spacer y={4} />
            <div style={{ backgroundColor: "#EEEEEE", width: "90%", padding: "1px", borderRadius: "13px", margin: "0 auto", marginBottom: "30px", position: "relative", top: "185px", zIndex: "1" }}>
              <Spacer y={4} />
              <CardPerfil>
                <IconoCard icon={"gridicons:user-circle"} />
                <div style={{ display: "block" }}>
                  <Texto1Card
                    texto={"Usuario"} />
                  <Texto2Card
                    texto2={`${datos.workerName}`} />
                </div>
              </CardPerfil>
              <Spacer y={3} />
              <CardPerfil>
                <IconoCard icon={"mdi:user-card-details"} />
                <div style={{ display: "block" }}>
                  <Texto1Card
                    texto={"Cedula"} />
                  <Texto2Card
                    texto2={datos.idCardWorker} />
                </div>
              </CardPerfil>
              <Spacer y={3} />
              <CardPerfil>
                <IconoCard icon={"mdi:email"} />
                <div style={{ display: "block" }}>
                  <Texto1Card
                    texto={"Email"} />
                  <Texto2Card
                    texto2={datos.workerEmail} />
                </div>
              </CardPerfil>
              <Spacer y={3} />
              <CardPerfil>
                <IconoCard icon={"mdi:telephone"} />
                <div style={{ display: "block" }}>
                  <Texto1Card
                    texto={"Telefono"} />
                  <Texto2Card
                    texto2={datos.workerPhone} />
                </div>
              </CardPerfil>
              <Spacer y={3} />
              <CardPerfil>
                <IconoCard icon={"mdi:cash-multiple"} />
                <div style={{ display: "block" }}>
                  <Texto1Card
                    texto={"Numero de cuenta"} />
                  <Texto2Card
                    texto2={`${datos.numberBank} ${datos.banks}`} />
                </div>
              </CardPerfil>
              <Spacer y={3} />
              <CardPerfil alignItems={"center"}
                gap={"70px"}
                style={{ display: "flex", justifyContent: " space-between" }}>
                <IconoCard icon={"akar-icons:edit"} />
                <Texto1Card
                  texto={"Editar"}
                  fontSize={"20px"} />
                <IconoCard icon={"akar-icons:arrow-right"}
                  width={"35"}
                  height={"35"} />
              </CardPerfil>
            </div>
            </div>
            ))
            ) : (
              <p>No hay información disponible</p>
              )}
        </div>
      )}
     
      <Spacer y={4} />
      <Footer
      />

    </div>
  );
};
