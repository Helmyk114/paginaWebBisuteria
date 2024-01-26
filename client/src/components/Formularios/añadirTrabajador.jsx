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
                    ancho='100%' 
                    
              />
              </Col>
              <Col>
              <CampoTexto 
                    idCampo="apellidoTrabajador" 
                    titulo="Apellido" 
                    apiName="workerLastName" 
                    titulo2="" 
                    control={control}
                    ancho='100%' 
              />
              </Col>
            </Row>

            <Row>
              <Col>
              <CampoTexto 
                    idCampo="correoTrabajador" 
                    titulo="Correo" 
                    apiName="workerEmail" 
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
                    ancho='100%' 
              />
              </Col>

              <Col>
              <CampoTexto 
                    idCampo="ccTrabajador" 
                    titulo="Cedula" 
                    apiName="idCardWorker" 
                    titulo2="" 
                    control={control}
                    ancho='100%' 
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
                    idCombox="rol"
                    titulo="Rol" 
                    tituloRegistro= "idRole"
                    valorDefecto="Selecciona un rol"
                    control={control}
                    apiEndpoint="rol"
                    idOpcion="idRole"
                    texto="roles"
              />
              </Col>
            </Row>

            <Row>
              <Col>
              <CampoTexto 
                    idCampo="cuentaTrabajador" 
                    titulo="Numero de cuenta" 
                    apiName="numberBank" 
                    titulo2="" 
                    control={control}
                    ancho='100%' 
              />
              </Col>

              <Col>
              <ComboBox 
                    idCombox="banco"
                    titulo="Banco" 
                    tituloRegistro= "idBank"
                    valorDefecto="Selecciona un banco"
                    control={control}
                    apiEndpoint="banco"
                    idOpcion="idBank"
                    texto="banks"
              />
              </Col>
            </Row>
             
          </Card>
        </FormProvider>
      </div>
    );
};

export default FormularioTrabajador;