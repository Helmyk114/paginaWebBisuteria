import React, { useState, useEffect } from "react";
import { Spacer } from "@nextui-org/react";
// import Navigate, { Notificacion, Retroceder, Titulo } from "../components/UI/navbar/navbar";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../components/UI/perfil/cardInfo";
import Avatares from "../components/UI/avatar/Avatares";
import Loader from "../components/UI/cargando/loader";
import Footer from "../components/UI/Footer/Footer";

import { detalleInformacionApi } from "../api/productos";
import { decodificarToken, obtenerToken } from "../utils/token";

import { Link } from "react-router-dom";
import BotonCantidad from "../components/UI/botones/botonCantidad";
import NavigateVEN, { Retroceder, Titulo } from "../components/UI/navbar/navbarVendedor";

export default function PerfilinfoTrabajador() {

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
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion del perfil: ', error);
        setCargando(false);
      }
    };
    data();
  }, [idCardWorker]);

  return (
    <div>
      <NavigateVEN>
        <Retroceder />
        <Titulo espacio="center" titulo="Perfil" />
      </NavigateVEN>

      {cargando ? (
        <Loader />
      ) : (
        <div>
          {informacion && informacion.length > 0 ? (
            informacion.map((datos) => (
              <div className="perfil" key={datos.idCardWorker} style={{ height: "100%" }}>
                <div style={{ marginTop:"-61px", width: "100%", height: "38%", padding: "10px", display: "flex", alignItems: "center", gap: "30px", position: "absolute", backgroundColor: "#454F96" }}>
                  <Avatares
                    className={'w-15 h-15'}
                    maxWidth={"90px"}
                    radio={"full"}
                    src={`${urlImage}/${datos.photo}`}
                  />
                  <div>
                    <Texto1Card
                      texto={`${datos.workerName} ${datos.workerLastName}`}
                      color={"#fff"}
                      fontSize={"30px"}
                    />
                    <Texto2Card
                      texto2={`${datos.roles}`}
                      color={"#fff"}
                    />
                  </div>
                </div>
                <Spacer y={4} />
                <div style={{ backgroundColor: "#EEEEEE", width: "90%", padding: "1px", borderRadius: "13px", margin: "0 auto", marginBottom: "30px", position: "relative", top: "147px", zIndex: "1" }}>
                  <Spacer y={4} />
                  <CardPerfil
                    className={"cardPerfil"}
                    gap={"13px"}
                    display={"flex"}
                    justifyContent={"start"}>
                    <IconoCard icon={"gridicons:user-circle"} />
                    <div style={{ display: "block" }}>
                      <Texto1Card
                        texto={"Usuario"} />
                      <Texto2Card
                        texto2={`${datos.workerName}`} />
                    </div>
                  </CardPerfil>
                  <Spacer y={3} />
                  <CardPerfil
                    className={"cardPerfil"}
                    gap={"13px"}
                    display={"flex"}
                    justifyContent={"start"}>
                    <IconoCard icon={"mdi:user-card-details"} />
                    <div style={{ display: "block" }}>
                      <Texto1Card
                        texto={"Cedula"} />
                      <Texto2Card
                        texto2={datos.idCardWorker}
                      />
                    </div>
                  </CardPerfil>
                  <Spacer y={3} />
                  <CardPerfil
                    className={"cardPerfil"}
                    gap={"13px"}
                    display={"flex"}
                    justifyContent={"start"}>
                    <IconoCard icon={"mdi:email"} />
                    <div style={{ display: "block" }}>
                      <Texto1Card
                        texto={"Email"} />
                      <Texto2Card
                        texto2={datos.workerEmail} />
                    </div>
                  </CardPerfil>
                  <Spacer y={3} />
                  <CardPerfil
                  className={"cardPerfil"}
                  gap={"13px"}
                  display={"flex"}
                  justifyContent={"start"}>
                    <IconoCard icon={"mdi:telephone"} />
                    <div style={{ display: "block" }}>
                      <Texto1Card
                        texto={"Telefono"} />
                      <Texto2Card
                        texto2={datos.workerPhone} />
                    </div>
                  </CardPerfil>
                  <Spacer y={3} />
                  <CardPerfil
                  className={"cardPerfil"}
                  gap={"13px"}
                  display={"flex"}
                  justifyContent={"start"}>
                    <IconoCard icon={"mdi:cash-multiple"} />
                    <div style={{ display: "block" }}>
                      <Texto1Card
                        texto={"Numero de cuenta"} />
                      <Texto2Card
                        texto2={`${datos.numberBank} ${datos.banks}`} />
                    </div>
                  </CardPerfil>
                  <Spacer y={3} />
                  <Link to={`/editar/trabajador/${datos.idCardWorker}`}>
                    <CardPerfil
                    className={"cardPerfil"} alignItems={"center"}
                      justifyContent={"space-between"}>
                      <IconoCard icon={"akar-icons:edit"} />
                      <div>
                        <Texto1Card
                          texto={"Editar"}
                          fontSize={"20px"} />
                      </div>
                      <div>
                        <IconoCard icon={"akar-icons:arrow-right"}
                          width={"35"}
                          height={"35"} />
                      </div>
                    </CardPerfil>
                    <Spacer y={4} />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No hay información disponible</p>
          )}
        </div>
      )}
      <Spacer y={4} />
      <div style={{ position: "flex", bottom: "0", width: "100%", marginTop: "165px" }}>
        <Footer />
      </div>
    </div>
  );
};