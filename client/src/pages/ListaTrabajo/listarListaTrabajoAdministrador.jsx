import React, { useState, useEffect } from "react";
import '../ListaTrabajo/ListaTrabajo.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";
import Acordeon from "../../components/UI/Acordeon/Acordeon"


import { listarInformacionConParametroApi } from "../../api/axiosServices";

function ListarListaTrabajoAdministrador() {
  const [informacionLista, setInformacionLista] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const informacionListaC = await listarInformacionConParametroApi('listaTrabajo-Estado', '1');
        setInformacionLista(informacionListaC.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al acceder a la informacion listaTrabajo: ', error);
        setCargando(false);
      }
    };
    data()
  }, [informacionLista]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavigateADM>
        <Retroceder />
        <Titulo espacio="center" titulo="Lista de trabajo" />
      </NavigateADM>
      <Spacer y={4} />
      {cargando ? (
        <Loader />
      ) : (
        <div style={{ display: "flex",  flexWrap: "wrap",  justifyContent:"center", marginLeft: "20px", marginRight: "20px", gap:"10px" }}>
          {informacionLista && informacionLista.length > 0 ? (
            informacionLista.map((datos) => (
              <div className="cont1ListaTA" key={datos.idWorkList}>
                <CardPerfil
                  className1={"card1ListaTA"}
                  className2={"card1ListaTAGap"}>
                  <div className="cont2ListaT">
                    <div className="contTexto1">
                      <Texto1Card texto={datos.listName} fontSize={"15px"}/>
                      <Texto1Card texto={datos.idWorkList}fontSize={"15px"} fontWeight={"200"} />
                    </div>
                    <div
                      className="card2ListaTA">
                      <div className="contTexto2">
                        <Texto2Card texto2={`Artesano: ${datos.workerName} ${datos.workerLastName}`} />
                      </div>
                      <div className="contIcono">
                        <IconoCard

                          icon={"akar-icons:edit"}
                          width={"28px"}
                          height={"28px"} />
                        <Spacer y={5} />
                        <IconoCard

                          icon={"bi:check-circle-fill"}
                          width={"25px"}
                          height={"25px"} />
                      </div>
                    </div>
                  </div>
                </CardPerfil>

                <Spacer y={4} />
              </div>
            ))
          ) : (
            <p>No hay listas de trabajo disponibles.</p>
          )}
        </div>
      )}
      <Spacer y={4} />
      <div className="cont1AcordeonListaTA">
        <Acordeon className={"contAcordeonListaTA"} titulo={"Listas de trabajo terminadas"}>
          <div style={{display:"flex", flexWrap:"wrap"}}>

            <CardPerfil
              className1={"cardListaTerminadaTA"}
              className2={"cardListaTerminadaTAGap"}>
              <div className="contenedor1ListaT">


                <div className="contIconoListaTA" >
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
                    className="contTexto1A" />
                </div>

                <div className="cont2ListaTA">
                  <div className="contTexto1A">
                    <Texto1Card
                      texto={"Nombre de la lista"}
                    />
                    <Texto1Card
                      texto={"Codigo"}
                      fontWeight={"200"}
                    />

                  </div>

                  <div
                    className="card2ListaTA">

                    <div className="contTexto2A">
                      <Texto2Card
                        texto2={"Pago total: 30.000"}
                        fontWeight={"200"}
                      />
                    </div>
                    <div className="contIconoA">

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
              className1={"cardListaTerminadaTA"}
              className2={"cardListaTerminadaTAGap"}>
              <div className="contenedor1ListaT">


                <div className="contIconoListaTA" >
                  <div className="contIconoCheck" style={{ justifyContent: "center" }}>

                    <IconoCard
                      icon={"mage:dollar-fill"}
                      color={"#ffff"}
                    />

                  </div >
                  <Texto1Card

                    texto={"Pagadas"}
                    color={"#ffff"}
                    fontWeight={"400"}
                    className="contTexto1A" />
                </div>

                <div className="cont2ListaTA">
                  <div className="contTexto1A">
                    <Texto1Card
                      texto={"Nombre de la lista"}
                    />
                    <Texto1Card
                      texto={"Codigo"}
                      fontWeight={"200"}
                    />

                  </div>

                  <div
                    className="card2ListaTA">

                    <div className="contTexto2A">
                      <Texto2Card
                        texto2={"Pago total: 30.000"}
                        fontWeight={"200"}
                      />
                    </div>
                    <div className="contIconoA">

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


      <Footer style={{ marginTop: "auto" }} />
    </div>
  )
};


export default ListarListaTrabajoAdministrador;
