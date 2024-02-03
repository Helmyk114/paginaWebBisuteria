import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'
import { infoComboBox } from '../../../api/formularios'

const ComboBox = ({ titulo, idCombox, tituloRegistro, valorDefecto, apiEndpoint, control, idOpcion, texto }) => {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    const obtenerOpciones = async () => {
      try {
        const response = await infoComboBox(apiEndpoint)
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

    <Form.Group className="mb-3" controlId={idCombox} >
      <Form.Label >{titulo}</Form.Label>
      <Form.Select
        {...control.register(tituloRegistro)}
        value={opcionSeleccionada}
        onChange={handleChange} >
        <option value="" disabled>{valorDefecto}</option>
        {opciones && opciones.length > 0 ? (
          opciones.map((opcion) => (
            <option key={opcion[idOpcion]} value={opcion[idOpcion]}>
              {opcion[texto]}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay opciones disponibles
          </option>
        )}
      </Form.Select>
    </Form.Group>
  );
};

export default ComboBox