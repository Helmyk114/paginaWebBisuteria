import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Producto/añadirProducto.css';
import CampoTexto from '../Controles/campoTexto';
import ComboBox from '../Controles/comboBox';

function EditarTrabajador({ control, informacionTrabajador }) {

	if (!informacionTrabajador || Object.keys(informacionTrabajador).length === 0) {
		return <div>Cargando...</div>;
	};

	return (
		<div className='content1'>
			<Card className='card' style={{ width: '40rem' }}>

				<Row>
					<Col>
						<CampoTexto
							idCampo="nombreTrabajador"
							titulo="Nombre"
							apiName="workerName"
							mensaje="Nombre"
							titulo2=" "
							control={control}
							ancho='100%'
							valorDefecto={informacionTrabajador[0].workerName ?? ""}
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
							valorDefecto={informacionTrabajador[0].workerLastName ?? ""}
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
							valorDefecto={informacionTrabajador[0].workerEmail}
						/>
					</Col>

					<Col>
						<CampoTexto
							idCampo="celularTrabajador"
							titulo="Celular"
							apiName="workerPhone"
							titulo2=""
							control={control}
							ancho='100%'
							valorDefecto={informacionTrabajador[0].workerPhone}
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
							valorDefecto={informacionTrabajador[0].userName}
						/>
					</Col>
					<Col>
						<CampoTexto
							idCampo="contraseñaTrabajador"
							titulo="Contraseña"
							apiName="password"
							titulo2=""
							control={control}
							ancho='100%'
							valorDefecto={informacionTrabajador[0].password}
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
							valorDefecto={informacionTrabajador[0].numberBank}
						/>
					</Col>

					<Col>
						<ComboBox
							idCombox="banco"
							titulo="Banco"
							tituloRegistro="idBank"
							valorDefecto={informacionTrabajador[0].idBank}
							control={control}
							apiEndpoint="banco"
							idOpcion="idBank"
							texto="banks"
						/>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default EditarTrabajador;