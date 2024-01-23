import React, { FormProvider, useForm } from 'react-hook-form'
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './añadirProducto.css';
import CampoTexto from './Controles/campoTexto';
import ComboBox from './Controles/comboBox';

function FormularioTrabajador({ control }) {
    
    return (
        <div className='content1'>
        <FormProvider {...useForm({ control })}>
          <Card className='card' style={{width: '40rem'}}>
            
            <Row>

            <Row>
            <Col>
            
            <CampoTexto 
                  idCampo="idCardWorker" 
                  titulo="Nombre" 
                  apiName="workerName" 
                  titulo2=" " 
                  control={control}
                  ancho='80%' 
                />

            </Col>
            <Col>
            <CampoTexto 
                  idCampo="precioComercial" 
                  titulo="Apellido" 
                  apiName="price" 
                  titulo2="COP" 
                  control={control}
                  ancho='150%' 
                />

            </Col>
                
            </Row>
              
                
                <CampoTexto 
                  idCampo="precioObra" 
                  titulo="Precio mano de obra (PO)" 
                  apiName="laborPrice" 
                  titulo2="COP" 
                  control={control}
                  ancho='40%' 
                />
                
                <ComboBox 
                  idCombox="categoria"
                  titulo="Categoria" 
                  tituloRegistro= "idCategory"
                  valorDefecto="Selecciona una categoria"
                  control={control}
                  apiEndpoint="categoria"
                  idOpcion="idCategory"
                  texto="categorys"
                />
                
            
            </Row>
          </Card>
        </FormProvider>
      </div>
    );
};

export default FormularioTrabajador;