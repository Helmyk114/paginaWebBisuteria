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
            <Col>
            <CampoTexto 
                  idCampo="nombreTrabajador" 
                  titulo="Nombre" 
                  apiName="workerName" 
                  titulo2=" " 
                  control={control}
                  ancho='80%' 
                />
            </Col>
            <Col>
            <CampoTexto 
                  idCampo="apellidoTrabajador" 
                  titulo="Apellido" 
                  apiName="workerLastName" 
                  titulo2="" 
                  control={control}
                  ancho='150%' 
                />

            </Col>
            </Row>
            <Row>
            <Col>
            <CampoTexto 
                  idCampo="CorreoTrabajador" 
                  titulo="Correo" 
                  apiName="workEmail" 
                  titulo2="" 
                  control={control}
                  ancho='100%' 
                />

            </Col>

            </Row>
            
            <Row>
            
            <Col>
            <CampoTexto 
                  idCampo="celularTrabajador" 
                  titulo="Celular" 
                  apiName="workerPhone" 
                  titulo2="" 
                  control={control}
                  ancho='50%' 
                />

            </Col>
            <Col>
            <CampoTexto 
                  idCampo="ccTrabajador" 
                  titulo="Cedula" 
                  apiName="idCardWorker" 
                  titulo2="" 
                  control={control}
                  ancho='50%' 
                />

            </Col>
                
            </Row>

            <Row>
            <Col>
            
            <CampoTexto 
                  idCampo="usuarioTrabajador" 
                  titulo="Usuario" 
                  apiName="userName" 
                  titulo2=" " 
                  control={control}
                  ancho='100%' 
                />

            </Col>
            </Row>
            <Row>
            <Col>
            <CampoTexto 
                  idCampo="contraseñaTrabajador" 
                  titulo="Contraseña" 
                  apiName="password" 
                  titulo2="" 
                  control={control}
                  ancho='100%' 
                />

            </Col>
            </Row>

            <Row>
            <Col>
            <ComboBox 
                  idCombox=""
                  titulo="Rol" 
                  tituloRegistro= "idRole"
                  valorDefecto="Selecciona un rol"
                  control={control}
                  apiEndpoint="rol"
                  idOpcion="idRole"
                  texto="categorys"
                />

            </Col>

            </Row>
            <Row>
            <Col>
            <CampoTexto 
                  idCampo="nCuentaTrabajador" 
                  titulo="Numero de cuenta" 
                  apiName="password" 
                  titulo2="" 
                  control={control}
                  ancho='150%' 
                />

            </Col>
            <Col>
            <ComboBox 
                  idCombox=""
                  titulo="Banco" 
                  tituloRegistro= "idRole"
                  valorDefecto="Selecciona un banco"
                  control={control}
                  apiEndpoint="rol"
                  idOpcion="idRole"
                  texto="categorys"
                />
            </Col>
            </Row>
             
          </Card>
        </FormProvider>
      </div>
    );
};

export default FormularioTrabajador;