import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Producto/añadirProducto.css';
import CampoTexto from '../Controles/campoTexto';
import ComboBox from '../Controles/comboBox';

function EditarProducto({ control, informacionProducto }) {
  
  if(!informacionProducto || Object.keys(informacionProducto).length === 0) {
    return <div>Cargando...</div>
  };

  return (
    <div className='content1'>
      <Card className='card' style={{ width: '40rem' }}>
        <Row>
          <Col>
            <CampoTexto
              idCampo="nombreProducto"
              titulo="Nombre del producto"
              apiName="nameProduct"
              titulo2=" "
              control={control}
              ancho='80%'
              valorDefecto={informacionProducto[0].nameProduct}
            />
            <CampoTexto
              idCampo="precioComercial"
              titulo="Precio Comercial (PC)"
              apiName="price"
              titulo2="COP"
              control={control}
              ancho='40%'
              valorDefecto={informacionProducto[0].price}
            />
            <CampoTexto
              idCampo="precioObra"
              titulo="Precio mano de obra (PO)"
              apiName="laborPrice"
              titulo2="COP"
              control={control}
              ancho='40%'
              valorDefecto={informacionProducto[0].laborPrice}
            />

            <ComboBox
              idCombox="categoria"
              titulo="Categoria"
              tituloRegistro="idCategory"
              valorDefecto="Selecciona una categoria"
              control={control}
              apiEndpoint="categoria"
              idOpcion="idCategory"
              texto="categorys"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EditarProducto;