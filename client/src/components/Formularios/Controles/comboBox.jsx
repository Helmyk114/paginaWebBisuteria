import React, { useEffect, useState } from 'react';
import {Form } from 'react-bootstrap'
import { categoriaAPI } from '../../api/productos'

const ComboBox = ({ titulo, idCombox, tituloRegistro, valorDefecto,apiEndpoint, control, idOpcion, texto }) => {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    const obtenerOpciones = async () => {
      try {
        const response = await categoriaAPI(apiEndpoint)
        setOpciones(response.data);
      } catch (error) {
        console.error('Error al obtener opciones:', error);
      }
    };

    obtenerOpciones();
  }, [apiEndpoint]);

  const handleChange = (e) => {
    setOpcionSeleccionada(e.target.value);
  };

  return (
   
    <Form.Group  className="mb-3" controlId={idCombox} >
    <Form.Label >{titulo}</Form.Label>
        <Form.Select  
        id="Select" 
        {...control.register(tituloRegistro)}
        value={opcionSeleccionada} 
        onChange={handleChange} >
        <option value="" disabled>{valorDefecto}</option>
        {opciones.map((opcion)=> (
          <option key={opcion[idOpcion]} value={opcion[idOpcion]}>
            {opcion[texto]}
          </option>
        ))}
        </Form.Select> 
     </Form.Group>
  );
};

export default ComboBox