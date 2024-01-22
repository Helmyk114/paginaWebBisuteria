import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import'./../Botones/btnPrincipal.css'

function Botones({children}) {
  return (
    
    <Container className='botones'>
    <Row xs={3} md={3} lg={6}>
      {children}
    </Row>
    </Container>
  );
};

function BtnIndividual ({ruta, icono, texto}) {
    return(

        <Col className='btn'>
          <Link to={ruta}>
            {icono}
            <p>{texto}</p>
          </Link>
        </Col>
    );
};

export default Botones
export {BtnIndividual};