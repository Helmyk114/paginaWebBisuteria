import React from 'react'
import { Button } from 'react-bootstrap';
import '../BotonFormularios/btnFormularios.css';

//Boton enviar para los formularios
const BtnFormularios = ({ btnTitulo, type }) => {
  return (
    <div>
      <Button className='btn-form' type={type}>
        {btnTitulo}
      </Button>
    </div>
  )
};

export default BtnFormularios