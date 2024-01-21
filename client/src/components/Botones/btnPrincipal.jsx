import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import'./../Botones/btnPrincipal.css'
import { NavLink } from 'react-router-dom'

function Botones({children}) {
  return (
    
    <Container className='botones'>
    <Row xs={3} md={3} lg={6}>
      {children}
    </Row>
    </Container>
  );
};

function BtnIndividual ({icono, texto}) {
    return(

        <Col className='btn'>
            {icono}
            <p>{texto}</p>
        </Col>
    );
};

export default Botones
export {BtnIndividual};