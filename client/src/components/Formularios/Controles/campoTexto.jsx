import React from 'react-hook-form'
import { Form, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const CampoTexto = ({ idCampo, titulo, apiName, mensaje, titulo2, control, ancho }) => {
    
    return (
        <FormGroup controlId={idCampo}>
            <Form.Label>{titulo}</Form.Label>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Form.Control 
                {...control.register(apiName , { required: { value: true, message: `${mensaje} es requerido` }})} 
                type="text" 
                className="custom-width" 
                style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: ancho}} 
            />
            
          <Form.Label style={{marginLeft: '6px'}}>{titulo2}</Form.Label>
        </div>
        </FormGroup>
    );
};

export default  CampoTexto;