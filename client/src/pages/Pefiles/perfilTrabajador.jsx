import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import '../Pefiles/perfil.css';
import { Col, Row, Image, Container, Card } from "react-bootstrap";


function Perfil() {
  return (
    <div>
      {/* <Navbar>
        <BotonRetroceder />
        <Titulo
          texto='Perfil'
        />
        <Notificacion />
      </Navbar> */}
      <Container className="card-perfil">
        <Row className='componentes' xs={2} md={2} lg={2} >
          <Col>
            <Image className="img-perfil" alt="una Imagen" roundedCircle width="70px" height="70px" />
          </Col>
          <Col>
            <h1 className=" tituloPerfil">Trabajador</h1>
          </Col>
        </Row>
      </Container>
      <Container className="card-info">
      </Container>




      <Footer />
    </div>
  )
}

export default Perfil