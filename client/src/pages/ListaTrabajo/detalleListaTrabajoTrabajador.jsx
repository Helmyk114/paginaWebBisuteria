import React from "react"

import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";



function DetalleTrabajo() {
    return (
        <div>
            <NavigateTRJ>
                <Retroceder />
                <Titulo espacio="center" titulo="Lista de trabajo" />
            </NavigateTRJ>
            <div>
                <CardPerfil
                className1={"cardListaPro"}
                className2={"cardListaProGap"}>
                    <Avatares
                        src={""}
                        radio={"full"} />
                    <div >
                        <Texto1Card
                            className={"texto1CardListaPro"}
                            textAlign={"start"}
                            texto={"datos.nameProduct"} />
                    </div>
                    <div >
                        <Texto1Card
                            className={"texto1CardListaPro"}
                            textAlign={"start"}
                            texto={"2"} />
                    </div>
                    <div >
                        <Texto1Card
                            className={"texto1CardListaPro"}
                            textAlign={"start"}
                            texto={"20.000$"} />
                    </div>

                </CardPerfil>
            </div>
            <div style={{ display: "block", justifyContent: "space-evenly" }}>
                <Footer />
            </div>

        </div>
    )
}

export default DetalleTrabajo