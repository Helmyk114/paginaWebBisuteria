import React from "react";
import '../ListaTrabajo/ListaTrabajo.css'

import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Footer from "../../components/UI/Footer/Footer";
import Acordeon from "../../components/UI/Acordeon/Acordeon"
import { Spacer } from "@nextui-org/react";


function ListarListaTrabajoAdministrador() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavigateADM>
        <Retroceder />
        <Titulo espacio="center" titulo="Lista de trabajo" />
      </NavigateADM>
      <div style={{ marginBottom: "30px" }}>
      </div>
      <div style={{ flex: "1", marginLeft: "20px", marginRight: "20px" }}>
        <div className="cont1ListaTA">
          <CardPerfil
            className1="card1ListaTA"
            className2="card1ListaTAGap">

            <div className="cont2ListaTA">

              <div className="contTexto1">
                <Texto1Card
                  texto={"Nombre de la lista"} />
              </div>
              <div
                className="card2ListaTA">
                <div className="contTexto2">
                  <Texto2Card
                    texto2={"Nombre trabajador"}
                  />
                  <Texto2Card
                    texto2={"Total pago: 123$"} />
                </div>


                <div className="contIcono">
                  <IconoCard
                    icon={"akar-icons:edit"}
                    width={"28px"}
                    height={"28px"} />
                </div>

              </div>
            </div>
          </CardPerfil>
          <div className="cont1AcordeonListaTA">
            <Acordeon className={"contAcordeonListaTA"} titulo={"Listas de trabajo terminadas"}>
              <div className="cont1AcordeonListaT">

                <CardPerfil
                  className="card1ListaT">
                  <div className="contenedor1ListaT">


                    <div className="contIconoListaT" >
                      <div className="contIconoCheck" style={{ justifyContent: "center" }}>

                        <IconoCard
                          icon={"icon-park-solid:check-one"}
                          color={"#ffff"}
                        />

                      </div >
                      <Texto1Card

                        texto={"Finalizdo"}
                        color={"#ffff"}
                        fontWeight={"400"}
                        className="contTexto1" />
                    </div>

                    <div className="cont2ListaT">


                      <div className="contTexto1">
                        <Texto1Card
                          texto={"Nombre de la lista"}
                        />
                        <Texto1Card
                          texto={"Codigo"}
                          fontWeight={"200"}
                        />

                      </div>

                      <div
                        className="card2ListaT">

                        <div className="contTexto2">
                          <Texto2Card
                            texto2={"Pago total: 30.000"}
                            fontWeight={"200"}
                          />
                        </div>
                        <div className="contIcono">

                          <IconoCard
                            icon={"akar-icons:arrow-right"}
                            className="iconoFlecha"
                          />

                        </div>

                      </div>
                    </div>
                  </div>

                </CardPerfil>
              </div>
            </Acordeon>
            <Spacer y={3} />
            <Acordeon className={"contAcordeonListaTA"} titulo={"Listas de trabajo pagas"}>
              <div className="cont1AcordeonListaT">
                <CardPerfil
                  className="card1ListaT">
                  <div className="contenedor1ListaT">


                    <div className="contIconoListaT" >
                      <div className="contIconoCheck" style={{ justifyContent: "center" }}>

                        <IconoCard
                          icon={"mage:dollar-fill"}
                          color={"#ffff"}
                        />

                      </div >
                      <Texto1Card

                        texto={"Pagas"}
                        color={"#ffff"}
                        fontWeight={"400"}
                        className="contTexto1" />
                    </div>

                    <div className="cont2ListaT">


                      <div className="contTexto1">
                        <Texto1Card
                          texto={"Nombre de la lista"}
                        />
                        <Texto1Card
                          texto={"Codigo"}
                          fontWeight={"200"}
                        />

                      </div>

                      <div
                        className="card2ListaT">

                        <div className="contTexto2">
                          <Texto2Card
                            texto2={"Pago total: 30.000"}
                            fontWeight={"200"}
                          />
                        </div>
                        <div className="contIcono">

                          <IconoCard
                            icon={"akar-icons:arrow-right"}
                            className="iconoFlecha"
                          />

                        </div>

                      </div>
                    </div>
                  </div>

                </CardPerfil>


              </div>

            </Acordeon>

          </div>

        </div>
      </div>


      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
};

export default ListarListaTrabajoAdministrador;